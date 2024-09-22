// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkInterfaceBackendAddressPoolAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association#backend_address_pool_id NetworkInterfaceBackendAddressPoolAssociation#backend_address_pool_id}
  */
  readonly backendAddressPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association#id NetworkInterfaceBackendAddressPoolAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association#ip_configuration_name NetworkInterfaceBackendAddressPoolAssociation#ip_configuration_name}
  */
  readonly ipConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association#network_interface_id NetworkInterfaceBackendAddressPoolAssociation#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association#timeouts NetworkInterfaceBackendAddressPoolAssociation#timeouts}
  */
  readonly timeouts?: NetworkInterfaceBackendAddressPoolAssociationTimeouts;
}
export interface NetworkInterfaceBackendAddressPoolAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association#create NetworkInterfaceBackendAddressPoolAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association#delete NetworkInterfaceBackendAddressPoolAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association#read NetworkInterfaceBackendAddressPoolAssociation#read}
  */
  readonly read?: string;
}

export function networkInterfaceBackendAddressPoolAssociationTimeoutsToTerraform(struct?: NetworkInterfaceBackendAddressPoolAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function networkInterfaceBackendAddressPoolAssociationTimeoutsToHclTerraform(struct?: NetworkInterfaceBackendAddressPoolAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkInterfaceBackendAddressPoolAssociationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkInterfaceBackendAddressPoolAssociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association azurerm_network_interface_backend_address_pool_association}
*/
export class NetworkInterfaceBackendAddressPoolAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_interface_backend_address_pool_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkInterfaceBackendAddressPoolAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkInterfaceBackendAddressPoolAssociation to import
  * @param importFromId The id of the existing NetworkInterfaceBackendAddressPoolAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkInterfaceBackendAddressPoolAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_interface_backend_address_pool_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/network_interface_backend_address_pool_association azurerm_network_interface_backend_address_pool_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkInterfaceBackendAddressPoolAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkInterfaceBackendAddressPoolAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_interface_backend_address_pool_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendAddressPoolId = config.backendAddressPoolId;
    this._id = config.id;
    this._ipConfigurationName = config.ipConfigurationName;
    this._networkInterfaceId = config.networkInterfaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_address_pool_id - computed: false, optional: false, required: true
  private _backendAddressPoolId?: string; 
  public get backendAddressPoolId() {
    return this.getStringAttribute('backend_address_pool_id');
  }
  public set backendAddressPoolId(value: string) {
    this._backendAddressPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressPoolIdInput() {
    return this._backendAddressPoolId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_configuration_name - computed: false, optional: false, required: true
  private _ipConfigurationName?: string; 
  public get ipConfigurationName() {
    return this.getStringAttribute('ip_configuration_name');
  }
  public set ipConfigurationName(value: string) {
    this._ipConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationNameInput() {
    return this._ipConfigurationName;
  }

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkInterfaceBackendAddressPoolAssociationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_address_pool_id: cdktf.stringToTerraform(this._backendAddressPoolId),
      id: cdktf.stringToTerraform(this._id),
      ip_configuration_name: cdktf.stringToTerraform(this._ipConfigurationName),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      timeouts: networkInterfaceBackendAddressPoolAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_address_pool_id: {
        value: cdktf.stringToHclTerraform(this._backendAddressPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_configuration_name: {
        value: cdktf.stringToHclTerraform(this._ipConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interface_id: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkInterfaceBackendAddressPoolAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkInterfaceBackendAddressPoolAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
