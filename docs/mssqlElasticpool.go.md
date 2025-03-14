# `mssqlElasticpool` Submodule <a name="`mssqlElasticpool` Submodule" id="@cdktf/provider-azurerm.mssqlElasticpool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlElasticpool <a name="MssqlElasticpool" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool azurerm_mssql_elasticpool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

mssqlelasticpool.NewMssqlElasticpool(scope Construct, id *string, config MssqlElasticpoolConfig) MssqlElasticpool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig">MssqlElasticpoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig">MssqlElasticpoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putPerDatabaseSettings">PutPerDatabaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putSku">PutSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetEnclaveType">ResetEnclaveType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaintenanceConfigurationName">ResetMaintenanceConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeBytes">ResetMaxSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeGb">ResetMaxSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetZoneRedundant">ResetZoneRedundant</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPerDatabaseSettings` <a name="PutPerDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putPerDatabaseSettings"></a>

```go
func PutPerDatabaseSettings(value MssqlElasticpoolPerDatabaseSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putPerDatabaseSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

---

##### `PutSku` <a name="PutSku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putSku"></a>

```go
func PutSku(value MssqlElasticpoolSku)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putTimeouts"></a>

```go
func PutTimeouts(value MssqlElasticpoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

---

##### `ResetEnclaveType` <a name="ResetEnclaveType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetEnclaveType"></a>

```go
func ResetEnclaveType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetId"></a>

```go
func ResetId()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetLicenseType"></a>

```go
func ResetLicenseType()
```

##### `ResetMaintenanceConfigurationName` <a name="ResetMaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaintenanceConfigurationName"></a>

```go
func ResetMaintenanceConfigurationName()
```

##### `ResetMaxSizeBytes` <a name="ResetMaxSizeBytes" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeBytes"></a>

```go
func ResetMaxSizeBytes()
```

##### `ResetMaxSizeGb` <a name="ResetMaxSizeGb" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetMaxSizeGb"></a>

```go
func ResetMaxSizeGb()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZoneRedundant` <a name="ResetZoneRedundant" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.resetZoneRedundant"></a>

```go
func ResetZoneRedundant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlElasticpool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

mssqlelasticpool.MssqlElasticpool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

mssqlelasticpool.MssqlElasticpool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

mssqlelasticpool.MssqlElasticpool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

mssqlelasticpool.MssqlElasticpool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MssqlElasticpool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MssqlElasticpool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MssqlElasticpool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MssqlElasticpool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettings">PerDatabaseSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference">MssqlElasticpoolPerDatabaseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference">MssqlElasticpoolSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference">MssqlElasticpoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.enclaveTypeInput">EnclaveTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationNameInput">MaintenanceConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytesInput">MaxSizeBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGbInput">MaxSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettingsInput">PerDatabaseSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.skuInput">SkuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundantInput">ZoneRedundantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.enclaveType">EnclaveType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationName">MaintenanceConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytes">MaxSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGb">MaxSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundant">ZoneRedundant</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PerDatabaseSettings`<sup>Required</sup> <a name="PerDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettings"></a>

```go
func PerDatabaseSettings() MssqlElasticpoolPerDatabaseSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference">MssqlElasticpoolPerDatabaseSettingsOutputReference</a>

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.sku"></a>

```go
func Sku() MssqlElasticpoolSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference">MssqlElasticpoolSkuOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeouts"></a>

```go
func Timeouts() MssqlElasticpoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference">MssqlElasticpoolTimeoutsOutputReference</a>

---

##### `EnclaveTypeInput`<sup>Optional</sup> <a name="EnclaveTypeInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.enclaveTypeInput"></a>

```go
func EnclaveTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceConfigurationNameInput`<sup>Optional</sup> <a name="MaintenanceConfigurationNameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationNameInput"></a>

```go
func MaintenanceConfigurationNameInput() *string
```

- *Type:* *string

---

