# `azurerm_databox_edge_order`

Refer to the Terraform Registory for docs: [`azurerm_databox_edge_order`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order).

# `databoxEdgeOrder` Submodule <a name="`databoxEdgeOrder` Submodule" id="@cdktf/provider-azurerm.databoxEdgeOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataboxEdgeOrder <a name="DataboxEdgeOrder" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order azurerm_databox_edge_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrder(scope Construct, id *string, config DataboxEdgeOrderConfig) DataboxEdgeOrder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig">DataboxEdgeOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig">DataboxEdgeOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putContact">PutContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putShipmentAddress">PutShipmentAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutContact` <a name="PutContact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putContact"></a>

```go
func PutContact(value DataboxEdgeOrderContact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

---

##### `PutShipmentAddress` <a name="PutShipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putShipmentAddress"></a>

```go
func PutShipmentAddress(value DataboxEdgeOrderShipmentAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putShipmentAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putTimeouts"></a>

```go
func PutTimeouts(value DataboxEdgeOrderTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.DataboxEdgeOrder_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.DataboxEdgeOrder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.DataboxEdgeOrder_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contact">Contact</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference">DataboxEdgeOrderContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.returnTracking">ReturnTracking</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList">DataboxEdgeOrderReturnTrackingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddress">ShipmentAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference">DataboxEdgeOrderShipmentAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentHistory">ShipmentHistory</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList">DataboxEdgeOrderShipmentHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentTracking">ShipmentTracking</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList">DataboxEdgeOrderShipmentTrackingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.status">Status</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList">DataboxEdgeOrderStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference">DataboxEdgeOrderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contactInput">ContactInput</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddressInput">ShipmentAddressInput</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Contact`<sup>Required</sup> <a name="Contact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contact"></a>

```go
func Contact() DataboxEdgeOrderContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference">DataboxEdgeOrderContactOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReturnTracking`<sup>Required</sup> <a name="ReturnTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.returnTracking"></a>

```go
func ReturnTracking() DataboxEdgeOrderReturnTrackingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList">DataboxEdgeOrderReturnTrackingList</a>

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `ShipmentAddress`<sup>Required</sup> <a name="ShipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddress"></a>

```go
func ShipmentAddress() DataboxEdgeOrderShipmentAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference">DataboxEdgeOrderShipmentAddressOutputReference</a>

---

##### `ShipmentHistory`<sup>Required</sup> <a name="ShipmentHistory" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentHistory"></a>

```go
func ShipmentHistory() DataboxEdgeOrderShipmentHistoryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList">DataboxEdgeOrderShipmentHistoryList</a>

---

##### `ShipmentTracking`<sup>Required</sup> <a name="ShipmentTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentTracking"></a>

```go
func ShipmentTracking() DataboxEdgeOrderShipmentTrackingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList">DataboxEdgeOrderShipmentTrackingList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.status"></a>

```go
func Status() DataboxEdgeOrderStatusList
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList">DataboxEdgeOrderStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeouts"></a>

```go
func Timeouts() DataboxEdgeOrderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference">DataboxEdgeOrderTimeoutsOutputReference</a>

---

##### `ContactInput`<sup>Optional</sup> <a name="ContactInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.contactInput"></a>

```go
func ContactInput() DataboxEdgeOrderContact
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ShipmentAddressInput`<sup>Optional</sup> <a name="ShipmentAddressInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.shipmentAddressInput"></a>

```go
func ShipmentAddressInput() DataboxEdgeOrderShipmentAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataboxEdgeOrderConfig <a name="DataboxEdgeOrderConfig" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

&databoxedgeorder.DataboxEdgeOrderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Contact: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.databoxEdgeOrder.DataboxEdgeOrderContact,
	DeviceName: *string,
	ResourceGroupName: *string,
	ShipmentAddress: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.databoxEdgeOrder.DataboxEdgeOrderTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.contact">Contact</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a></code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.deviceName">DeviceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#device_name DataboxEdgeOrder#device_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#resource_group_name DataboxEdgeOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.shipmentAddress">ShipmentAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a></code> | shipment_address block. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#id DataboxEdgeOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Contact`<sup>Required</sup> <a name="Contact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.contact"></a>

```go
Contact DataboxEdgeOrderContact
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#contact DataboxEdgeOrder#contact}

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#device_name DataboxEdgeOrder#device_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#resource_group_name DataboxEdgeOrder#resource_group_name}.

---

##### `ShipmentAddress`<sup>Required</sup> <a name="ShipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.shipmentAddress"></a>

```go
ShipmentAddress DataboxEdgeOrderShipmentAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

shipment_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#shipment_address DataboxEdgeOrder#shipment_address}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#id DataboxEdgeOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderConfig.property.timeouts"></a>

```go
Timeouts DataboxEdgeOrderTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts">DataboxEdgeOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#timeouts DataboxEdgeOrder#timeouts}

---

### DataboxEdgeOrderContact <a name="DataboxEdgeOrderContact" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

&databoxedgeorder.DataboxEdgeOrderContact {
	CompanyName: *string,
	Emails: *[]*string,
	Name: *string,
	PhoneNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.companyName">CompanyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#company_name DataboxEdgeOrder#company_name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.emails">Emails</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#emails DataboxEdgeOrder#emails}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#name DataboxEdgeOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#phone_number DataboxEdgeOrder#phone_number}. |

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.companyName"></a>

```go
CompanyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#company_name DataboxEdgeOrder#company_name}.

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.emails"></a>

```go
Emails *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#emails DataboxEdgeOrder#emails}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#name DataboxEdgeOrder#name}.

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#phone_number DataboxEdgeOrder#phone_number}.

---

### DataboxEdgeOrderReturnTracking <a name="DataboxEdgeOrderReturnTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

&databoxedgeorder.DataboxEdgeOrderReturnTracking {

}
```


### DataboxEdgeOrderShipmentAddress <a name="DataboxEdgeOrderShipmentAddress" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

&databoxedgeorder.DataboxEdgeOrderShipmentAddress {
	Address: *[]*string,
	City: *string,
	Country: *string,
	PostalCode: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.address">Address</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#address DataboxEdgeOrder#address}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#city DataboxEdgeOrder#city}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.country">Country</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#country DataboxEdgeOrder#country}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.postalCode">PostalCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#postal_code DataboxEdgeOrder#postal_code}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#state DataboxEdgeOrder#state}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.address"></a>

```go
Address *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#address DataboxEdgeOrder#address}.

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#city DataboxEdgeOrder#city}.

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.country"></a>

```go
Country *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#country DataboxEdgeOrder#country}.

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#postal_code DataboxEdgeOrder#postal_code}.

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#state DataboxEdgeOrder#state}.

---

### DataboxEdgeOrderShipmentHistory <a name="DataboxEdgeOrderShipmentHistory" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

&databoxedgeorder.DataboxEdgeOrderShipmentHistory {

}
```


### DataboxEdgeOrderShipmentTracking <a name="DataboxEdgeOrderShipmentTracking" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

&databoxedgeorder.DataboxEdgeOrderShipmentTracking {

}
```


### DataboxEdgeOrderStatus <a name="DataboxEdgeOrderStatus" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

&databoxedgeorder.DataboxEdgeOrderStatus {

}
```


### DataboxEdgeOrderTimeouts <a name="DataboxEdgeOrderTimeouts" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

&databoxedgeorder.DataboxEdgeOrderTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#create DataboxEdgeOrder#create}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#delete DataboxEdgeOrder#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#read DataboxEdgeOrder#read}. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#update DataboxEdgeOrder#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#create DataboxEdgeOrder#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#delete DataboxEdgeOrder#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#read DataboxEdgeOrder#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/databox_edge_order#update DataboxEdgeOrder#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataboxEdgeOrderContactOutputReference <a name="DataboxEdgeOrderContactOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataboxEdgeOrderContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyNameInput">CompanyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emailsInput">EmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emails">Emails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyNameInput"></a>

```go
func CompanyNameInput() *string
```

- *Type:* *string

---

##### `EmailsInput`<sup>Optional</sup> <a name="EmailsInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emailsInput"></a>

```go
func EmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.emails"></a>

```go
func Emails() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataboxEdgeOrderContact
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderContact">DataboxEdgeOrderContact</a>

---


### DataboxEdgeOrderReturnTrackingList <a name="DataboxEdgeOrderReturnTrackingList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderReturnTrackingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataboxEdgeOrderReturnTrackingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.get"></a>

```go
func Get(index *f64) DataboxEdgeOrderReturnTrackingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataboxEdgeOrderReturnTrackingOutputReference <a name="DataboxEdgeOrderReturnTrackingOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderReturnTrackingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataboxEdgeOrderReturnTrackingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.carrierName">CarrierName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingId">TrackingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingUrl">TrackingUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking">DataboxEdgeOrderReturnTracking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CarrierName`<sup>Required</sup> <a name="CarrierName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.carrierName"></a>

```go
func CarrierName() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `TrackingId`<sup>Required</sup> <a name="TrackingId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingId"></a>

```go
func TrackingId() *string
```

- *Type:* *string

---

##### `TrackingUrl`<sup>Required</sup> <a name="TrackingUrl" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.trackingUrl"></a>

```go
func TrackingUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTrackingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataboxEdgeOrderReturnTracking
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderReturnTracking">DataboxEdgeOrderReturnTracking</a>

---


### DataboxEdgeOrderShipmentAddressOutputReference <a name="DataboxEdgeOrderShipmentAddressOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderShipmentAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataboxEdgeOrderShipmentAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.addressInput">AddressInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.address">Address</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.addressInput"></a>

```go
func AddressInput() *[]*string
```

- *Type:* *[]*string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.address"></a>

```go
func Address() *[]*string
```

- *Type:* *[]*string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataboxEdgeOrderShipmentAddress
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentAddress">DataboxEdgeOrderShipmentAddress</a>

---


### DataboxEdgeOrderShipmentHistoryList <a name="DataboxEdgeOrderShipmentHistoryList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderShipmentHistoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataboxEdgeOrderShipmentHistoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.get"></a>

```go
func Get(index *f64) DataboxEdgeOrderShipmentHistoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataboxEdgeOrderShipmentHistoryOutputReference <a name="DataboxEdgeOrderShipmentHistoryOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderShipmentHistoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataboxEdgeOrderShipmentHistoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.lastUpdate">LastUpdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory">DataboxEdgeOrderShipmentHistory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.lastUpdate"></a>

```go
func LastUpdate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataboxEdgeOrderShipmentHistory
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentHistory">DataboxEdgeOrderShipmentHistory</a>

---


### DataboxEdgeOrderShipmentTrackingList <a name="DataboxEdgeOrderShipmentTrackingList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderShipmentTrackingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataboxEdgeOrderShipmentTrackingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.get"></a>

```go
func Get(index *f64) DataboxEdgeOrderShipmentTrackingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataboxEdgeOrderShipmentTrackingOutputReference <a name="DataboxEdgeOrderShipmentTrackingOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderShipmentTrackingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataboxEdgeOrderShipmentTrackingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.carrierName">CarrierName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingId">TrackingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingUrl">TrackingUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking">DataboxEdgeOrderShipmentTracking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CarrierName`<sup>Required</sup> <a name="CarrierName" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.carrierName"></a>

```go
func CarrierName() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `TrackingId`<sup>Required</sup> <a name="TrackingId" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingId"></a>

```go
func TrackingId() *string
```

- *Type:* *string

---

##### `TrackingUrl`<sup>Required</sup> <a name="TrackingUrl" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.trackingUrl"></a>

```go
func TrackingUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTrackingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataboxEdgeOrderShipmentTracking
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderShipmentTracking">DataboxEdgeOrderShipmentTracking</a>

---


### DataboxEdgeOrderStatusList <a name="DataboxEdgeOrderStatusList" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataboxEdgeOrderStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.get"></a>

```go
func Get(index *f64) DataboxEdgeOrderStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataboxEdgeOrderStatusOutputReference <a name="DataboxEdgeOrderStatusOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataboxEdgeOrderStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.info">Info</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.lastUpdate">LastUpdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus">DataboxEdgeOrderStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `Info`<sup>Required</sup> <a name="Info" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.info"></a>

```go
func Info() *string
```

- *Type:* *string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.lastUpdate"></a>

```go
func LastUpdate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataboxEdgeOrderStatus
```

- *Type:* <a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderStatus">DataboxEdgeOrderStatus</a>

---


### DataboxEdgeOrderTimeoutsOutputReference <a name="DataboxEdgeOrderTimeoutsOutputReference" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/databoxedgeorder"

databoxedgeorder.NewDataboxEdgeOrderTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataboxEdgeOrderTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databoxEdgeOrder.DataboxEdgeOrderTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



