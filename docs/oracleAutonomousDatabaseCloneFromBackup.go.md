# `oracleAutonomousDatabaseCloneFromBackup` Submodule <a name="`oracleAutonomousDatabaseCloneFromBackup` Submodule" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseCloneFromBackup <a name="OracleAutonomousDatabaseCloneFromBackup" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup azurerm_oracle_autonomous_database_clone_from_backup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefrombackup"

oracleautonomousdatabaseclonefrombackup.NewOracleAutonomousDatabaseCloneFromBackup(scope Construct, id *string, config OracleAutonomousDatabaseCloneFromBackupConfig) OracleAutonomousDatabaseCloneFromBackup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig">OracleAutonomousDatabaseCloneFromBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig">OracleAutonomousDatabaseCloneFromBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetAllowedIpAddresses">ResetAllowedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetBackupTimestamp">ResetBackupTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetCustomerContacts">ResetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.putTimeouts"></a>

```go
func PutTimeouts(value OracleAutonomousDatabaseCloneFromBackupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---

##### `ResetAllowedIpAddresses` <a name="ResetAllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetAllowedIpAddresses"></a>

```go
func ResetAllowedIpAddresses()
```

##### `ResetBackupTimestamp` <a name="ResetBackupTimestamp" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetBackupTimestamp"></a>

```go
func ResetBackupTimestamp()
```

##### `ResetCustomerContacts` <a name="ResetCustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetCustomerContacts"></a>

```go
func ResetCustomerContacts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetId"></a>

```go
func ResetId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromBackup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefrombackup"

oracleautonomousdatabaseclonefrombackup.OracleAutonomousDatabaseCloneFromBackup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefrombackup"

oracleautonomousdatabaseclonefrombackup.OracleAutonomousDatabaseCloneFromBackup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefrombackup"

oracleautonomousdatabaseclonefrombackup.OracleAutonomousDatabaseCloneFromBackup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefrombackup"

oracleautonomousdatabaseclonefrombackup.OracleAutonomousDatabaseCloneFromBackup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OracleAutonomousDatabaseCloneFromBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OracleAutonomousDatabaseCloneFromBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseCloneFromBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddressesInput">AllowedIpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabledInput">AutoScalingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabledInput">AutoScalingForStorageEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDaysInput">BackupRetentionPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupTimestampInput">BackupTimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.characterSetInput">CharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cloneTypeInput">CloneTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeCountInput">ComputeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeModelInput">ComputeModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.customerContactsInput">CustomerContactsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseVersionInput">DatabaseVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseWorkloadInput">DatabaseWorkloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTbInput">DataStorageSizeInTbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequiredInput">MtlsConnectionRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSetInput">NationalCharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseIdInput">SourceAutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupTimestamp">BackupTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cloneType">CloneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.customerContacts">CustomerContacts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload">DatabaseWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb">DataStorageSizeInTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.timeouts"></a>

```go
func Timeouts() OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `AllowedIpAddressesInput`<sup>Optional</sup> <a name="AllowedIpAddressesInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddressesInput"></a>

```go
func AllowedIpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoScalingEnabledInput`<sup>Optional</sup> <a name="AutoScalingEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabledInput"></a>

```go
func AutoScalingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="AutoScalingForStorageEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabledInput"></a>

```go
func AutoScalingForStorageEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BackupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInDaysInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDaysInput"></a>

```go
func BackupRetentionPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `BackupTimestampInput`<sup>Optional</sup> <a name="BackupTimestampInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupTimestampInput"></a>

```go
func BackupTimestampInput() *string
```

- *Type:* *string

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.characterSetInput"></a>

```go
func CharacterSetInput() *string
```

- *Type:* *string

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cloneTypeInput"></a>

```go
func CloneTypeInput() *string
```

- *Type:* *string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeCountInput"></a>

```go
func ComputeCountInput() *f64
```

- *Type:* *f64

---

##### `ComputeModelInput`<sup>Optional</sup> <a name="ComputeModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeModelInput"></a>

```go
func ComputeModelInput() *string
```

- *Type:* *string

---

##### `CustomerContactsInput`<sup>Optional</sup> <a name="CustomerContactsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.customerContactsInput"></a>

```go
func CustomerContactsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseVersionInput`<sup>Optional</sup> <a name="DatabaseVersionInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseVersionInput"></a>

```go
func DatabaseVersionInput() *string
```

- *Type:* *string

---

##### `DatabaseWorkloadInput`<sup>Optional</sup> <a name="DatabaseWorkloadInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseWorkloadInput"></a>

```go
func DatabaseWorkloadInput() *string
```

- *Type:* *string

---

##### `DataStorageSizeInTbInput`<sup>Optional</sup> <a name="DataStorageSizeInTbInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTbInput"></a>

```go
func DataStorageSizeInTbInput() *f64
```

- *Type:* *f64

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MtlsConnectionRequiredInput`<sup>Optional</sup> <a name="MtlsConnectionRequiredInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequiredInput"></a>