##### `MaxSizeBytesInput`<sup>Optional</sup> <a name="MaxSizeBytesInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytesInput"></a>

```go
func MaxSizeBytesInput() *f64
```

- *Type:* *f64

---

##### `MaxSizeGbInput`<sup>Optional</sup> <a name="MaxSizeGbInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGbInput"></a>

```go
func MaxSizeGbInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PerDatabaseSettingsInput`<sup>Optional</sup> <a name="PerDatabaseSettingsInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.perDatabaseSettingsInput"></a>

```go
func PerDatabaseSettingsInput() MssqlElasticpoolPerDatabaseSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.skuInput"></a>

```go
func SkuInput() MssqlElasticpoolSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneRedundantInput`<sup>Optional</sup> <a name="ZoneRedundantInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundantInput"></a>

```go
func ZoneRedundantInput() interface{}
```

- *Type:* interface{}

---

##### `EnclaveType`<sup>Required</sup> <a name="EnclaveType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.enclaveType"></a>

```go
func EnclaveType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaintenanceConfigurationName`<sup>Required</sup> <a name="MaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maintenanceConfigurationName"></a>

```go
func MaintenanceConfigurationName() *string
```

- *Type:* *string

---

##### `MaxSizeBytes`<sup>Required</sup> <a name="MaxSizeBytes" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeBytes"></a>

```go
func MaxSizeBytes() *f64
```

- *Type:* *f64

---

##### `MaxSizeGb`<sup>Required</sup> <a name="MaxSizeGb" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.maxSizeGb"></a>

```go
func MaxSizeGb() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ZoneRedundant`<sup>Required</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.zoneRedundant"></a>

```go
func ZoneRedundant() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlElasticpoolConfig <a name="MssqlElasticpoolConfig" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

&mssqlelasticpool.MssqlElasticpoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	PerDatabaseSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings,
	ResourceGroupName: *string,
	ServerName: *string,
	Sku: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.mssqlElasticpool.MssqlElasticpoolSku,
	EnclaveType: *string,
	Id: *string,
	LicenseType: *string,
	MaintenanceConfigurationName: *string,
	MaxSizeBytes: *f64,
	MaxSizeGb: *f64,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.mssqlElasticpool.MssqlElasticpoolTimeouts,
	ZoneRedundant: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#location MssqlElasticpool#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.perDatabaseSettings">PerDatabaseSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a></code> | per_database_settings block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#resource_group_name MssqlElasticpool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#server_name MssqlElasticpool#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.enclaveType">EnclaveType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#enclave_type MssqlElasticpool#enclave_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#id MssqlElasticpool#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.licenseType">LicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#license_type MssqlElasticpool#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maintenanceConfigurationName">MaintenanceConfigurationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#maintenance_configuration_name MssqlElasticpool#maintenance_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeBytes">MaxSizeBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#max_size_bytes MssqlElasticpool#max_size_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeGb">MaxSizeGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#max_size_gb MssqlElasticpool#max_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#tags MssqlElasticpool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.zoneRedundant">ZoneRedundant</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#zone_redundant MssqlElasticpool#zone_redundant}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#location MssqlElasticpool#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}.

---

##### `PerDatabaseSettings`<sup>Required</sup> <a name="PerDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.perDatabaseSettings"></a>

```go
PerDatabaseSettings MssqlElasticpoolPerDatabaseSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

per_database_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#per_database_settings MssqlElasticpool#per_database_settings}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#resource_group_name MssqlElasticpool#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#server_name MssqlElasticpool#server_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.sku"></a>

```go
Sku MssqlElasticpoolSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#sku MssqlElasticpool#sku}

---

##### `EnclaveType`<sup>Optional</sup> <a name="EnclaveType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.enclaveType"></a>

