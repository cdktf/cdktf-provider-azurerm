# `oracleExascaleDatabaseStorageVault` Submodule <a name="`oracleExascaleDatabaseStorageVault` Submodule" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleExascaleDatabaseStorageVault <a name="OracleExascaleDatabaseStorageVault" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault azurerm_oracle_exascale_database_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleexascaledatabasestoragevault"

oracleexascaledatabasestoragevault.NewOracleExascaleDatabaseStorageVault(scope Construct, id *string, config OracleExascaleDatabaseStorageVaultConfig) OracleExascaleDatabaseStorageVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig">OracleExascaleDatabaseStorageVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig">OracleExascaleDatabaseStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage">PutHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHighCapacityDatabaseStorage` <a name="PutHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage"></a>

```go
func PutHighCapacityDatabaseStorage(value OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts"></a>

```go
func PutTimeouts(value OracleExascaleDatabaseStorageVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleexascaledatabasestoragevault"

oracleexascaledatabasestoragevault.OracleExascaleDatabaseStorageVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleexascaledatabasestoragevault"

oracleexascaledatabasestoragevault.OracleExascaleDatabaseStorageVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleexascaledatabasestoragevault"

oracleexascaledatabasestoragevault.OracleExascaleDatabaseStorageVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleexascaledatabasestoragevault"

oracleexascaledatabasestoragevault.OracleExascaleDatabaseStorageVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OracleExascaleDatabaseStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OracleExascaleDatabaseStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OracleExascaleDatabaseStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference">OracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentageInput">AdditionalFlashCachePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorageInput">HighCapacityDatabaseStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage">AdditionalFlashCachePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage"></a>

```go
func HighCapacityDatabaseStorage() OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeouts"></a>

```go
func Timeouts() OracleExascaleDatabaseStorageVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference">OracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a>

---

##### `AdditionalFlashCachePercentageInput`<sup>Optional</sup> <a name="AdditionalFlashCachePercentageInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentageInput"></a>

```go
func AdditionalFlashCachePercentageInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `HighCapacityDatabaseStorageInput`<sup>Optional</sup> <a name="HighCapacityDatabaseStorageInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorageInput"></a>

```go
func HighCapacityDatabaseStorageInput() OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalFlashCachePercentage`<sup>Required</sup> <a name="AdditionalFlashCachePercentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage"></a>

```go
func AdditionalFlashCachePercentage() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleExascaleDatabaseStorageVaultConfig <a name="OracleExascaleDatabaseStorageVaultConfig" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleexascaledatabasestoragevault"

&oracleexascaledatabasestoragevault.OracleExascaleDatabaseStorageVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdditionalFlashCachePercentage: *f64,
	DisplayName: *string,
	HighCapacityDatabaseStorage: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Zones: *[]*string,
	Description: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.additionalFlashCachePercentage">AdditionalFlashCachePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.zones">Zones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalFlashCachePercentage`<sup>Required</sup> <a name="AdditionalFlashCachePercentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.additionalFlashCachePercentage"></a>

```go
AdditionalFlashCachePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}.

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.highCapacityDatabaseStorage"></a>

```go
HighCapacityDatabaseStorage OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#high_capacity_database_storage OracleExascaleDatabaseStorageVault#high_capacity_database_storage}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}.

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeouts"></a>

```go
Timeouts OracleExascaleDatabaseStorageVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#timeouts OracleExascaleDatabaseStorageVault#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}.

---

### OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage <a name="OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleexascaledatabasestoragevault"

&oracleexascaledatabasestoragevault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage {
	TotalSizeInGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGb">TotalSizeInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}. |

---

##### `TotalSizeInGb`<sup>Required</sup> <a name="TotalSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGb"></a>

```go
TotalSizeInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}.

---

### OracleExascaleDatabaseStorageVaultTimeouts <a name="OracleExascaleDatabaseStorageVaultTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleexascaledatabasestoragevault"

&oracleexascaledatabasestoragevault.OracleExascaleDatabaseStorageVaultTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference <a name="OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleexascaledatabasestoragevault"

oracleexascaledatabasestoragevault.NewOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb">AvailableSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbInput">TotalSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb">TotalSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableSizeInGb`<sup>Required</sup> <a name="AvailableSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb"></a>

```go
func AvailableSizeInGb() *f64
```

- *Type:* *f64

---

##### `TotalSizeInGbInput`<sup>Optional</sup> <a name="TotalSizeInGbInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbInput"></a>

```go
func TotalSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `TotalSizeInGb`<sup>Required</sup> <a name="TotalSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb"></a>

```go
func TotalSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---


### OracleExascaleDatabaseStorageVaultTimeoutsOutputReference <a name="OracleExascaleDatabaseStorageVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleexascaledatabasestoragevault"

oracleexascaledatabasestoragevault.NewOracleExascaleDatabaseStorageVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleExascaleDatabaseStorageVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



