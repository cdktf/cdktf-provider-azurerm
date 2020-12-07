// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_api_management.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermApiManagementConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermApiManagementTimeouts;
}
export class DataAzurermApiManagementAdditionalLocation extends cdktf.ComplexComputedList {

  // gateway_regional_url - computed: true, optional: false, required: false
  public get gatewayRegionalUrl() {
    return this.getStringAttribute('gateway_regional_url');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }
}
export class DataAzurermApiManagementHostnameConfigurationDeveloperPortal extends cdktf.ComplexComputedList {

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: false
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationManagement extends cdktf.ComplexComputedList {

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: false
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationPortal extends cdktf.ComplexComputedList {

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: false
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationProxy extends cdktf.ComplexComputedList {

  // default_ssl_binding - computed: true, optional: false, required: false
  public get defaultSslBinding() {
    return this.getBooleanAttribute('default_ssl_binding');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: false
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationScm extends cdktf.ComplexComputedList {

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: false
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfiguration extends cdktf.ComplexComputedList {

  // developer_portal - computed: true, optional: false, required: false
  public get developerPortal() {
    return this.interpolationForAttribute('developer_portal') as any;
  }

  // management - computed: true, optional: false, required: false
  public get management() {
    return this.interpolationForAttribute('management') as any;
  }

  // portal - computed: true, optional: false, required: false
  public get portal() {
    return this.interpolationForAttribute('portal') as any;
  }

  // proxy - computed: true, optional: false, required: false
  public get proxy() {
    return this.interpolationForAttribute('proxy') as any;
  }

  // scm - computed: true, optional: false, required: false
  public get scm() {
    return this.interpolationForAttribute('scm') as any;
  }
}
export class DataAzurermApiManagementIdentity extends cdktf.ComplexComputedList {

  // identity_ids - computed: true, optional: false, required: false
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAzurermApiManagementTimeouts {
  readonly read?: string;
}

function dataAzurermApiManagementTimeoutsToTerraform(struct?: DataAzurermApiManagementTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermApiManagement extends cdktf.TerraformDataSource {

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

  // additional_location - computed: true, optional: false, required: false
  public additionalLocation(index: string) {
    return new DataAzurermApiManagementAdditionalLocation(this, 'additional_location', index);
  }

  // developer_portal_url - computed: true, optional: false, required: false
  public get developerPortalUrl() {
    return this.getStringAttribute('developer_portal_url');
  }

  // gateway_regional_url - computed: true, optional: false, required: false
  public get gatewayRegionalUrl() {
    return this.getStringAttribute('gateway_regional_url');
  }

  // gateway_url - computed: true, optional: false, required: false
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
  }

  // hostname_configuration - computed: true, optional: false, required: false
  public hostnameConfiguration(index: string) {
    return new DataAzurermApiManagementHostnameConfiguration(this, 'hostname_configuration', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new DataAzurermApiManagementIdentity(this, 'identity', index);
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // management_api_url - computed: true, optional: false, required: false
  public get managementApiUrl() {
    return this.getStringAttribute('management_api_url');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // notification_sender_email - computed: true, optional: false, required: false
  public get notificationSenderEmail() {
    return this.getStringAttribute('notification_sender_email');
  }

  // portal_url - computed: true, optional: false, required: false
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // publisher_email - computed: true, optional: false, required: false
  public get publisherEmail() {
    return this.getStringAttribute('publisher_email');
  }

  // publisher_name - computed: true, optional: false, required: false
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // scm_url - computed: true, optional: false, required: false
  public get scmUrl() {
    return this.getStringAttribute('scm_url');
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermApiManagementTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermApiManagementTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermApiManagementTimeoutsToTerraform(this._timeouts),
    };
  }
}