```go
func MtlsConnectionRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NationalCharacterSetInput`<sup>Optional</sup> <a name="NationalCharacterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSetInput"></a>

```go
func NationalCharacterSetInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseIdInput"></a>

```go
func SourceAutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AllowedIpAddresses`<sup>Required</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses"></a>

```go
func AllowedIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled"></a>

```go
func AutoScalingEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled"></a>

```go
func AutoScalingForStorageEnabled() interface{}
```

- *Type:* interface{}

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays"></a>

```go
func BackupRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `BackupTimestamp`<sup>Required</sup> <a name="BackupTimestamp" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.backupTimestamp"></a>

```go
func BackupTimestamp() *string
```

- *Type:* *string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.cloneType"></a>

```go
func CloneType() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.customerContacts"></a>

```go
func CustomerContacts() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DatabaseWorkload`<sup>Required</sup> <a name="DatabaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload"></a>

```go
func DatabaseWorkload() *string
```

- *Type:* *string

---

##### `DataStorageSizeInTb`<sup>Required</sup> <a name="DataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb"></a>

```go
func DataStorageSizeInTb() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired"></a>

```go
func MtlsConnectionRequired() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet"></a>

```go
func NationalCharacterSet() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId"></a>

```go
func SourceAutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseCloneFromBackupConfig <a name="OracleAutonomousDatabaseCloneFromBackupConfig" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefrombackup"

&oracleautonomousdatabaseclonefrombackup.OracleAutonomousDatabaseCloneFromBackupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdminPassword: *string,
	AutoScalingEnabled: interface{},
	AutoScalingForStorageEnabled: interface{},
	BackupRetentionPeriodInDays: *f64,
	CharacterSet: *string,
	CloneType: *string,
	ComputeCount: *f64,
	ComputeModel: *string,
	DatabaseVersion: *string,
	DatabaseWorkload: *string,
	DataStorageSizeInTb: *f64,
	DisplayName: *string,
	LicenseModel: *string,
	Location: *string,
	MtlsConnectionRequired: interface{},
	Name: *string,
	NationalCharacterSet: *string,
	ResourceGroupName: *string,
	SourceAutonomousDatabaseId: *string,
	AllowedIpAddresses: *[]*string,
	BackupTimestamp: *string,
	CustomerContacts: *[]*string,
	Id: *string,
	SubnetId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#admin_password OracleAutonomousDatabaseCloneFromBackup#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_for_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromBackup#backup_retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.characterSet">CharacterSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#character_set OracleAutonomousDatabaseCloneFromBackup#character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.cloneType">CloneType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#clone_type OracleAutonomousDatabaseCloneFromBackup#clone_type}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_count OracleAutonomousDatabaseCloneFromBackup#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.computeModel">ComputeModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_model OracleAutonomousDatabaseCloneFromBackup#compute_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_version OracleAutonomousDatabaseCloneFromBackup#database_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.databaseWorkload">DatabaseWorkload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_workload OracleAutonomousDatabaseCloneFromBackup#database_workload}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.dataStorageSizeInTb">DataStorageSizeInTb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromBackup#data_storage_size_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#display_name OracleAutonomousDatabaseCloneFromBackup#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#license_model OracleAutonomousDatabaseCloneFromBackup#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#location OracleAutonomousDatabaseCloneFromBackup#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#mtls_connection_required OracleAutonomousDatabaseCloneFromBackup#mtls_connection_required}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#name OracleAutonomousDatabaseCloneFromBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#national_character_set OracleAutonomousDatabaseCloneFromBackup#national_character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#resource_group_name OracleAutonomousDatabaseCloneFromBackup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#source_autonomous_database_id OracleAutonomousDatabaseCloneFromBackup#source_autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#allowed_ip_addresses OracleAutonomousDatabaseCloneFromBackup#allowed_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.backupTimestamp">BackupTimestamp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_timestamp OracleAutonomousDatabaseCloneFromBackup#backup_timestamp}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.customerContacts">CustomerContacts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#customer_contacts OracleAutonomousDatabaseCloneFromBackup#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#id OracleAutonomousDatabaseCloneFromBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#subnet_id OracleAutonomousDatabaseCloneFromBackup#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#tags OracleAutonomousDatabaseCloneFromBackup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#virtual_network_id OracleAutonomousDatabaseCloneFromBackup#virtual_network_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#admin_password OracleAutonomousDatabaseCloneFromBackup#admin_password}.

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.autoScalingEnabled"></a>

```go
AutoScalingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_enabled}.

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.autoScalingForStorageEnabled"></a>

