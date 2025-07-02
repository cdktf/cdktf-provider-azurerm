# `netappVolumeGroupOracle` Submodule <a name="`netappVolumeGroupOracle` Submodule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeGroupOracle <a name="NetappVolumeGroupOracle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle azurerm_netapp_volume_group_oracle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NewNetappVolumeGroupOracle(scope Construct, id *string, config NetappVolumeGroupOracleConfig) NetappVolumeGroupOracle
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig">NetappVolumeGroupOracleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig">NetappVolumeGroupOracleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts"></a>

```go
func PutTimeouts(value NetappVolumeGroupOracleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putVolume"></a>

```go
func PutVolume(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.putVolume.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappVolumeGroupOracle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NetappVolumeGroupOracle_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NetappVolumeGroupOracle_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NetappVolumeGroupOracle_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NetappVolumeGroupOracle_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetappVolumeGroupOracle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetappVolumeGroupOracle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetappVolumeGroupOracle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeGroupOracle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference">NetappVolumeGroupOracleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList">NetappVolumeGroupOracleVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifierInput">ApplicationIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescriptionInput">GroupDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volumeInput">VolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescription">GroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeouts"></a>

```go
func Timeouts() NetappVolumeGroupOracleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference">NetappVolumeGroupOracleTimeoutsOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volume"></a>

```go
func Volume() NetappVolumeGroupOracleVolumeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList">NetappVolumeGroupOracleVolumeList</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `ApplicationIdentifierInput`<sup>Optional</sup> <a name="ApplicationIdentifierInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifierInput"></a>

```go
func ApplicationIdentifierInput() *string
```

- *Type:* *string

---

##### `GroupDescriptionInput`<sup>Optional</sup> <a name="GroupDescriptionInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescriptionInput"></a>

```go
func GroupDescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.volumeInput"></a>

```go
func VolumeInput() interface{}
```

- *Type:* interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.applicationIdentifier"></a>

```go
func ApplicationIdentifier() *string
```

- *Type:* *string

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.groupDescription"></a>

```go
func GroupDescription() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracle.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeGroupOracleConfig <a name="NetappVolumeGroupOracleConfig" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

&netappvolumegrouporacle.NetappVolumeGroupOracleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountName: *string,
	ApplicationIdentifier: *string,
	GroupDescription: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Volume: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#account_name NetappVolumeGroupOracle#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#application_identifier NetappVolumeGroupOracle#application_identifier}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.groupDescription">GroupDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#group_description NetappVolumeGroupOracle#group_description}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#location NetappVolumeGroupOracle#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#resource_group_name NetappVolumeGroupOracle#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.volume">Volume</a></code> | <code>interface{}</code> | volume block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#id NetappVolumeGroupOracle#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#account_name NetappVolumeGroupOracle#account_name}.

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.applicationIdentifier"></a>

```go
ApplicationIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#application_identifier NetappVolumeGroupOracle#application_identifier}.

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.groupDescription"></a>

```go
GroupDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#group_description NetappVolumeGroupOracle#group_description}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#location NetappVolumeGroupOracle#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#resource_group_name NetappVolumeGroupOracle#resource_group_name}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.volume"></a>

```go
Volume interface{}
```

- *Type:* interface{}

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#volume NetappVolumeGroupOracle#volume}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#id NetappVolumeGroupOracle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleConfig.property.timeouts"></a>

```go
Timeouts NetappVolumeGroupOracleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts">NetappVolumeGroupOracleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#timeouts NetappVolumeGroupOracle#timeouts}

---

### NetappVolumeGroupOracleTimeouts <a name="NetappVolumeGroupOracleTimeouts" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

&netappvolumegrouporacle.NetappVolumeGroupOracleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#create NetappVolumeGroupOracle#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#delete NetappVolumeGroupOracle#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#read NetappVolumeGroupOracle#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#update NetappVolumeGroupOracle#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#create NetappVolumeGroupOracle#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#delete NetappVolumeGroupOracle#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#read NetappVolumeGroupOracle#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#update NetappVolumeGroupOracle#update}.

---

### NetappVolumeGroupOracleVolume <a name="NetappVolumeGroupOracleVolume" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

&netappvolumegrouporacle.NetappVolumeGroupOracleVolume {
	CapacityPoolId: *string,
	ExportPolicyRule: interface{},
	Name: *string,
	Protocols: *[]*string,
	SecurityStyle: *string,
	ServiceLevel: *string,
	SnapshotDirectoryVisible: interface{},
	StorageQuotaInGb: *f64,
	SubnetId: *string,
	ThroughputInMibps: *f64,
	VolumePath: *string,
	VolumeSpecName: *string,
	DataProtectionReplication: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication,
	DataProtectionSnapshotPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy,
	EncryptionKeySource: *string,
	KeyVaultPrivateEndpointId: *string,
	NetworkFeatures: *string,
	ProximityPlacementGroupId: *string,
	Tags: *map[string]*string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.capacityPoolId">CapacityPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#capacity_pool_id NetappVolumeGroupOracle#capacity_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.exportPolicyRule">ExportPolicyRule</a></code> | <code>interface{}</code> | export_policy_rule block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#protocols NetappVolumeGroupOracle#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#security_style NetappVolumeGroupOracle#security_style}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.serviceLevel">ServiceLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#service_level NetappVolumeGroupOracle#service_level}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.snapshotDirectoryVisible">SnapshotDirectoryVisible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#snapshot_directory_visible NetappVolumeGroupOracle#snapshot_directory_visible}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.storageQuotaInGb">StorageQuotaInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#storage_quota_in_gb NetappVolumeGroupOracle#storage_quota_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#subnet_id NetappVolumeGroupOracle#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.throughputInMibps">ThroughputInMibps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#throughput_in_mibps NetappVolumeGroupOracle#throughput_in_mibps}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumePath">VolumePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#volume_path NetappVolumeGroupOracle#volume_path}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumeSpecName">VolumeSpecName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#volume_spec_name NetappVolumeGroupOracle#volume_spec_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionReplication">DataProtectionReplication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionSnapshotPolicy">DataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.encryptionKeySource">EncryptionKeySource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#encryption_key_source NetappVolumeGroupOracle#encryption_key_source}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.keyVaultPrivateEndpointId">KeyVaultPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#key_vault_private_endpoint_id NetappVolumeGroupOracle#key_vault_private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.networkFeatures">NetworkFeatures</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#network_features NetappVolumeGroupOracle#network_features}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#proximity_placement_group_id NetappVolumeGroupOracle#proximity_placement_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#tags NetappVolumeGroupOracle#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#zone NetappVolumeGroupOracle#zone}. |

---

##### `CapacityPoolId`<sup>Required</sup> <a name="CapacityPoolId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.capacityPoolId"></a>

```go
CapacityPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#capacity_pool_id NetappVolumeGroupOracle#capacity_pool_id}.

---

##### `ExportPolicyRule`<sup>Required</sup> <a name="ExportPolicyRule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.exportPolicyRule"></a>

```go
ExportPolicyRule interface{}
```

- *Type:* interface{}

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#export_policy_rule NetappVolumeGroupOracle#export_policy_rule}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#name NetappVolumeGroupOracle#name}.

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#protocols NetappVolumeGroupOracle#protocols}.

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.securityStyle"></a>

```go
SecurityStyle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#security_style NetappVolumeGroupOracle#security_style}.

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.serviceLevel"></a>

```go
ServiceLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#service_level NetappVolumeGroupOracle#service_level}.

---

##### `SnapshotDirectoryVisible`<sup>Required</sup> <a name="SnapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.snapshotDirectoryVisible"></a>

```go
SnapshotDirectoryVisible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#snapshot_directory_visible NetappVolumeGroupOracle#snapshot_directory_visible}.

---

##### `StorageQuotaInGb`<sup>Required</sup> <a name="StorageQuotaInGb" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.storageQuotaInGb"></a>

```go
StorageQuotaInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#storage_quota_in_gb NetappVolumeGroupOracle#storage_quota_in_gb}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#subnet_id NetappVolumeGroupOracle#subnet_id}.

---

##### `ThroughputInMibps`<sup>Required</sup> <a name="ThroughputInMibps" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.throughputInMibps"></a>

```go
ThroughputInMibps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#throughput_in_mibps NetappVolumeGroupOracle#throughput_in_mibps}.

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumePath"></a>

```go
VolumePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#volume_path NetappVolumeGroupOracle#volume_path}.

---

##### `VolumeSpecName`<sup>Required</sup> <a name="VolumeSpecName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.volumeSpecName"></a>

```go
VolumeSpecName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#volume_spec_name NetappVolumeGroupOracle#volume_spec_name}.

---

##### `DataProtectionReplication`<sup>Optional</sup> <a name="DataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionReplication"></a>

```go
DataProtectionReplication NetappVolumeGroupOracleVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#data_protection_replication NetappVolumeGroupOracle#data_protection_replication}

---

##### `DataProtectionSnapshotPolicy`<sup>Optional</sup> <a name="DataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.dataProtectionSnapshotPolicy"></a>

```go
DataProtectionSnapshotPolicy NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#data_protection_snapshot_policy NetappVolumeGroupOracle#data_protection_snapshot_policy}

---

##### `EncryptionKeySource`<sup>Optional</sup> <a name="EncryptionKeySource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.encryptionKeySource"></a>

```go
EncryptionKeySource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#encryption_key_source NetappVolumeGroupOracle#encryption_key_source}.

---

##### `KeyVaultPrivateEndpointId`<sup>Optional</sup> <a name="KeyVaultPrivateEndpointId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.keyVaultPrivateEndpointId"></a>

```go
KeyVaultPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#key_vault_private_endpoint_id NetappVolumeGroupOracle#key_vault_private_endpoint_id}.

---

##### `NetworkFeatures`<sup>Optional</sup> <a name="NetworkFeatures" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.networkFeatures"></a>

```go
NetworkFeatures *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#network_features NetappVolumeGroupOracle#network_features}.

---

##### `ProximityPlacementGroupId`<sup>Optional</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.proximityPlacementGroupId"></a>

```go
ProximityPlacementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#proximity_placement_group_id NetappVolumeGroupOracle#proximity_placement_group_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#tags NetappVolumeGroupOracle#tags}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolume.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#zone NetappVolumeGroupOracle#zone}.

---

### NetappVolumeGroupOracleVolumeDataProtectionReplication <a name="NetappVolumeGroupOracleVolumeDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

&netappvolumegrouporacle.NetappVolumeGroupOracleVolumeDataProtectionReplication {
	RemoteVolumeLocation: *string,
	RemoteVolumeResourceId: *string,
	ReplicationFrequency: *string,
	EndpointType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeLocation">RemoteVolumeLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#remote_volume_location NetappVolumeGroupOracle#remote_volume_location}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeResourceId">RemoteVolumeResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#remote_volume_resource_id NetappVolumeGroupOracle#remote_volume_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.replicationFrequency">ReplicationFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#replication_frequency NetappVolumeGroupOracle#replication_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#endpoint_type NetappVolumeGroupOracle#endpoint_type}. |

---

##### `RemoteVolumeLocation`<sup>Required</sup> <a name="RemoteVolumeLocation" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeLocation"></a>

```go
RemoteVolumeLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#remote_volume_location NetappVolumeGroupOracle#remote_volume_location}.

---

##### `RemoteVolumeResourceId`<sup>Required</sup> <a name="RemoteVolumeResourceId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.remoteVolumeResourceId"></a>

```go
RemoteVolumeResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#remote_volume_resource_id NetappVolumeGroupOracle#remote_volume_resource_id}.

---

##### `ReplicationFrequency`<sup>Required</sup> <a name="ReplicationFrequency" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.replicationFrequency"></a>

```go
ReplicationFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#replication_frequency NetappVolumeGroupOracle#replication_frequency}.

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#endpoint_type NetappVolumeGroupOracle#endpoint_type}.

---

### NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy <a name="NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

&netappvolumegrouporacle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy {
	SnapshotPolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId">SnapshotPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#snapshot_policy_id NetappVolumeGroupOracle#snapshot_policy_id}. |

---

##### `SnapshotPolicyId`<sup>Required</sup> <a name="SnapshotPolicyId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId"></a>

```go
SnapshotPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#snapshot_policy_id NetappVolumeGroupOracle#snapshot_policy_id}.

---

### NetappVolumeGroupOracleVolumeExportPolicyRule <a name="NetappVolumeGroupOracleVolumeExportPolicyRule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

&netappvolumegrouporacle.NetappVolumeGroupOracleVolumeExportPolicyRule {
	AllowedClients: *string,
	Nfsv3Enabled: interface{},
	Nfsv41Enabled: interface{},
	RuleIndex: *f64,
	RootAccessEnabled: interface{},
	UnixReadOnly: interface{},
	UnixReadWrite: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.allowedClients">AllowedClients</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#allowed_clients NetappVolumeGroupOracle#allowed_clients}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv3Enabled">Nfsv3Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#nfsv3_enabled NetappVolumeGroupOracle#nfsv3_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv41Enabled">Nfsv41Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#nfsv41_enabled NetappVolumeGroupOracle#nfsv41_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.ruleIndex">RuleIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#rule_index NetappVolumeGroupOracle#rule_index}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.rootAccessEnabled">RootAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#root_access_enabled NetappVolumeGroupOracle#root_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadOnly">UnixReadOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#unix_read_only NetappVolumeGroupOracle#unix_read_only}. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadWrite">UnixReadWrite</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#unix_read_write NetappVolumeGroupOracle#unix_read_write}. |

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.allowedClients"></a>

```go
AllowedClients *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#allowed_clients NetappVolumeGroupOracle#allowed_clients}.

---

##### `Nfsv3Enabled`<sup>Required</sup> <a name="Nfsv3Enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv3Enabled"></a>

```go
Nfsv3Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#nfsv3_enabled NetappVolumeGroupOracle#nfsv3_enabled}.

---

##### `Nfsv41Enabled`<sup>Required</sup> <a name="Nfsv41Enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.nfsv41Enabled"></a>

```go
Nfsv41Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#nfsv41_enabled NetappVolumeGroupOracle#nfsv41_enabled}.

---

##### `RuleIndex`<sup>Required</sup> <a name="RuleIndex" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.ruleIndex"></a>

```go
RuleIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#rule_index NetappVolumeGroupOracle#rule_index}.

---

##### `RootAccessEnabled`<sup>Optional</sup> <a name="RootAccessEnabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.rootAccessEnabled"></a>

```go
RootAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#root_access_enabled NetappVolumeGroupOracle#root_access_enabled}.

---

##### `UnixReadOnly`<sup>Optional</sup> <a name="UnixReadOnly" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadOnly"></a>

```go
UnixReadOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#unix_read_only NetappVolumeGroupOracle#unix_read_only}.

---

##### `UnixReadWrite`<sup>Optional</sup> <a name="UnixReadWrite" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRule.property.unixReadWrite"></a>

```go
UnixReadWrite interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/netapp_volume_group_oracle#unix_read_write NetappVolumeGroupOracle#unix_read_write}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeGroupOracleTimeoutsOutputReference <a name="NetappVolumeGroupOracleTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NewNetappVolumeGroupOracleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeGroupOracleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference <a name="NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NewNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resetEndpointType">ResetEndpointType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resetEndpointType"></a>

```go
func ResetEndpointType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput">RemoteVolumeLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput">RemoteVolumeResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput">ReplicationFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">RemoteVolumeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">RemoteVolumeResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">ReplicationFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `RemoteVolumeLocationInput`<sup>Optional</sup> <a name="RemoteVolumeLocationInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput"></a>

```go
func RemoteVolumeLocationInput() *string
```

- *Type:* *string

---

##### `RemoteVolumeResourceIdInput`<sup>Optional</sup> <a name="RemoteVolumeResourceIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput"></a>

```go
func RemoteVolumeResourceIdInput() *string
```

- *Type:* *string

---

##### `ReplicationFrequencyInput`<sup>Optional</sup> <a name="ReplicationFrequencyInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput"></a>

```go
func ReplicationFrequencyInput() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `RemoteVolumeLocation`<sup>Required</sup> <a name="RemoteVolumeLocation" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```go
func RemoteVolumeLocation() *string
```

- *Type:* *string

---

##### `RemoteVolumeResourceId`<sup>Required</sup> <a name="RemoteVolumeResourceId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```go
func RemoteVolumeResourceId() *string
```

- *Type:* *string

---

##### `ReplicationFrequency`<sup>Required</sup> <a name="ReplicationFrequency" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```go
func ReplicationFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeGroupOracleVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

---


### NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference <a name="NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NewNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput">SnapshotPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">SnapshotPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SnapshotPolicyIdInput`<sup>Optional</sup> <a name="SnapshotPolicyIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput"></a>

```go
func SnapshotPolicyIdInput() *string
```

- *Type:* *string

---

##### `SnapshotPolicyId`<sup>Required</sup> <a name="SnapshotPolicyId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```go
func SnapshotPolicyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

---


### NetappVolumeGroupOracleVolumeExportPolicyRuleList <a name="NetappVolumeGroupOracleVolumeExportPolicyRuleList" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NewNetappVolumeGroupOracleVolumeExportPolicyRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetappVolumeGroupOracleVolumeExportPolicyRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.get"></a>

```go
func Get(index *f64) NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference <a name="NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NewNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled">ResetRootAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadOnly">ResetUnixReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadWrite">ResetUnixReadWrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootAccessEnabled` <a name="ResetRootAccessEnabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled"></a>

```go
func ResetRootAccessEnabled()
```

##### `ResetUnixReadOnly` <a name="ResetUnixReadOnly" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadOnly"></a>

```go
func ResetUnixReadOnly()
```

##### `ResetUnixReadWrite` <a name="ResetUnixReadWrite" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resetUnixReadWrite"></a>

```go
func ResetUnixReadWrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3EnabledInput">Nfsv3EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41EnabledInput">Nfsv41EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput">RootAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndexInput">RuleIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput">UnixReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput">UnixReadWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClients">AllowedClients</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled">Nfsv3Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled">Nfsv41Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">RootAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndex">RuleIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnly">UnixReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWrite">UnixReadWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClientsInput"></a>

```go
func AllowedClientsInput() *string
```

- *Type:* *string

---

##### `Nfsv3EnabledInput`<sup>Optional</sup> <a name="Nfsv3EnabledInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3EnabledInput"></a>

```go
func Nfsv3EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Nfsv41EnabledInput`<sup>Optional</sup> <a name="Nfsv41EnabledInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41EnabledInput"></a>

```go
func Nfsv41EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RootAccessEnabledInput`<sup>Optional</sup> <a name="RootAccessEnabledInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput"></a>

```go
func RootAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RuleIndexInput`<sup>Optional</sup> <a name="RuleIndexInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndexInput"></a>

```go
func RuleIndexInput() *f64
```

- *Type:* *f64

---

##### `UnixReadOnlyInput`<sup>Optional</sup> <a name="UnixReadOnlyInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput"></a>

```go
func UnixReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `UnixReadWriteInput`<sup>Optional</sup> <a name="UnixReadWriteInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput"></a>

```go
func UnixReadWriteInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```go
func AllowedClients() *string
```

- *Type:* *string

---

##### `Nfsv3Enabled`<sup>Required</sup> <a name="Nfsv3Enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled"></a>

```go
func Nfsv3Enabled() interface{}
```

- *Type:* interface{}

---

##### `Nfsv41Enabled`<sup>Required</sup> <a name="Nfsv41Enabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled"></a>

```go
func Nfsv41Enabled() interface{}
```

- *Type:* interface{}

---

##### `RootAccessEnabled`<sup>Required</sup> <a name="RootAccessEnabled" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```go
func RootAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `RuleIndex`<sup>Required</sup> <a name="RuleIndex" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```go
func RuleIndex() *f64
```

- *Type:* *f64

---

##### `UnixReadOnly`<sup>Required</sup> <a name="UnixReadOnly" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```go
func UnixReadOnly() interface{}
```

- *Type:* interface{}

---

##### `UnixReadWrite`<sup>Required</sup> <a name="UnixReadWrite" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```go
func UnixReadWrite() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetappVolumeGroupOracleVolumeList <a name="NetappVolumeGroupOracleVolumeList" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NewNetappVolumeGroupOracleVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetappVolumeGroupOracleVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.get"></a>

```go
func Get(index *f64) NetappVolumeGroupOracleVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetappVolumeGroupOracleVolumeOutputReference <a name="NetappVolumeGroupOracleVolumeOutputReference" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/netappvolumegrouporacle"

netappvolumegrouporacle.NewNetappVolumeGroupOracleVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetappVolumeGroupOracleVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication">PutDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionSnapshotPolicy">PutDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putExportPolicyRule">PutExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionReplication">ResetDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionSnapshotPolicy">ResetDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetEncryptionKeySource">ResetEncryptionKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetKeyVaultPrivateEndpointId">ResetKeyVaultPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetNetworkFeatures">ResetNetworkFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetProximityPlacementGroupId">ResetProximityPlacementGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataProtectionReplication` <a name="PutDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication"></a>

```go
func PutDataProtectionReplication(value NetappVolumeGroupOracleVolumeDataProtectionReplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionReplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

---

##### `PutDataProtectionSnapshotPolicy` <a name="PutDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionSnapshotPolicy"></a>

```go
func PutDataProtectionSnapshotPolicy(value NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putDataProtectionSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

---

##### `PutExportPolicyRule` <a name="PutExportPolicyRule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putExportPolicyRule"></a>

```go
func PutExportPolicyRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.putExportPolicyRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataProtectionReplication` <a name="ResetDataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionReplication"></a>

```go
func ResetDataProtectionReplication()
```

##### `ResetDataProtectionSnapshotPolicy` <a name="ResetDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetDataProtectionSnapshotPolicy"></a>

```go
func ResetDataProtectionSnapshotPolicy()
```

##### `ResetEncryptionKeySource` <a name="ResetEncryptionKeySource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetEncryptionKeySource"></a>

```go
func ResetEncryptionKeySource()
```

##### `ResetKeyVaultPrivateEndpointId` <a name="ResetKeyVaultPrivateEndpointId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetKeyVaultPrivateEndpointId"></a>

```go
func ResetKeyVaultPrivateEndpointId()
```

##### `ResetNetworkFeatures` <a name="ResetNetworkFeatures" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetNetworkFeatures"></a>

```go
func ResetNetworkFeatures()
```

##### `ResetProximityPlacementGroupId` <a name="ResetProximityPlacementGroupId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetProximityPlacementGroupId"></a>

```go
func ResetProximityPlacementGroupId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetTags"></a>

```go
func ResetTags()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.resetZone"></a>

```go
func ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplication">DataProtectionReplication</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference">NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicy">DataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRule">ExportPolicyRule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList">NetappVolumeGroupOracleVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.mountIpAddresses">MountIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolIdInput">CapacityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplicationInput">DataProtectionReplicationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicyInput">DataProtectionSnapshotPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySourceInput">EncryptionKeySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRuleInput">ExportPolicyRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointIdInput">KeyVaultPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeaturesInput">NetworkFeaturesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupIdInput">ProximityPlacementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyleInput">SecurityStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevelInput">ServiceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisibleInput">SnapshotDirectoryVisibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGbInput">StorageQuotaInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibpsInput">ThroughputInMibpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePathInput">VolumePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecNameInput">VolumeSpecNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolId">CapacityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySource">EncryptionKeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointId">KeyVaultPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeatures">NetworkFeatures</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevel">ServiceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisible">SnapshotDirectoryVisible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGb">StorageQuotaInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibps">ThroughputInMibps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePath">VolumePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecName">VolumeSpecName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataProtectionReplication`<sup>Required</sup> <a name="DataProtectionReplication" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplication"></a>

```go
func DataProtectionReplication() NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference">NetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference</a>

---

##### `DataProtectionSnapshotPolicy`<sup>Required</sup> <a name="DataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicy"></a>

```go
func DataProtectionSnapshotPolicy() NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference</a>

---

##### `ExportPolicyRule`<sup>Required</sup> <a name="ExportPolicyRule" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRule"></a>

```go
func ExportPolicyRule() NetappVolumeGroupOracleVolumeExportPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeExportPolicyRuleList">NetappVolumeGroupOracleVolumeExportPolicyRuleList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MountIpAddresses`<sup>Required</sup> <a name="MountIpAddresses" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.mountIpAddresses"></a>

```go
func MountIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `CapacityPoolIdInput`<sup>Optional</sup> <a name="CapacityPoolIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolIdInput"></a>

```go
func CapacityPoolIdInput() *string
```

- *Type:* *string

---

##### `DataProtectionReplicationInput`<sup>Optional</sup> <a name="DataProtectionReplicationInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplicationInput"></a>

```go
func DataProtectionReplicationInput() NetappVolumeGroupOracleVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionReplication">NetappVolumeGroupOracleVolumeDataProtectionReplication</a>

---

##### `DataProtectionSnapshotPolicyInput`<sup>Optional</sup> <a name="DataProtectionSnapshotPolicyInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicyInput"></a>

```go
func DataProtectionSnapshotPolicyInput() NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">NetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

---

##### `EncryptionKeySourceInput`<sup>Optional</sup> <a name="EncryptionKeySourceInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySourceInput"></a>

```go
func EncryptionKeySourceInput() *string
```

- *Type:* *string

---

##### `ExportPolicyRuleInput`<sup>Optional</sup> <a name="ExportPolicyRuleInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRuleInput"></a>

```go
func ExportPolicyRuleInput() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultPrivateEndpointIdInput`<sup>Optional</sup> <a name="KeyVaultPrivateEndpointIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointIdInput"></a>

```go
func KeyVaultPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkFeaturesInput`<sup>Optional</sup> <a name="NetworkFeaturesInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeaturesInput"></a>

```go
func NetworkFeaturesInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProximityPlacementGroupIdInput`<sup>Optional</sup> <a name="ProximityPlacementGroupIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupIdInput"></a>

```go
func ProximityPlacementGroupIdInput() *string
```

- *Type:* *string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyleInput"></a>

```go
func SecurityStyleInput() *string
```

- *Type:* *string

---

##### `ServiceLevelInput`<sup>Optional</sup> <a name="ServiceLevelInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevelInput"></a>

```go
func ServiceLevelInput() *string
```

- *Type:* *string

---

##### `SnapshotDirectoryVisibleInput`<sup>Optional</sup> <a name="SnapshotDirectoryVisibleInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisibleInput"></a>

```go
func SnapshotDirectoryVisibleInput() interface{}
```

- *Type:* interface{}

---

##### `StorageQuotaInGbInput`<sup>Optional</sup> <a name="StorageQuotaInGbInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGbInput"></a>

```go
func StorageQuotaInGbInput() *f64
```

- *Type:* *f64

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputInMibpsInput`<sup>Optional</sup> <a name="ThroughputInMibpsInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibpsInput"></a>

```go
func ThroughputInMibpsInput() *f64
```

- *Type:* *f64

---

##### `VolumePathInput`<sup>Optional</sup> <a name="VolumePathInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePathInput"></a>

```go
func VolumePathInput() *string
```

- *Type:* *string

---

##### `VolumeSpecNameInput`<sup>Optional</sup> <a name="VolumeSpecNameInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecNameInput"></a>

```go
func VolumeSpecNameInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `CapacityPoolId`<sup>Required</sup> <a name="CapacityPoolId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolId"></a>

```go
func CapacityPoolId() *string
```

- *Type:* *string

---

##### `EncryptionKeySource`<sup>Required</sup> <a name="EncryptionKeySource" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySource"></a>

```go
func EncryptionKeySource() *string
```

- *Type:* *string

---

##### `KeyVaultPrivateEndpointId`<sup>Required</sup> <a name="KeyVaultPrivateEndpointId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointId"></a>

```go
func KeyVaultPrivateEndpointId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkFeatures`<sup>Required</sup> <a name="NetworkFeatures" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.networkFeatures"></a>

```go
func NetworkFeatures() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupId"></a>

```go
func ProximityPlacementGroupId() *string
```

- *Type:* *string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.securityStyle"></a>

```go
func SecurityStyle() *string
```

- *Type:* *string

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.serviceLevel"></a>

```go
func ServiceLevel() *string
```

- *Type:* *string

---

##### `SnapshotDirectoryVisible`<sup>Required</sup> <a name="SnapshotDirectoryVisible" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisible"></a>

```go
func SnapshotDirectoryVisible() interface{}
```

- *Type:* interface{}

---

##### `StorageQuotaInGb`<sup>Required</sup> <a name="StorageQuotaInGb" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGb"></a>

```go
func StorageQuotaInGb() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputInMibps`<sup>Required</sup> <a name="ThroughputInMibps" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibps"></a>

```go
func ThroughputInMibps() *f64
```

- *Type:* *f64

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumePath"></a>

```go
func VolumePath() *string
```

- *Type:* *string

---

##### `VolumeSpecName`<sup>Required</sup> <a name="VolumeSpecName" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecName"></a>

```go
func VolumeSpecName() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappVolumeGroupOracle.NetappVolumeGroupOracleVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



