# `azurerm_app_service_slot_virtual_network_swift_connection`

Refer to the Terraform Registory for docs: [`azurerm_app_service_slot_virtual_network_swift_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection).

# `appServiceSlotVirtualNetworkSwiftConnection` Submodule <a name="`appServiceSlotVirtualNetworkSwiftConnection` Submodule" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSlotVirtualNetworkSwiftConnection <a name="AppServiceSlotVirtualNetworkSwiftConnection" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection azurerm_app_service_slot_virtual_network_swift_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslotvirtualnetworkswiftconnection"

appserviceslotvirtualnetworkswiftconnection.NewAppServiceSlotVirtualNetworkSwiftConnection(scope Construct, id *string, config AppServiceSlotVirtualNetworkSwiftConnectionConfig) AppServiceSlotVirtualNetworkSwiftConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig">AppServiceSlotVirtualNetworkSwiftConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig">AppServiceSlotVirtualNetworkSwiftConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.putTimeouts"></a>

```go
func PutTimeouts(value AppServiceSlotVirtualNetworkSwiftConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslotvirtualnetworkswiftconnection"

appserviceslotvirtualnetworkswiftconnection.AppServiceSlotVirtualNetworkSwiftConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslotvirtualnetworkswiftconnection"

appserviceslotvirtualnetworkswiftconnection.AppServiceSlotVirtualNetworkSwiftConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslotvirtualnetworkswiftconnection"

appserviceslotvirtualnetworkswiftconnection.AppServiceSlotVirtualNetworkSwiftConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceIdInput">AppServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotNameInput">SlotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceId">AppServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotName">SlotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeouts"></a>

```go
func Timeouts() AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference">AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference</a>

---

##### `AppServiceIdInput`<sup>Optional</sup> <a name="AppServiceIdInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceIdInput"></a>

```go
func AppServiceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SlotNameInput`<sup>Optional</sup> <a name="SlotNameInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotNameInput"></a>

```go
func SlotNameInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AppServiceId`<sup>Required</sup> <a name="AppServiceId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.appServiceId"></a>

```go
func AppServiceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.slotName"></a>

```go
func SlotName() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSlotVirtualNetworkSwiftConnectionConfig <a name="AppServiceSlotVirtualNetworkSwiftConnectionConfig" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslotvirtualnetworkswiftconnection"

&appserviceslotvirtualnetworkswiftconnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppServiceId: *string,
	SlotName: *string,
	SubnetId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.appServiceId">AppServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#app_service_id AppServiceSlotVirtualNetworkSwiftConnection#app_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.slotName">SlotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#slot_name AppServiceSlotVirtualNetworkSwiftConnection#slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#subnet_id AppServiceSlotVirtualNetworkSwiftConnection#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#id AppServiceSlotVirtualNetworkSwiftConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppServiceId`<sup>Required</sup> <a name="AppServiceId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.appServiceId"></a>

```go
AppServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#app_service_id AppServiceSlotVirtualNetworkSwiftConnection#app_service_id}.

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.slotName"></a>

```go
SlotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#slot_name AppServiceSlotVirtualNetworkSwiftConnection#slot_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#subnet_id AppServiceSlotVirtualNetworkSwiftConnection#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#id AppServiceSlotVirtualNetworkSwiftConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionConfig.property.timeouts"></a>

```go
Timeouts AppServiceSlotVirtualNetworkSwiftConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts">AppServiceSlotVirtualNetworkSwiftConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#timeouts AppServiceSlotVirtualNetworkSwiftConnection#timeouts}

---

### AppServiceSlotVirtualNetworkSwiftConnectionTimeouts <a name="AppServiceSlotVirtualNetworkSwiftConnectionTimeouts" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslotvirtualnetworkswiftconnection"

&appserviceslotvirtualnetworkswiftconnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#create AppServiceSlotVirtualNetworkSwiftConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#delete AppServiceSlotVirtualNetworkSwiftConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#read AppServiceSlotVirtualNetworkSwiftConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#update AppServiceSlotVirtualNetworkSwiftConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#create AppServiceSlotVirtualNetworkSwiftConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#delete AppServiceSlotVirtualNetworkSwiftConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#read AppServiceSlotVirtualNetworkSwiftConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/app_service_slot_virtual_network_swift_connection#update AppServiceSlotVirtualNetworkSwiftConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference <a name="AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslotvirtualnetworkswiftconnection"

appserviceslotvirtualnetworkswiftconnection.NewAppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlotVirtualNetworkSwiftConnection.AppServiceSlotVirtualNetworkSwiftConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