```go
EnclaveType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#enclave_type MssqlElasticpool#enclave_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#id MssqlElasticpool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#license_type MssqlElasticpool#license_type}.

---

##### `MaintenanceConfigurationName`<sup>Optional</sup> <a name="MaintenanceConfigurationName" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maintenanceConfigurationName"></a>

```go
MaintenanceConfigurationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#maintenance_configuration_name MssqlElasticpool#maintenance_configuration_name}.

---

##### `MaxSizeBytes`<sup>Optional</sup> <a name="MaxSizeBytes" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeBytes"></a>

```go
MaxSizeBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#max_size_bytes MssqlElasticpool#max_size_bytes}.

---

##### `MaxSizeGb`<sup>Optional</sup> <a name="MaxSizeGb" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.maxSizeGb"></a>

```go
MaxSizeGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#max_size_gb MssqlElasticpool#max_size_gb}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#tags MssqlElasticpool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.timeouts"></a>

```go
Timeouts MssqlElasticpoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts">MssqlElasticpoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#timeouts MssqlElasticpool#timeouts}

---

##### `ZoneRedundant`<sup>Optional</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolConfig.property.zoneRedundant"></a>

```go
ZoneRedundant interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#zone_redundant MssqlElasticpool#zone_redundant}.

---

### MssqlElasticpoolPerDatabaseSettings <a name="MssqlElasticpoolPerDatabaseSettings" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

&mssqlelasticpool.MssqlElasticpoolPerDatabaseSettings {
	MaxCapacity: *f64,
	MinCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#max_capacity MssqlElasticpool#max_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#min_capacity MssqlElasticpool#min_capacity}. |

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#max_capacity MssqlElasticpool#max_capacity}.

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings.property.minCapacity"></a>

```go
MinCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#min_capacity MssqlElasticpool#min_capacity}.

---

### MssqlElasticpoolSku <a name="MssqlElasticpoolSku" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

&mssqlelasticpool.MssqlElasticpoolSku {
	Capacity: *f64,
	Name: *string,
	Tier: *string,
	Family: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#capacity MssqlElasticpool#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.tier">Tier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#tier MssqlElasticpool#tier}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.family">Family</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#family MssqlElasticpool#family}. |

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#capacity MssqlElasticpool#capacity}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#name MssqlElasticpool#name}.

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#tier MssqlElasticpool#tier}.

---

##### `Family`<sup>Optional</sup> <a name="Family" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku.property.family"></a>

```go
Family *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#family MssqlElasticpool#family}.

---

### MssqlElasticpoolTimeouts <a name="MssqlElasticpoolTimeouts" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

&mssqlelasticpool.MssqlElasticpoolTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#create MssqlElasticpool#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#delete MssqlElasticpool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#read MssqlElasticpool#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#update MssqlElasticpool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#create MssqlElasticpool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#delete MssqlElasticpool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#read MssqlElasticpool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/mssql_elasticpool#update MssqlElasticpool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlElasticpoolPerDatabaseSettingsOutputReference <a name="MssqlElasticpoolPerDatabaseSettingsOutputReference" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

mssqlelasticpool.NewMssqlElasticpoolPerDatabaseSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlElasticpoolPerDatabaseSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacityInput"></a>

```go
func MinCapacityInput() *f64
```

- *Type:* *f64

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlElasticpoolPerDatabaseSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolPerDatabaseSettings">MssqlElasticpoolPerDatabaseSettings</a>

---


### MssqlElasticpoolSkuOutputReference <a name="MssqlElasticpoolSkuOutputReference" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

mssqlelasticpool.NewMssqlElasticpoolSkuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlElasticpoolSkuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resetFamily">ResetFamily</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFamily` <a name="ResetFamily" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.resetFamily"></a>

```go
func ResetFamily()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSkuOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlElasticpoolSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolSku">MssqlElasticpoolSku</a>

---


### MssqlElasticpoolTimeoutsOutputReference <a name="MssqlElasticpoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/mssqlelasticpool"

mssqlelasticpool.NewMssqlElasticpoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlElasticpoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlElasticpool.MssqlElasticpoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



