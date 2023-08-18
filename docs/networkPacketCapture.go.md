# `azurerm_network_packet_capture`

Refer to the Terraform Registory for docs: [`azurerm_network_packet_capture`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture).

# `networkPacketCapture` Submodule <a name="`networkPacketCapture` Submodule" id="@cdktf/provider-azurerm.networkPacketCapture"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPacketCapture <a name="NetworkPacketCapture" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture azurerm_network_packet_capture}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

networkpacketcapture.NewNetworkPacketCapture(scope Construct, id *string, config NetworkPacketCaptureConfig) NetworkPacketCapture
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig">NetworkPacketCaptureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig">NetworkPacketCaptureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putStorageLocation">PutStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerPacket">ResetMaximumBytesPerPacket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerSession">ResetMaximumBytesPerSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumCaptureDuration">ResetMaximumCaptureDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorageLocation` <a name="PutStorageLocation" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putStorageLocation"></a>

```go
func PutStorageLocation(value NetworkPacketCaptureStorageLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts"></a>

```go
func PutTimeouts(value NetworkPacketCaptureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetId"></a>

```go
func ResetId()
```

##### `ResetMaximumBytesPerPacket` <a name="ResetMaximumBytesPerPacket" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerPacket"></a>

```go
func ResetMaximumBytesPerPacket()
```

##### `ResetMaximumBytesPerSession` <a name="ResetMaximumBytesPerSession" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumBytesPerSession"></a>

```go
func ResetMaximumBytesPerSession()
```

##### `ResetMaximumCaptureDuration` <a name="ResetMaximumCaptureDuration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetMaximumCaptureDuration"></a>

```go
func ResetMaximumCaptureDuration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

networkpacketcapture.NetworkPacketCapture_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

networkpacketcapture.NetworkPacketCapture_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

networkpacketcapture.NetworkPacketCapture_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList">NetworkPacketCaptureFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocation">StorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference">NetworkPacketCaptureStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference">NetworkPacketCaptureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacketInput">MaximumBytesPerPacketInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSessionInput">MaximumBytesPerSessionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDurationInput">MaximumCaptureDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherNameInput">NetworkWatcherNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocationInput">StorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacket">MaximumBytesPerPacket</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSession">MaximumBytesPerSession</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDuration">MaximumCaptureDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherName">NetworkWatcherName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filter"></a>

```go
func Filter() NetworkPacketCaptureFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList">NetworkPacketCaptureFilterList</a>

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocation"></a>

```go
func StorageLocation() NetworkPacketCaptureStorageLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference">NetworkPacketCaptureStorageLocationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeouts"></a>

```go
func Timeouts() NetworkPacketCaptureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference">NetworkPacketCaptureTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaximumBytesPerPacketInput`<sup>Optional</sup> <a name="MaximumBytesPerPacketInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacketInput"></a>

```go
func MaximumBytesPerPacketInput() *f64
```

- *Type:* *f64

---

##### `MaximumBytesPerSessionInput`<sup>Optional</sup> <a name="MaximumBytesPerSessionInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSessionInput"></a>

```go
func MaximumBytesPerSessionInput() *f64
```

- *Type:* *f64

---

##### `MaximumCaptureDurationInput`<sup>Optional</sup> <a name="MaximumCaptureDurationInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDurationInput"></a>

```go
func MaximumCaptureDurationInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkWatcherNameInput`<sup>Optional</sup> <a name="NetworkWatcherNameInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherNameInput"></a>

```go
func NetworkWatcherNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.storageLocationInput"></a>

```go
func StorageLocationInput() NetworkPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaximumBytesPerPacket`<sup>Required</sup> <a name="MaximumBytesPerPacket" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerPacket"></a>

```go
func MaximumBytesPerPacket() *f64
```

- *Type:* *f64

---

##### `MaximumBytesPerSession`<sup>Required</sup> <a name="MaximumBytesPerSession" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumBytesPerSession"></a>

```go
func MaximumBytesPerSession() *f64
```

- *Type:* *f64

---

##### `MaximumCaptureDuration`<sup>Required</sup> <a name="MaximumCaptureDuration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.maximumCaptureDuration"></a>

```go
func MaximumCaptureDuration() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkWatcherName`<sup>Required</sup> <a name="NetworkWatcherName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.networkWatcherName"></a>

```go
func NetworkWatcherName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCapture.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPacketCaptureConfig <a name="NetworkPacketCaptureConfig" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

&networkpacketcapture.NetworkPacketCaptureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NetworkWatcherName: *string,
	ResourceGroupName: *string,
	StorageLocation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation,
	TargetResourceId: *string,
	Filter: interface{},
	Id: *string,
	MaximumBytesPerPacket: *f64,
	MaximumBytesPerSession: *f64,
	MaximumCaptureDuration: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.networkWatcherName">NetworkWatcherName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.storageLocation">StorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerPacket">MaximumBytesPerPacket</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerSession">MaximumBytesPerSession</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumCaptureDuration">MaximumCaptureDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}.

---

##### `NetworkWatcherName`<sup>Required</sup> <a name="NetworkWatcherName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.networkWatcherName"></a>

```go
NetworkWatcherName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}.

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.storageLocation"></a>

```go
StorageLocation NetworkPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#storage_location NetworkPacketCapture#storage_location}

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#filter NetworkPacketCapture#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaximumBytesPerPacket`<sup>Optional</sup> <a name="MaximumBytesPerPacket" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerPacket"></a>

```go
MaximumBytesPerPacket *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}.

---

##### `MaximumBytesPerSession`<sup>Optional</sup> <a name="MaximumBytesPerSession" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumBytesPerSession"></a>

```go
MaximumBytesPerSession *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}.

