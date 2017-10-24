﻿using Kadena.Models;
using Kadena.Models.Settings;

namespace Kadena.WebAPI.Contracts
{
    public interface ISettingsService
    {
        SettingsAddresses GetAddresses();
        void SaveShippingAddress(DeliveryAddress address);
        void SetDefaultShippingAddress(int addressId);
        bool SaveLocalization(string code);
        void UnsetDefaultShippingAddress();
    }
}