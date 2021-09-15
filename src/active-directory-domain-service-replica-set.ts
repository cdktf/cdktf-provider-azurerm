// https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryDomainServiceReplicaSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#domain_service_id ActiveDirectoryDomainServiceReplicaSet#domain_service_id}
  */
  readonly domainServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#location ActiveDirectoryDomainServiceReplicaSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#subnet_id ActiveDirectoryDomainServiceReplicaSet#subnet_id}
  */
  readonly subnetId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#timeouts ActiveDirectoryDomainServiceReplicaSet#timeouts}
  */
  readonly timeouts?: ActiveDirectoryDomainServiceReplicaSetTimeouts;
}
export interface ActiveDirectoryDomainServiceReplicaSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#create ActiveDirectoryDomainServiceReplicaSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#delete ActiveDirectoryDomainServiceReplicaSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#read ActiveDirectoryDomainServiceReplicaSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html#update ActiveDirectoryDomainServiceReplicaSet#update}
  */
  readonly update?: string;
}

function activeDirectoryDomainServiceReplicaSetTimeoutsToTerraform(struct?: ActiveDirectoryDomainServiceReplicaSetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html azurerm_active_directory_domain_service_replica_set}
*/
export class ActiveDirectoryDomainServiceReplicaSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_active_directory_domain_service_replica_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/active_directory_domain_service_replica_set.html azurerm_active_directory_domain_service_replica_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryDomainServiceReplicaSetConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveDirectoryDomainServiceReplicaSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_active_directory_domain_service_replica_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainServiceId = config.domainServiceId;
    this._location = config.location;
    this._subnetId = config.subnetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_controller_ip_addresses - computed: true, optional: false, required: false
  public get domainControllerIpAddresses() {
    return this.getListAttribute('domain_controller_ip_addresses');
  }

  // domain_service_id - computed: false, optional: false, required: true
  private _domainServiceId: string;
  public get domainServiceId() {
    return this.getStringAttribute('domain_service_id');
  }
  public set domainServiceId(value: string) {
    this._domainServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainServiceIdInput() {
    return this._domainServiceId
  }

  // external_access_ip_address - computed: true, optional: false, required: false
  public get externalAccessIpAddress() {
    return this.getStringAttribute('external_access_ip_address');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // service_status - computed: true, optional: false, required: false
  public get serviceStatus() {
    return this.getStringAttribute('service_status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ActiveDirectoryDomainServiceReplicaSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ActiveDirectoryDomainServiceReplicaSetTimeouts ) {
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
      domain_service_id: cdktf.stringToTerraform(this._domainServiceId),
      location: cdktf.stringToTerraform(this._location),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: activeDirectoryDomainServiceReplicaSetTimeoutsToTerraform(this._timeouts),
    };
  }
}