---

##### `MaximumCaptureDuration`<sup>Optional</sup> <a name="MaximumCaptureDuration" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.maximumCaptureDuration"></a>

```go
MaximumCaptureDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureConfig.property.timeouts"></a>

```go
Timeouts NetworkPacketCaptureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts">NetworkPacketCaptureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#timeouts NetworkPacketCapture#timeouts}

---

### NetworkPacketCaptureFilter <a name="NetworkPacketCaptureFilter" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

&networkpacketcapture.NetworkPacketCaptureFilter {
	Protocol: *string,
	LocalIpAddress: *string,
	LocalPort: *string,
	RemoteIpAddress: *string,
	RemotePort: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#protocol NetworkPacketCapture#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localIpAddress">LocalIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#local_ip_address NetworkPacketCapture#local_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localPort">LocalPort</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#local_port NetworkPacketCapture#local_port}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remoteIpAddress">RemoteIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#remote_ip_address NetworkPacketCapture#remote_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remotePort">RemotePort</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#remote_port NetworkPacketCapture#remote_port}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#protocol NetworkPacketCapture#protocol}.

---

##### `LocalIpAddress`<sup>Optional</sup> <a name="LocalIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localIpAddress"></a>

```go
LocalIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#local_ip_address NetworkPacketCapture#local_ip_address}.

---

##### `LocalPort`<sup>Optional</sup> <a name="LocalPort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.localPort"></a>

```go
LocalPort *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#local_port NetworkPacketCapture#local_port}.

---

##### `RemoteIpAddress`<sup>Optional</sup> <a name="RemoteIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remoteIpAddress"></a>

```go
RemoteIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#remote_ip_address NetworkPacketCapture#remote_ip_address}.

---

##### `RemotePort`<sup>Optional</sup> <a name="RemotePort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilter.property.remotePort"></a>

```go
RemotePort *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#remote_port NetworkPacketCapture#remote_port}.

---

### NetworkPacketCaptureStorageLocation <a name="NetworkPacketCaptureStorageLocation" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

&networkpacketcapture.NetworkPacketCaptureStorageLocation {
	FilePath: *string,
	StorageAccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.filePath">FilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#file_path NetworkPacketCapture#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#storage_account_id NetworkPacketCapture#storage_account_id}. |

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.filePath"></a>

```go
FilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#file_path NetworkPacketCapture#file_path}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#storage_account_id NetworkPacketCapture#storage_account_id}.

---

### NetworkPacketCaptureTimeouts <a name="NetworkPacketCaptureTimeouts" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

&networkpacketcapture.NetworkPacketCaptureTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#create NetworkPacketCapture#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#delete NetworkPacketCapture#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#read NetworkPacketCapture#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#update NetworkPacketCapture#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#create NetworkPacketCapture#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#delete NetworkPacketCapture#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#read NetworkPacketCapture#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/network_packet_capture#update NetworkPacketCapture#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkPacketCaptureFilterList <a name="NetworkPacketCaptureFilterList" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

networkpacketcapture.NewNetworkPacketCaptureFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkPacketCaptureFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.get"></a>

```go
func Get(index *f64) NetworkPacketCaptureFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkPacketCaptureFilterOutputReference <a name="NetworkPacketCaptureFilterOutputReference" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

networkpacketcapture.NewNetworkPacketCaptureFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkPacketCaptureFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalIpAddress">ResetLocalIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalPort">ResetLocalPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemoteIpAddress">ResetRemoteIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemotePort">ResetRemotePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalIpAddress` <a name="ResetLocalIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalIpAddress"></a>

```go
func ResetLocalIpAddress()
```

##### `ResetLocalPort` <a name="ResetLocalPort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetLocalPort"></a>

```go
func ResetLocalPort()
```

##### `ResetRemoteIpAddress` <a name="ResetRemoteIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemoteIpAddress"></a>

```go
func ResetRemoteIpAddress()
```

##### `ResetRemotePort` <a name="ResetRemotePort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.resetRemotePort"></a>

```go
func ResetRemotePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddressInput">LocalIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPortInput">LocalPortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddressInput">RemoteIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePortInput">RemotePortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddress">LocalIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPort">LocalPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddress">RemoteIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePort">RemotePort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalIpAddressInput`<sup>Optional</sup> <a name="LocalIpAddressInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddressInput"></a>

```go
func LocalIpAddressInput() *string
```

- *Type:* *string

---

##### `LocalPortInput`<sup>Optional</sup> <a name="LocalPortInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPortInput"></a>

```go
func LocalPortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RemoteIpAddressInput`<sup>Optional</sup> <a name="RemoteIpAddressInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddressInput"></a>

```go
func RemoteIpAddressInput() *string
```

- *Type:* *string

---

##### `RemotePortInput`<sup>Optional</sup> <a name="RemotePortInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePortInput"></a>

```go
func RemotePortInput() *string
```

- *Type:* *string

---

##### `LocalIpAddress`<sup>Required</sup> <a name="LocalIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localIpAddress"></a>

```go
func LocalIpAddress() *string
```

- *Type:* *string

---

##### `LocalPort`<sup>Required</sup> <a name="LocalPort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.localPort"></a>

```go
func LocalPort() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RemoteIpAddress`<sup>Required</sup> <a name="RemoteIpAddress" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remoteIpAddress"></a>

```go
func RemoteIpAddress() *string
```

- *Type:* *string

---

##### `RemotePort`<sup>Required</sup> <a name="RemotePort" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.remotePort"></a>

```go
func RemotePort() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkPacketCaptureStorageLocationOutputReference <a name="NetworkPacketCaptureStorageLocationOutputReference" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

networkpacketcapture.NewNetworkPacketCaptureStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkPacketCaptureStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetFilePath"></a>

```go
func ResetFilePath()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.resetStorageAccountId"></a>

```go
func ResetStorageAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storagePath">StoragePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePathInput">FilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StoragePath`<sup>Required</sup> <a name="StoragePath" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storagePath"></a>

```go
func StoragePath() *string
```

- *Type:* *string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePathInput"></a>

```go
func FilePathInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkPacketCaptureStorageLocation
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureStorageLocation">NetworkPacketCaptureStorageLocation</a>

---


### NetworkPacketCaptureTimeoutsOutputReference <a name="NetworkPacketCaptureTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkpacketcapture"

networkpacketcapture.NewNetworkPacketCaptureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkPacketCaptureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkPacketCapture.NetworkPacketCaptureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



