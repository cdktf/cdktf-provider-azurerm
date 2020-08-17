// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_api_management.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermApiManagementConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermApiManagementTimeouts;
}
export class DataAzurermApiManagementAdditionalLocation extends ComplexComputedList {

  // gateway_regional_url - computed: true, optional: false, required: true
  public get gatewayRegionalUrl() {
    return this.getStringAttribute('gateway_regional_url');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // public_ip_addresses - computed: true, optional: false, required: true
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }
}
export class DataAzurermApiManagementHostnameConfigurationManagement extends ComplexComputedList {

  // host_name - computed: true, optional: false, required: true
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: true
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: true
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationPortal extends ComplexComputedList {

  // host_name - computed: true, optional: false, required: true
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: true
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: true
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationProxy extends ComplexComputedList {

  // default_ssl_binding - computed: true, optional: false, required: true
  public get defaultSslBinding() {
    return this.getBooleanAttribute('default_ssl_binding');
  }

  // host_name - computed: true, optional: false, required: true
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: true
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: true
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationScm extends ComplexComputedList {

  // host_name - computed: true, optional: false, required: true
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: true
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: true
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfiguration extends ComplexComputedList {

  // management - computed: true, optional: false, required: true
  public get management() {
    return 'not implemented' as any;
  }

  // portal - computed: true, optional: false, required: true
  public get portal() {
    return 'not implemented' as any;
  }

  // proxy - computed: true, optional: false, required: true
  public get proxy() {
    return 'not implemented' as any;
  }

  // scm - computed: true, optional: false, required: true
  public get scm() {
    return 'not implemented' as any;
  }
}
export interface DataAzurermApiManagementTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermApiManagement extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermApiManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_location - computed: true, optional: false, required: true
  public additionalLocation(index: string) {
    return new DataAzurermApiManagementAdditionalLocation(this, 'additional_location', index);
  }

  // gateway_regional_url - computed: true, optional: false, required: true
  public get gatewayRegionalUrl() {
    return this.getStringAttribute('gateway_regional_url');
  }

  // gateway_url - computed: true, optional: false, required: true
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
  }

  // hostname_configuration - computed: true, optional: false, required: true
  public hostnameConfiguration(index: string) {
    return new DataAzurermApiManagementHostnameConfiguration(this, 'hostname_configuration', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // management_api_url - computed: true, optional: false, required: true
  public get managementApiUrl() {
    return this.getStringAttribute('management_api_url');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // notification_sender_email - computed: true, optional: false, required: true
  public get notificationSenderEmail() {
    return this.getStringAttribute('notification_sender_email');
  }

  // portal_url - computed: true, optional: false, required: true
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }

  // public_ip_addresses - computed: true, optional: false, required: true
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // publisher_email - computed: true, optional: false, required: true
  public get publisherEmail() {
    return this.getStringAttribute('publisher_email');
  }

  // publisher_name - computed: true, optional: false, required: true
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // scm_url - computed: true, optional: false, required: true
  public get scmUrl() {
    return this.getStringAttribute('scm_url');
  }

  // sku_name - computed: true, optional: false, required: true
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermApiManagementTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermApiManagementTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
