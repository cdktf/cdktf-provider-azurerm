# `azurerm_network_interface_backend_address_pool_association`

Refer to the Terraform Registory for docs: [`azurerm_network_interface_backend_address_pool_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association).

# `networkInterfaceBackendAddressPoolAssociation` Submodule <a name="`networkInterfaceBackendAddressPoolAssociation` Submodule" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceBackendAddressPoolAssociation <a name="NetworkInterfaceBackendAddressPoolAssociation" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association azurerm_network_interface_backend_address_pool_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfacebackendaddresspoolassociation"

networkinterfacebackendaddresspoolassociation.NewNetworkInterfaceBackendAddressPoolAssociation(scope Construct, id *string, config NetworkInterfaceBackendAddressPoolAssociationConfig) NetworkInterfaceBackendAddressPoolAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig">NetworkInterfaceBackendAddressPoolAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig">NetworkInterfaceBackendAddressPoolAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.putTimeouts"></a>

```go
func PutTimeouts(value NetworkInterfaceBackendAddressPoolAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts">NetworkInterfaceBackendAddressPoolAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfacebackendaddresspoolassociation"

networkinterfacebackendaddresspoolassociation.NetworkInterfaceBackendAddressPoolAssociation_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfacebackendaddresspoolassociation"

networkinterfacebackendaddresspoolassociation.NetworkInterfaceBackendAddressPoolAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfacebackendaddresspoolassociation"

networkinterfacebackendaddresspoolassociation.NetworkInterfaceBackendAddressPoolAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference">NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.backendAddressPoolIdInput">BackendAddressPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.ipConfigurationNameInput">IpConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.backendAddressPoolId">BackendAddressPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.ipConfigurationName">IpConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.timeouts"></a>

```go
func Timeouts() NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference">NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference</a>

---

##### `BackendAddressPoolIdInput`<sup>Optional</sup> <a name="BackendAddressPoolIdInput" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.backendAddressPoolIdInput"></a>

```go
func BackendAddressPoolIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpConfigurationNameInput`<sup>Optional</sup> <a name="IpConfigurationNameInput" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.ipConfigurationNameInput"></a>

```go
func IpConfigurationNameInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackendAddressPoolId`<sup>Required</sup> <a name="BackendAddressPoolId" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.backendAddressPoolId"></a>

```go
func BackendAddressPoolId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpConfigurationName`<sup>Required</sup> <a name="IpConfigurationName" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.ipConfigurationName"></a>

```go
func IpConfigurationName() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceBackendAddressPoolAssociationConfig <a name="NetworkInterfaceBackendAddressPoolAssociationConfig" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfacebackendaddresspoolassociation"

&networkinterfacebackendaddresspoolassociation.NetworkInterfaceBackendAddressPoolAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackendAddressPoolId: *string,
	IpConfigurationName: *string,
	NetworkInterfaceId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.backendAddressPoolId">BackendAddressPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#backend_address_pool_id NetworkInterfaceBackendAddressPoolAssociation#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.ipConfigurationName">IpConfigurationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#ip_configuration_name NetworkInterfaceBackendAddressPoolAssociation#ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#network_interface_id NetworkInterfaceBackendAddressPoolAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#id NetworkInterfaceBackendAddressPoolAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts">NetworkInterfaceBackendAddressPoolAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendAddressPoolId`<sup>Required</sup> <a name="BackendAddressPoolId" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.backendAddressPoolId"></a>

```go
BackendAddressPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#backend_address_pool_id NetworkInterfaceBackendAddressPoolAssociation#backend_address_pool_id}.

---

##### `IpConfigurationName`<sup>Required</sup> <a name="IpConfigurationName" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.ipConfigurationName"></a>

```go
IpConfigurationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#ip_configuration_name NetworkInterfaceBackendAddressPoolAssociation#ip_configuration_name}.

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#network_interface_id NetworkInterfaceBackendAddressPoolAssociation#network_interface_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#id NetworkInterfaceBackendAddressPoolAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationConfig.property.timeouts"></a>

```go
Timeouts NetworkInterfaceBackendAddressPoolAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts">NetworkInterfaceBackendAddressPoolAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#timeouts NetworkInterfaceBackendAddressPoolAssociation#timeouts}

---

### NetworkInterfaceBackendAddressPoolAssociationTimeouts <a name="NetworkInterfaceBackendAddressPoolAssociationTimeouts" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfacebackendaddresspoolassociation"

&networkinterfacebackendaddresspoolassociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#create NetworkInterfaceBackendAddressPoolAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#delete NetworkInterfaceBackendAddressPoolAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#read NetworkInterfaceBackendAddressPoolAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#update NetworkInterfaceBackendAddressPoolAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#create NetworkInterfaceBackendAddressPoolAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#delete NetworkInterfaceBackendAddressPoolAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#read NetworkInterfaceBackendAddressPoolAssociation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_interface_backend_address_pool_association#update NetworkInterfaceBackendAddressPoolAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference <a name="NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkinterfacebackendaddresspoolassociation"

networkinterfacebackendaddresspoolassociation.NewNetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkInterfaceBackendAddressPoolAssociation.NetworkInterfaceBackendAddressPoolAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



