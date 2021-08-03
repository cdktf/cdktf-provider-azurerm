// https://www.terraform.io/docs/providers/azurerm/d/active_directory_domain_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermActiveDirectoryDomainServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/active_directory_domain_service.html#name DataAzurermActiveDirectoryDomainService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/active_directory_domain_service.html#resource_group_name DataAzurermActiveDirectoryDomainService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/active_directory_domain_service.html#timeouts DataAzurermActiveDirectoryDomainService#timeouts}
  */
  readonly timeouts?: DataAzurermActiveDirectoryDomainServiceTimeouts;
}
export class DataAzurermActiveDirectoryDomainServiceNotifications extends cdktf.ComplexComputedList {

  // additional_recipients - computed: true, optional: false, required: false
  public get additionalRecipients() {
    return this.getListAttribute('additional_recipients');
  }

  // notify_dc_admins - computed: true, optional: false, required: false
  public get notifyDcAdmins() {
    return this.getBooleanAttribute('notify_dc_admins');
  }

  // notify_global_admins - computed: true, optional: false, required: false
  public get notifyGlobalAdmins() {
    return this.getBooleanAttribute('notify_global_admins');
  }
}
export class DataAzurermActiveDirectoryDomainServiceReplicaSets extends cdktf.ComplexComputedList {

  // domain_controller_ip_addresses - computed: true, optional: false, required: false
  public get domainControllerIpAddresses() {
    return this.getListAttribute('domain_controller_ip_addresses');
  }

  // external_access_ip_address - computed: true, optional: false, required: false
  public get externalAccessIpAddress() {
    return this.getStringAttribute('external_access_ip_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // service_status - computed: true, optional: false, required: false
  public get serviceStatus() {
    return this.getStringAttribute('service_status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataAzurermActiveDirectoryDomainServiceSecureLdap extends cdktf.ComplexComputedList {

  // certificate_expiry - computed: true, optional: false, required: false
  public get certificateExpiry() {
    return this.getStringAttribute('certificate_expiry');
  }

  // certificate_thumbprint - computed: true, optional: false, required: false
  public get certificateThumbprint() {
    return this.getStringAttribute('certificate_thumbprint');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // external_access_enabled - computed: true, optional: false, required: false
  public get externalAccessEnabled() {
    return this.getBooleanAttribute('external_access_enabled');
  }

  // public_certificate - computed: true, optional: false, required: false
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }
}
export class DataAzurermActiveDirectoryDomainServiceSecurity extends cdktf.ComplexComputedList {

  // ntlm_v1_enabled - computed: true, optional: false, required: false
  public get ntlmV1Enabled() {
    return this.getBooleanAttribute('ntlm_v1_enabled');
  }

  // sync_kerberos_passwords - computed: true, optional: false, required: false
  public get syncKerberosPasswords() {
    return this.getBooleanAttribute('sync_kerberos_passwords');
  }

  // sync_ntlm_passwords - computed: true, optional: false, required: false
  public get syncNtlmPasswords() {
    return this.getBooleanAttribute('sync_ntlm_passwords');
  }

  // sync_on_prem_passwords - computed: true, optional: false, required: false
  public get syncOnPremPasswords() {
    return this.getBooleanAttribute('sync_on_prem_passwords');
  }

  // tls_v1_enabled - computed: true, optional: false, required: false
  public get tlsV1Enabled() {
    return this.getBooleanAttribute('tls_v1_enabled');
  }
}
export interface DataAzurermActiveDirectoryDomainServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/active_directory_domain_service.html#read DataAzurermActiveDirectoryDomainService#read}
  */
  readonly read?: string;
}

function dataAzurermActiveDirectoryDomainServiceTimeoutsToTerraform(struct?: DataAzurermActiveDirectoryDomainServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/active_directory_domain_service.html azurerm_active_directory_domain_service}
*/
export class DataAzurermActiveDirectoryDomainService extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/active_directory_domain_service.html azurerm_active_directory_domain_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermActiveDirectoryDomainServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermActiveDirectoryDomainServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_active_directory_domain_service',
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

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // domain_configuration_type - computed: true, optional: false, required: false
  public get domainConfigurationType() {
    return this.getStringAttribute('domain_configuration_type');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // filtered_sync_enabled - computed: true, optional: false, required: false
  public get filteredSyncEnabled() {
    return this.getBooleanAttribute('filtered_sync_enabled');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // notifications - computed: true, optional: false, required: false
  public notifications(index: string) {
    return new DataAzurermActiveDirectoryDomainServiceNotifications(this, 'notifications', index);
  }

  // replica_sets - computed: true, optional: false, required: false
  public replicaSets(index: string) {
    return new DataAzurermActiveDirectoryDomainServiceReplicaSets(this, 'replica_sets', index);
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

  // secure_ldap - computed: true, optional: false, required: false
  public secureLdap(index: string) {
    return new DataAzurermActiveDirectoryDomainServiceSecureLdap(this, 'secure_ldap', index);
  }

  // security - computed: true, optional: false, required: false
  public security(index: string) {
    return new DataAzurermActiveDirectoryDomainServiceSecurity(this, 'security', index);
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // sync_owner - computed: true, optional: false, required: false
  public get syncOwner() {
    return this.getStringAttribute('sync_owner');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermActiveDirectoryDomainServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermActiveDirectoryDomainServiceTimeouts ) {
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
      timeouts: dataAzurermActiveDirectoryDomainServiceTimeoutsToTerraform(this._timeouts),
    };
  }
}
