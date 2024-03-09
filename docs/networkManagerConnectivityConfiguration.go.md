# `networkManagerConnectivityConfiguration` Submodule <a name="`networkManagerConnectivityConfiguration` Submodule" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerConnectivityConfiguration <a name="NetworkManagerConnectivityConfiguration" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration azurerm_network_manager_connectivity_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

networkmanagerconnectivityconfiguration.NewNetworkManagerConnectivityConfiguration(scope Construct, id *string, config NetworkManagerConnectivityConfigurationConfig) NetworkManagerConnectivityConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig">NetworkManagerConnectivityConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig">NetworkManagerConnectivityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putAppliesToGroup">PutAppliesToGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putHub">PutHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDeleteExistingPeeringEnabled">ResetDeleteExistingPeeringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetGlobalMeshEnabled">ResetGlobalMeshEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetHub">ResetHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppliesToGroup` <a name="PutAppliesToGroup" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putAppliesToGroup"></a>

```go
func PutAppliesToGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putAppliesToGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHub` <a name="PutHub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putHub"></a>

```go
func PutHub(value NetworkManagerConnectivityConfigurationHub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putHub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value NetworkManagerConnectivityConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>

---

##### `ResetDeleteExistingPeeringEnabled` <a name="ResetDeleteExistingPeeringEnabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDeleteExistingPeeringEnabled"></a>

```go
func ResetDeleteExistingPeeringEnabled()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGlobalMeshEnabled` <a name="ResetGlobalMeshEnabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetGlobalMeshEnabled"></a>

```go
func ResetGlobalMeshEnabled()
```

##### `ResetHub` <a name="ResetHub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetHub"></a>

```go
func ResetHub()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagerConnectivityConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

networkmanagerconnectivityconfiguration.NetworkManagerConnectivityConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

networkmanagerconnectivityconfiguration.NetworkManagerConnectivityConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

networkmanagerconnectivityconfiguration.NetworkManagerConnectivityConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

networkmanagerconnectivityconfiguration.NetworkManagerConnectivityConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkManagerConnectivityConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkManagerConnectivityConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkManagerConnectivityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerConnectivityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroup">AppliesToGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList">NetworkManagerConnectivityConfigurationAppliesToGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hub">Hub</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference">NetworkManagerConnectivityConfigurationHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference">NetworkManagerConnectivityConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroupInput">AppliesToGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopologyInput">ConnectivityTopologyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabledInput">DeleteExistingPeeringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabledInput">GlobalMeshEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hubInput">HubInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerIdInput">NetworkManagerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopology">ConnectivityTopology</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled">DeleteExistingPeeringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabled">GlobalMeshEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerId">NetworkManagerId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppliesToGroup`<sup>Required</sup> <a name="AppliesToGroup" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroup"></a>

```go
func AppliesToGroup() NetworkManagerConnectivityConfigurationAppliesToGroupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList">NetworkManagerConnectivityConfigurationAppliesToGroupList</a>

---

##### `Hub`<sup>Required</sup> <a name="Hub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hub"></a>

```go
func Hub() NetworkManagerConnectivityConfigurationHubOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference">NetworkManagerConnectivityConfigurationHubOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeouts"></a>

```go
func Timeouts() NetworkManagerConnectivityConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference">NetworkManagerConnectivityConfigurationTimeoutsOutputReference</a>

---

##### `AppliesToGroupInput`<sup>Optional</sup> <a name="AppliesToGroupInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.appliesToGroupInput"></a>

```go
func AppliesToGroupInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectivityTopologyInput`<sup>Optional</sup> <a name="ConnectivityTopologyInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopologyInput"></a>

```go
func ConnectivityTopologyInput() *string
```

- *Type:* *string

---

##### `DeleteExistingPeeringEnabledInput`<sup>Optional</sup> <a name="DeleteExistingPeeringEnabledInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabledInput"></a>

```go
func DeleteExistingPeeringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GlobalMeshEnabledInput`<sup>Optional</sup> <a name="GlobalMeshEnabledInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabledInput"></a>

```go
func GlobalMeshEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HubInput`<sup>Optional</sup> <a name="HubInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.hubInput"></a>

```go
func HubInput() NetworkManagerConnectivityConfigurationHub
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkManagerIdInput`<sup>Optional</sup> <a name="NetworkManagerIdInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerIdInput"></a>

```go
func NetworkManagerIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectivityTopology`<sup>Required</sup> <a name="ConnectivityTopology" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.connectivityTopology"></a>

```go
func ConnectivityTopology() *string
```

- *Type:* *string

---

##### `DeleteExistingPeeringEnabled`<sup>Required</sup> <a name="DeleteExistingPeeringEnabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.deleteExistingPeeringEnabled"></a>

```go
func DeleteExistingPeeringEnabled() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GlobalMeshEnabled`<sup>Required</sup> <a name="GlobalMeshEnabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.globalMeshEnabled"></a>

```go
func GlobalMeshEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkManagerId`<sup>Required</sup> <a name="NetworkManagerId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.networkManagerId"></a>

```go
func NetworkManagerId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerConnectivityConfigurationAppliesToGroup <a name="NetworkManagerConnectivityConfigurationAppliesToGroup" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

&networkmanagerconnectivityconfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup {
	GroupConnectivity: *string,
	NetworkGroupId: *string,
	GlobalMeshEnabled: interface{},
	UseHubGateway: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.groupConnectivity">GroupConnectivity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#group_connectivity NetworkManagerConnectivityConfiguration#group_connectivity}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.networkGroupId">NetworkGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#network_group_id NetworkManagerConnectivityConfiguration#network_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.globalMeshEnabled">GlobalMeshEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.useHubGateway">UseHubGateway</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#use_hub_gateway NetworkManagerConnectivityConfiguration#use_hub_gateway}. |

---

##### `GroupConnectivity`<sup>Required</sup> <a name="GroupConnectivity" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.groupConnectivity"></a>

```go
GroupConnectivity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#group_connectivity NetworkManagerConnectivityConfiguration#group_connectivity}.

---

##### `NetworkGroupId`<sup>Required</sup> <a name="NetworkGroupId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.networkGroupId"></a>

```go
NetworkGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#network_group_id NetworkManagerConnectivityConfiguration#network_group_id}.

---

##### `GlobalMeshEnabled`<sup>Optional</sup> <a name="GlobalMeshEnabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.globalMeshEnabled"></a>

```go
GlobalMeshEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}.

---

##### `UseHubGateway`<sup>Optional</sup> <a name="UseHubGateway" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroup.property.useHubGateway"></a>

```go
UseHubGateway interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#use_hub_gateway NetworkManagerConnectivityConfiguration#use_hub_gateway}.

---

### NetworkManagerConnectivityConfigurationConfig <a name="NetworkManagerConnectivityConfigurationConfig" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

&networkmanagerconnectivityconfiguration.NetworkManagerConnectivityConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppliesToGroup: interface{},
	ConnectivityTopology: *string,
	Name: *string,
	NetworkManagerId: *string,
	DeleteExistingPeeringEnabled: interface{},
	Description: *string,
	GlobalMeshEnabled: interface{},
	Hub: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.appliesToGroup">AppliesToGroup</a></code> | <code>interface{}</code> | applies_to_group block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connectivityTopology">ConnectivityTopology</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.networkManagerId">NetworkManagerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.deleteExistingPeeringEnabled">DeleteExistingPeeringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.globalMeshEnabled">GlobalMeshEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.hub">Hub</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | hub block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppliesToGroup`<sup>Required</sup> <a name="AppliesToGroup" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.appliesToGroup"></a>

```go
AppliesToGroup interface{}
```

- *Type:* interface{}

applies_to_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#applies_to_group NetworkManagerConnectivityConfiguration#applies_to_group}

---

##### `ConnectivityTopology`<sup>Required</sup> <a name="ConnectivityTopology" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.connectivityTopology"></a>

```go
ConnectivityTopology *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#connectivity_topology NetworkManagerConnectivityConfiguration#connectivity_topology}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#name NetworkManagerConnectivityConfiguration#name}.

---

##### `NetworkManagerId`<sup>Required</sup> <a name="NetworkManagerId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.networkManagerId"></a>

```go
NetworkManagerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#network_manager_id NetworkManagerConnectivityConfiguration#network_manager_id}.

---

##### `DeleteExistingPeeringEnabled`<sup>Optional</sup> <a name="DeleteExistingPeeringEnabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.deleteExistingPeeringEnabled"></a>

```go
DeleteExistingPeeringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#delete_existing_peering_enabled NetworkManagerConnectivityConfiguration#delete_existing_peering_enabled}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#description NetworkManagerConnectivityConfiguration#description}.

---

##### `GlobalMeshEnabled`<sup>Optional</sup> <a name="GlobalMeshEnabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.globalMeshEnabled"></a>

```go
GlobalMeshEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#global_mesh_enabled NetworkManagerConnectivityConfiguration#global_mesh_enabled}.

---

##### `Hub`<sup>Optional</sup> <a name="Hub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.hub"></a>

```go
Hub NetworkManagerConnectivityConfigurationHub
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#hub NetworkManagerConnectivityConfiguration#hub}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#id NetworkManagerConnectivityConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationConfig.property.timeouts"></a>

```go
Timeouts NetworkManagerConnectivityConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts">NetworkManagerConnectivityConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#timeouts NetworkManagerConnectivityConfiguration#timeouts}

---

### NetworkManagerConnectivityConfigurationHub <a name="NetworkManagerConnectivityConfigurationHub" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

&networkmanagerconnectivityconfiguration.NetworkManagerConnectivityConfigurationHub {
	ResourceId: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#resource_id NetworkManagerConnectivityConfiguration#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#resource_type NetworkManagerConnectivityConfiguration#resource_type}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#resource_id NetworkManagerConnectivityConfiguration#resource_id}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#resource_type NetworkManagerConnectivityConfiguration#resource_type}.

---

### NetworkManagerConnectivityConfigurationTimeouts <a name="NetworkManagerConnectivityConfigurationTimeouts" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

&networkmanagerconnectivityconfiguration.NetworkManagerConnectivityConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#create NetworkManagerConnectivityConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#delete NetworkManagerConnectivityConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#read NetworkManagerConnectivityConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#update NetworkManagerConnectivityConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#create NetworkManagerConnectivityConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#delete NetworkManagerConnectivityConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#read NetworkManagerConnectivityConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/network_manager_connectivity_configuration#update NetworkManagerConnectivityConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerConnectivityConfigurationAppliesToGroupList <a name="NetworkManagerConnectivityConfigurationAppliesToGroupList" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

networkmanagerconnectivityconfiguration.NewNetworkManagerConnectivityConfigurationAppliesToGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkManagerConnectivityConfigurationAppliesToGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.get"></a>

```go
func Get(index *f64) NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference <a name="NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

networkmanagerconnectivityconfiguration.NewNetworkManagerConnectivityConfigurationAppliesToGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetGlobalMeshEnabled">ResetGlobalMeshEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetUseHubGateway">ResetUseHubGateway</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlobalMeshEnabled` <a name="ResetGlobalMeshEnabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetGlobalMeshEnabled"></a>

```go
func ResetGlobalMeshEnabled()
```

##### `ResetUseHubGateway` <a name="ResetUseHubGateway" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.resetUseHubGateway"></a>

```go
func ResetUseHubGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabledInput">GlobalMeshEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivityInput">GroupConnectivityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupIdInput">NetworkGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGatewayInput">UseHubGatewayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled">GlobalMeshEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity">GroupConnectivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId">NetworkGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway">UseHubGateway</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlobalMeshEnabledInput`<sup>Optional</sup> <a name="GlobalMeshEnabledInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabledInput"></a>

```go
func GlobalMeshEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GroupConnectivityInput`<sup>Optional</sup> <a name="GroupConnectivityInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivityInput"></a>

```go
func GroupConnectivityInput() *string
```

- *Type:* *string

---

##### `NetworkGroupIdInput`<sup>Optional</sup> <a name="NetworkGroupIdInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupIdInput"></a>

```go
func NetworkGroupIdInput() *string
```

- *Type:* *string

---

##### `UseHubGatewayInput`<sup>Optional</sup> <a name="UseHubGatewayInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGatewayInput"></a>

```go
func UseHubGatewayInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalMeshEnabled`<sup>Required</sup> <a name="GlobalMeshEnabled" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.globalMeshEnabled"></a>

```go
func GlobalMeshEnabled() interface{}
```

- *Type:* interface{}

---

##### `GroupConnectivity`<sup>Required</sup> <a name="GroupConnectivity" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.groupConnectivity"></a>

```go
func GroupConnectivity() *string
```

- *Type:* *string

---

##### `NetworkGroupId`<sup>Required</sup> <a name="NetworkGroupId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.networkGroupId"></a>

```go
func NetworkGroupId() *string
```

- *Type:* *string

---

##### `UseHubGateway`<sup>Required</sup> <a name="UseHubGateway" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.useHubGateway"></a>

```go
func UseHubGateway() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationAppliesToGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkManagerConnectivityConfigurationHubOutputReference <a name="NetworkManagerConnectivityConfigurationHubOutputReference" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

networkmanagerconnectivityconfiguration.NewNetworkManagerConnectivityConfigurationHubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkManagerConnectivityConfigurationHubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHubOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkManagerConnectivityConfigurationHub
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationHub">NetworkManagerConnectivityConfigurationHub</a>

---


### NetworkManagerConnectivityConfigurationTimeoutsOutputReference <a name="NetworkManagerConnectivityConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/networkmanagerconnectivityconfiguration"

networkmanagerconnectivityconfiguration.NewNetworkManagerConnectivityConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkManagerConnectivityConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerConnectivityConfiguration.NetworkManagerConnectivityConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