```go
AutoScalingForStorageEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromBackup#auto_scaling_for_storage_enabled}.

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.backupRetentionPeriodInDays"></a>

```go
BackupRetentionPeriodInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromBackup#backup_retention_period_in_days}.

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.characterSet"></a>

```go
CharacterSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#character_set OracleAutonomousDatabaseCloneFromBackup#character_set}.

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.cloneType"></a>

```go
CloneType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#clone_type OracleAutonomousDatabaseCloneFromBackup#clone_type}.

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.computeCount"></a>

```go
ComputeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_count OracleAutonomousDatabaseCloneFromBackup#compute_count}.

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.computeModel"></a>

```go
ComputeModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#compute_model OracleAutonomousDatabaseCloneFromBackup#compute_model}.

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.databaseVersion"></a>

```go
DatabaseVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_version OracleAutonomousDatabaseCloneFromBackup#database_version}.

---

##### `DatabaseWorkload`<sup>Required</sup> <a name="DatabaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.databaseWorkload"></a>

```go
DatabaseWorkload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#database_workload OracleAutonomousDatabaseCloneFromBackup#database_workload}.

---

##### `DataStorageSizeInTb`<sup>Required</sup> <a name="DataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.dataStorageSizeInTb"></a>

```go
DataStorageSizeInTb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromBackup#data_storage_size_in_tb}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#display_name OracleAutonomousDatabaseCloneFromBackup#display_name}.

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#license_model OracleAutonomousDatabaseCloneFromBackup#license_model}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#location OracleAutonomousDatabaseCloneFromBackup#location}.

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.mtlsConnectionRequired"></a>

```go
MtlsConnectionRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#mtls_connection_required OracleAutonomousDatabaseCloneFromBackup#mtls_connection_required}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#name OracleAutonomousDatabaseCloneFromBackup#name}.

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.nationalCharacterSet"></a>

```go
NationalCharacterSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#national_character_set OracleAutonomousDatabaseCloneFromBackup#national_character_set}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#resource_group_name OracleAutonomousDatabaseCloneFromBackup#resource_group_name}.

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.sourceAutonomousDatabaseId"></a>

```go
SourceAutonomousDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#source_autonomous_database_id OracleAutonomousDatabaseCloneFromBackup#source_autonomous_database_id}.

---

##### `AllowedIpAddresses`<sup>Optional</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.allowedIpAddresses"></a>

```go
AllowedIpAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#allowed_ip_addresses OracleAutonomousDatabaseCloneFromBackup#allowed_ip_addresses}.

---

##### `BackupTimestamp`<sup>Optional</sup> <a name="BackupTimestamp" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.backupTimestamp"></a>

```go
BackupTimestamp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#backup_timestamp OracleAutonomousDatabaseCloneFromBackup#backup_timestamp}.

---

##### `CustomerContacts`<sup>Optional</sup> <a name="CustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.customerContacts"></a>

```go
CustomerContacts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#customer_contacts OracleAutonomousDatabaseCloneFromBackup#customer_contacts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#id OracleAutonomousDatabaseCloneFromBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#subnet_id OracleAutonomousDatabaseCloneFromBackup#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#tags OracleAutonomousDatabaseCloneFromBackup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts"></a>

```go
Timeouts OracleAutonomousDatabaseCloneFromBackupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts">OracleAutonomousDatabaseCloneFromBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#timeouts OracleAutonomousDatabaseCloneFromBackup#timeouts}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupConfig.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#virtual_network_id OracleAutonomousDatabaseCloneFromBackup#virtual_network_id}.

---

### OracleAutonomousDatabaseCloneFromBackupTimeouts <a name="OracleAutonomousDatabaseCloneFromBackupTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefrombackup"

&oracleautonomousdatabaseclonefrombackup.OracleAutonomousDatabaseCloneFromBackupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#create OracleAutonomousDatabaseCloneFromBackup#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#delete OracleAutonomousDatabaseCloneFromBackup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#read OracleAutonomousDatabaseCloneFromBackup#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#create OracleAutonomousDatabaseCloneFromBackup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#delete OracleAutonomousDatabaseCloneFromBackup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_backup#read OracleAutonomousDatabaseCloneFromBackup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference <a name="OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefrombackup"

oracleautonomousdatabaseclonefrombackup.NewOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromBackup.OracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



