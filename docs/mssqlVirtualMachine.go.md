# `mssqlVirtualMachine` Submodule <a name="`mssqlVirtualMachine` Submodule" id="@cdktf/provider-azurerm.mssqlVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlVirtualMachine <a name="MssqlVirtualMachine" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine azurerm_mssql_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachine(scope Construct, id *string, config MssqlVirtualMachineConfig) MssqlVirtualMachine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig">MssqlVirtualMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig">MssqlVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAssessment">PutAssessment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoBackup">PutAutoBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoPatching">PutAutoPatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putKeyVaultCredential">PutKeyVaultCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putSqlInstance">PutSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putStorageConfiguration">PutStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putWsfcDomainCredential">PutWsfcDomainCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAssessment">ResetAssessment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAutoBackup">ResetAutoBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAutoPatching">ResetAutoPatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetKeyVaultCredential">ResetKeyVaultCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetRServicesEnabled">ResetRServicesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityPort">ResetSqlConnectivityPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityType">ResetSqlConnectivityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityUpdatePassword">ResetSqlConnectivityUpdatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityUpdateUsername">ResetSqlConnectivityUpdateUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlInstance">ResetSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlLicenseType">ResetSqlLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlVirtualMachineGroupId">ResetSqlVirtualMachineGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetStorageConfiguration">ResetStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetWsfcDomainCredential">ResetWsfcDomainCredential</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssessment` <a name="PutAssessment" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAssessment"></a>

```go
func PutAssessment(value MssqlVirtualMachineAssessment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAssessment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a>

---

##### `PutAutoBackup` <a name="PutAutoBackup" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoBackup"></a>

```go
func PutAutoBackup(value MssqlVirtualMachineAutoBackup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a>

---

##### `PutAutoPatching` <a name="PutAutoPatching" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoPatching"></a>

```go
func PutAutoPatching(value MssqlVirtualMachineAutoPatching)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putAutoPatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a>

---

##### `PutKeyVaultCredential` <a name="PutKeyVaultCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putKeyVaultCredential"></a>

```go
func PutKeyVaultCredential(value MssqlVirtualMachineKeyVaultCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putKeyVaultCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a>

---

##### `PutSqlInstance` <a name="PutSqlInstance" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putSqlInstance"></a>

```go
func PutSqlInstance(value MssqlVirtualMachineSqlInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a>

---

##### `PutStorageConfiguration` <a name="PutStorageConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putStorageConfiguration"></a>

```go
func PutStorageConfiguration(value MssqlVirtualMachineStorageConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putTimeouts"></a>

```go
func PutTimeouts(value MssqlVirtualMachineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts">MssqlVirtualMachineTimeouts</a>

---

##### `PutWsfcDomainCredential` <a name="PutWsfcDomainCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putWsfcDomainCredential"></a>

```go
func PutWsfcDomainCredential(value MssqlVirtualMachineWsfcDomainCredential)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.putWsfcDomainCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential">MssqlVirtualMachineWsfcDomainCredential</a>

---

##### `ResetAssessment` <a name="ResetAssessment" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAssessment"></a>

```go
func ResetAssessment()
```

##### `ResetAutoBackup` <a name="ResetAutoBackup" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAutoBackup"></a>

```go
func ResetAutoBackup()
```

##### `ResetAutoPatching` <a name="ResetAutoPatching" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetAutoPatching"></a>

```go
func ResetAutoPatching()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyVaultCredential` <a name="ResetKeyVaultCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetKeyVaultCredential"></a>

```go
func ResetKeyVaultCredential()
```

##### `ResetRServicesEnabled` <a name="ResetRServicesEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetRServicesEnabled"></a>

```go
func ResetRServicesEnabled()
```

##### `ResetSqlConnectivityPort` <a name="ResetSqlConnectivityPort" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityPort"></a>

```go
func ResetSqlConnectivityPort()
```

##### `ResetSqlConnectivityType` <a name="ResetSqlConnectivityType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityType"></a>

```go
func ResetSqlConnectivityType()
```

##### `ResetSqlConnectivityUpdatePassword` <a name="ResetSqlConnectivityUpdatePassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityUpdatePassword"></a>

```go
func ResetSqlConnectivityUpdatePassword()
```

##### `ResetSqlConnectivityUpdateUsername` <a name="ResetSqlConnectivityUpdateUsername" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlConnectivityUpdateUsername"></a>

```go
func ResetSqlConnectivityUpdateUsername()
```

##### `ResetSqlInstance` <a name="ResetSqlInstance" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlInstance"></a>

```go
func ResetSqlInstance()
```

##### `ResetSqlLicenseType` <a name="ResetSqlLicenseType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlLicenseType"></a>

```go
func ResetSqlLicenseType()
```

##### `ResetSqlVirtualMachineGroupId` <a name="ResetSqlVirtualMachineGroupId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetSqlVirtualMachineGroupId"></a>

```go
func ResetSqlVirtualMachineGroupId()
```

##### `ResetStorageConfiguration` <a name="ResetStorageConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetStorageConfiguration"></a>

```go
func ResetStorageConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWsfcDomainCredential` <a name="ResetWsfcDomainCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.resetWsfcDomainCredential"></a>

```go
func ResetWsfcDomainCredential()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.MssqlVirtualMachine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.MssqlVirtualMachine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.MssqlVirtualMachine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.MssqlVirtualMachine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MssqlVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MssqlVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MssqlVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MssqlVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.assessment">Assessment</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference">MssqlVirtualMachineAssessmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoBackup">AutoBackup</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference">MssqlVirtualMachineAutoBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoPatching">AutoPatching</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference">MssqlVirtualMachineAutoPatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.keyVaultCredential">KeyVaultCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference">MssqlVirtualMachineKeyVaultCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlInstance">SqlInstance</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference">MssqlVirtualMachineSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.storageConfiguration">StorageConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference">MssqlVirtualMachineStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference">MssqlVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.wsfcDomainCredential">WsfcDomainCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference">MssqlVirtualMachineWsfcDomainCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.assessmentInput">AssessmentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoBackupInput">AutoBackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoPatchingInput">AutoPatchingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.keyVaultCredentialInput">KeyVaultCredentialInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.rServicesEnabledInput">RServicesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityPortInput">SqlConnectivityPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityTypeInput">SqlConnectivityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdatePasswordInput">SqlConnectivityUpdatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdateUsernameInput">SqlConnectivityUpdateUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlInstanceInput">SqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlLicenseTypeInput">SqlLicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlVirtualMachineGroupIdInput">SqlVirtualMachineGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.storageConfigurationInput">StorageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.virtualMachineIdInput">VirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.wsfcDomainCredentialInput">WsfcDomainCredentialInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential">MssqlVirtualMachineWsfcDomainCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.rServicesEnabled">RServicesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityPort">SqlConnectivityPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityType">SqlConnectivityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdatePassword">SqlConnectivityUpdatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdateUsername">SqlConnectivityUpdateUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlLicenseType">SqlLicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlVirtualMachineGroupId">SqlVirtualMachineGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Assessment`<sup>Required</sup> <a name="Assessment" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.assessment"></a>

```go
func Assessment() MssqlVirtualMachineAssessmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference">MssqlVirtualMachineAssessmentOutputReference</a>

---

##### `AutoBackup`<sup>Required</sup> <a name="AutoBackup" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoBackup"></a>

```go
func AutoBackup() MssqlVirtualMachineAutoBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference">MssqlVirtualMachineAutoBackupOutputReference</a>

---

##### `AutoPatching`<sup>Required</sup> <a name="AutoPatching" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoPatching"></a>

```go
func AutoPatching() MssqlVirtualMachineAutoPatchingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference">MssqlVirtualMachineAutoPatchingOutputReference</a>

---

##### `KeyVaultCredential`<sup>Required</sup> <a name="KeyVaultCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.keyVaultCredential"></a>

```go
func KeyVaultCredential() MssqlVirtualMachineKeyVaultCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference">MssqlVirtualMachineKeyVaultCredentialOutputReference</a>

---

##### `SqlInstance`<sup>Required</sup> <a name="SqlInstance" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlInstance"></a>

```go
func SqlInstance() MssqlVirtualMachineSqlInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference">MssqlVirtualMachineSqlInstanceOutputReference</a>

---

##### `StorageConfiguration`<sup>Required</sup> <a name="StorageConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.storageConfiguration"></a>

```go
func StorageConfiguration() MssqlVirtualMachineStorageConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference">MssqlVirtualMachineStorageConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.timeouts"></a>

```go
func Timeouts() MssqlVirtualMachineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference">MssqlVirtualMachineTimeoutsOutputReference</a>

---

##### `WsfcDomainCredential`<sup>Required</sup> <a name="WsfcDomainCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.wsfcDomainCredential"></a>

```go
func WsfcDomainCredential() MssqlVirtualMachineWsfcDomainCredentialOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference">MssqlVirtualMachineWsfcDomainCredentialOutputReference</a>

---

##### `AssessmentInput`<sup>Optional</sup> <a name="AssessmentInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.assessmentInput"></a>

```go
func AssessmentInput() MssqlVirtualMachineAssessment
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a>

---

##### `AutoBackupInput`<sup>Optional</sup> <a name="AutoBackupInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoBackupInput"></a>

```go
func AutoBackupInput() MssqlVirtualMachineAutoBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a>

---

##### `AutoPatchingInput`<sup>Optional</sup> <a name="AutoPatchingInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.autoPatchingInput"></a>

```go
func AutoPatchingInput() MssqlVirtualMachineAutoPatching
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultCredentialInput`<sup>Optional</sup> <a name="KeyVaultCredentialInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.keyVaultCredentialInput"></a>

```go
func KeyVaultCredentialInput() MssqlVirtualMachineKeyVaultCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a>

---

##### `RServicesEnabledInput`<sup>Optional</sup> <a name="RServicesEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.rServicesEnabledInput"></a>

```go
func RServicesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SqlConnectivityPortInput`<sup>Optional</sup> <a name="SqlConnectivityPortInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityPortInput"></a>

```go
func SqlConnectivityPortInput() *f64
```

- *Type:* *f64

---

##### `SqlConnectivityTypeInput`<sup>Optional</sup> <a name="SqlConnectivityTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityTypeInput"></a>

```go
func SqlConnectivityTypeInput() *string
```

- *Type:* *string

---

##### `SqlConnectivityUpdatePasswordInput`<sup>Optional</sup> <a name="SqlConnectivityUpdatePasswordInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdatePasswordInput"></a>

```go
func SqlConnectivityUpdatePasswordInput() *string
```

- *Type:* *string

---

##### `SqlConnectivityUpdateUsernameInput`<sup>Optional</sup> <a name="SqlConnectivityUpdateUsernameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdateUsernameInput"></a>

```go
func SqlConnectivityUpdateUsernameInput() *string
```

- *Type:* *string

---

##### `SqlInstanceInput`<sup>Optional</sup> <a name="SqlInstanceInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlInstanceInput"></a>

```go
func SqlInstanceInput() MssqlVirtualMachineSqlInstance
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a>

---

##### `SqlLicenseTypeInput`<sup>Optional</sup> <a name="SqlLicenseTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlLicenseTypeInput"></a>

```go
func SqlLicenseTypeInput() *string
```

- *Type:* *string

---

##### `SqlVirtualMachineGroupIdInput`<sup>Optional</sup> <a name="SqlVirtualMachineGroupIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlVirtualMachineGroupIdInput"></a>

```go
func SqlVirtualMachineGroupIdInput() *string
```

- *Type:* *string

---

##### `StorageConfigurationInput`<sup>Optional</sup> <a name="StorageConfigurationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.storageConfigurationInput"></a>

```go
func StorageConfigurationInput() MssqlVirtualMachineStorageConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualMachineIdInput`<sup>Optional</sup> <a name="VirtualMachineIdInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.virtualMachineIdInput"></a>

```go
func VirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `WsfcDomainCredentialInput`<sup>Optional</sup> <a name="WsfcDomainCredentialInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.wsfcDomainCredentialInput"></a>

```go
func WsfcDomainCredentialInput() MssqlVirtualMachineWsfcDomainCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential">MssqlVirtualMachineWsfcDomainCredential</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RServicesEnabled`<sup>Required</sup> <a name="RServicesEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.rServicesEnabled"></a>

```go
func RServicesEnabled() interface{}
```

- *Type:* interface{}

---

##### `SqlConnectivityPort`<sup>Required</sup> <a name="SqlConnectivityPort" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityPort"></a>

```go
func SqlConnectivityPort() *f64
```

- *Type:* *f64

---

##### `SqlConnectivityType`<sup>Required</sup> <a name="SqlConnectivityType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityType"></a>

```go
func SqlConnectivityType() *string
```

- *Type:* *string

---

##### `SqlConnectivityUpdatePassword`<sup>Required</sup> <a name="SqlConnectivityUpdatePassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdatePassword"></a>

```go
func SqlConnectivityUpdatePassword() *string
```

- *Type:* *string

---

##### `SqlConnectivityUpdateUsername`<sup>Required</sup> <a name="SqlConnectivityUpdateUsername" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlConnectivityUpdateUsername"></a>

```go
func SqlConnectivityUpdateUsername() *string
```

- *Type:* *string

---

##### `SqlLicenseType`<sup>Required</sup> <a name="SqlLicenseType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlLicenseType"></a>

```go
func SqlLicenseType() *string
```

- *Type:* *string

---

##### `SqlVirtualMachineGroupId`<sup>Required</sup> <a name="SqlVirtualMachineGroupId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.sqlVirtualMachineGroupId"></a>

```go
func SqlVirtualMachineGroupId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.virtualMachineId"></a>

```go
func VirtualMachineId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlVirtualMachineAssessment <a name="MssqlVirtualMachineAssessment" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineAssessment {
	Enabled: interface{},
	RunImmediately: interface{},
	Schedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#enabled MssqlVirtualMachine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.runImmediately">RunImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#run_immediately MssqlVirtualMachine#run_immediately}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a></code> | schedule block. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#enabled MssqlVirtualMachine#enabled}.

---

##### `RunImmediately`<sup>Optional</sup> <a name="RunImmediately" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.runImmediately"></a>

```go
RunImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#run_immediately MssqlVirtualMachine#run_immediately}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment.property.schedule"></a>

```go
Schedule MssqlVirtualMachineAssessmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#schedule MssqlVirtualMachine#schedule}

---

### MssqlVirtualMachineAssessmentSchedule <a name="MssqlVirtualMachineAssessmentSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineAssessmentSchedule {
	DayOfWeek: *string,
	StartTime: *string,
	MonthlyOccurrence: *f64,
	WeeklyInterval: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#day_of_week MssqlVirtualMachine#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#start_time MssqlVirtualMachine#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.monthlyOccurrence">MonthlyOccurrence</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#monthly_occurrence MssqlVirtualMachine#monthly_occurrence}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.weeklyInterval">WeeklyInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#weekly_interval MssqlVirtualMachine#weekly_interval}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#day_of_week MssqlVirtualMachine#day_of_week}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#start_time MssqlVirtualMachine#start_time}.

---

##### `MonthlyOccurrence`<sup>Optional</sup> <a name="MonthlyOccurrence" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.monthlyOccurrence"></a>

```go
MonthlyOccurrence *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#monthly_occurrence MssqlVirtualMachine#monthly_occurrence}.

---

##### `WeeklyInterval`<sup>Optional</sup> <a name="WeeklyInterval" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule.property.weeklyInterval"></a>

```go
WeeklyInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#weekly_interval MssqlVirtualMachine#weekly_interval}.

---

### MssqlVirtualMachineAutoBackup <a name="MssqlVirtualMachineAutoBackup" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineAutoBackup {
	RetentionPeriodInDays: *f64,
	StorageAccountAccessKey: *string,
	StorageBlobEndpoint: *string,
	EncryptionEnabled: interface{},
	EncryptionPassword: *string,
	ManualSchedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule,
	SystemDatabasesBackupEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#retention_period_in_days MssqlVirtualMachine#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#storage_account_access_key MssqlVirtualMachine#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.storageBlobEndpoint">StorageBlobEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#storage_blob_endpoint MssqlVirtualMachine#storage_blob_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.encryptionEnabled">EncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#encryption_enabled MssqlVirtualMachine#encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.encryptionPassword">EncryptionPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#encryption_password MssqlVirtualMachine#encryption_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.manualSchedule">ManualSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a></code> | manual_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.systemDatabasesBackupEnabled">SystemDatabasesBackupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#system_databases_backup_enabled MssqlVirtualMachine#system_databases_backup_enabled}. |

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.retentionPeriodInDays"></a>

```go
RetentionPeriodInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#retention_period_in_days MssqlVirtualMachine#retention_period_in_days}.

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.storageAccountAccessKey"></a>

```go
StorageAccountAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#storage_account_access_key MssqlVirtualMachine#storage_account_access_key}.

---

##### `StorageBlobEndpoint`<sup>Required</sup> <a name="StorageBlobEndpoint" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.storageBlobEndpoint"></a>

```go
StorageBlobEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#storage_blob_endpoint MssqlVirtualMachine#storage_blob_endpoint}.

---

##### `EncryptionEnabled`<sup>Optional</sup> <a name="EncryptionEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.encryptionEnabled"></a>

```go
EncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#encryption_enabled MssqlVirtualMachine#encryption_enabled}.

---

##### `EncryptionPassword`<sup>Optional</sup> <a name="EncryptionPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.encryptionPassword"></a>

```go
EncryptionPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#encryption_password MssqlVirtualMachine#encryption_password}.

---

##### `ManualSchedule`<sup>Optional</sup> <a name="ManualSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.manualSchedule"></a>

```go
ManualSchedule MssqlVirtualMachineAutoBackupManualSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a>

manual_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#manual_schedule MssqlVirtualMachine#manual_schedule}

---

##### `SystemDatabasesBackupEnabled`<sup>Optional</sup> <a name="SystemDatabasesBackupEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup.property.systemDatabasesBackupEnabled"></a>

```go
SystemDatabasesBackupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#system_databases_backup_enabled MssqlVirtualMachine#system_databases_backup_enabled}.

---

### MssqlVirtualMachineAutoBackupManualSchedule <a name="MssqlVirtualMachineAutoBackupManualSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineAutoBackupManualSchedule {
	FullBackupFrequency: *string,
	FullBackupStartHour: *f64,
	FullBackupWindowInHours: *f64,
	LogBackupFrequencyInMinutes: *f64,
	DaysOfWeek: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupFrequency">FullBackupFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#full_backup_frequency MssqlVirtualMachine#full_backup_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupStartHour">FullBackupStartHour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#full_backup_start_hour MssqlVirtualMachine#full_backup_start_hour}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupWindowInHours">FullBackupWindowInHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#full_backup_window_in_hours MssqlVirtualMachine#full_backup_window_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.logBackupFrequencyInMinutes">LogBackupFrequencyInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#log_backup_frequency_in_minutes MssqlVirtualMachine#log_backup_frequency_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#days_of_week MssqlVirtualMachine#days_of_week}. |

---

##### `FullBackupFrequency`<sup>Required</sup> <a name="FullBackupFrequency" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupFrequency"></a>

```go
FullBackupFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#full_backup_frequency MssqlVirtualMachine#full_backup_frequency}.

---

##### `FullBackupStartHour`<sup>Required</sup> <a name="FullBackupStartHour" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupStartHour"></a>

```go
FullBackupStartHour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#full_backup_start_hour MssqlVirtualMachine#full_backup_start_hour}.

---

##### `FullBackupWindowInHours`<sup>Required</sup> <a name="FullBackupWindowInHours" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.fullBackupWindowInHours"></a>

```go
FullBackupWindowInHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#full_backup_window_in_hours MssqlVirtualMachine#full_backup_window_in_hours}.

---

##### `LogBackupFrequencyInMinutes`<sup>Required</sup> <a name="LogBackupFrequencyInMinutes" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.logBackupFrequencyInMinutes"></a>

```go
LogBackupFrequencyInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#log_backup_frequency_in_minutes MssqlVirtualMachine#log_backup_frequency_in_minutes}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#days_of_week MssqlVirtualMachine#days_of_week}.

---

### MssqlVirtualMachineAutoPatching <a name="MssqlVirtualMachineAutoPatching" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineAutoPatching {
	DayOfWeek: *string,
	MaintenanceWindowDurationInMinutes: *f64,
	MaintenanceWindowStartingHour: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#day_of_week MssqlVirtualMachine#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.maintenanceWindowDurationInMinutes">MaintenanceWindowDurationInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#maintenance_window_duration_in_minutes MssqlVirtualMachine#maintenance_window_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.maintenanceWindowStartingHour">MaintenanceWindowStartingHour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#maintenance_window_starting_hour MssqlVirtualMachine#maintenance_window_starting_hour}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#day_of_week MssqlVirtualMachine#day_of_week}.

---

##### `MaintenanceWindowDurationInMinutes`<sup>Required</sup> <a name="MaintenanceWindowDurationInMinutes" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.maintenanceWindowDurationInMinutes"></a>

```go
MaintenanceWindowDurationInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#maintenance_window_duration_in_minutes MssqlVirtualMachine#maintenance_window_duration_in_minutes}.

---

##### `MaintenanceWindowStartingHour`<sup>Required</sup> <a name="MaintenanceWindowStartingHour" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching.property.maintenanceWindowStartingHour"></a>

```go
MaintenanceWindowStartingHour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#maintenance_window_starting_hour MssqlVirtualMachine#maintenance_window_starting_hour}.

---

### MssqlVirtualMachineConfig <a name="MssqlVirtualMachineConfig" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VirtualMachineId: *string,
	Assessment: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment,
	AutoBackup: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup,
	AutoPatching: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching,
	Id: *string,
	KeyVaultCredential: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential,
	RServicesEnabled: interface{},
	SqlConnectivityPort: *f64,
	SqlConnectivityType: *string,
	SqlConnectivityUpdatePassword: *string,
	SqlConnectivityUpdateUsername: *string,
	SqlInstance: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance,
	SqlLicenseType: *string,
	SqlVirtualMachineGroupId: *string,
	StorageConfiguration: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts,
	WsfcDomainCredential: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.virtualMachineId">VirtualMachineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#virtual_machine_id MssqlVirtualMachine#virtual_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.assessment">Assessment</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a></code> | assessment block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.autoBackup">AutoBackup</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a></code> | auto_backup block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.autoPatching">AutoPatching</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a></code> | auto_patching block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#id MssqlVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.keyVaultCredential">KeyVaultCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a></code> | key_vault_credential block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.rServicesEnabled">RServicesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#r_services_enabled MssqlVirtualMachine#r_services_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityPort">SqlConnectivityPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_connectivity_port MssqlVirtualMachine#sql_connectivity_port}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityType">SqlConnectivityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_connectivity_type MssqlVirtualMachine#sql_connectivity_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityUpdatePassword">SqlConnectivityUpdatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_connectivity_update_password MssqlVirtualMachine#sql_connectivity_update_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityUpdateUsername">SqlConnectivityUpdateUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_connectivity_update_username MssqlVirtualMachine#sql_connectivity_update_username}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlInstance">SqlInstance</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a></code> | sql_instance block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlLicenseType">SqlLicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_license_type MssqlVirtualMachine#sql_license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlVirtualMachineGroupId">SqlVirtualMachineGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_virtual_machine_group_id MssqlVirtualMachine#sql_virtual_machine_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.storageConfiguration">StorageConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a></code> | storage_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#tags MssqlVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts">MssqlVirtualMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.wsfcDomainCredential">WsfcDomainCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential">MssqlVirtualMachineWsfcDomainCredential</a></code> | wsfc_domain_credential block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VirtualMachineId`<sup>Required</sup> <a name="VirtualMachineId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.virtualMachineId"></a>

```go
VirtualMachineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#virtual_machine_id MssqlVirtualMachine#virtual_machine_id}.

---

##### `Assessment`<sup>Optional</sup> <a name="Assessment" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.assessment"></a>

```go
Assessment MssqlVirtualMachineAssessment
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a>

assessment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#assessment MssqlVirtualMachine#assessment}

---

##### `AutoBackup`<sup>Optional</sup> <a name="AutoBackup" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.autoBackup"></a>

```go
AutoBackup MssqlVirtualMachineAutoBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a>

auto_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#auto_backup MssqlVirtualMachine#auto_backup}

---

##### `AutoPatching`<sup>Optional</sup> <a name="AutoPatching" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.autoPatching"></a>

```go
AutoPatching MssqlVirtualMachineAutoPatching
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a>

auto_patching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#auto_patching MssqlVirtualMachine#auto_patching}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#id MssqlVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVaultCredential`<sup>Optional</sup> <a name="KeyVaultCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.keyVaultCredential"></a>

```go
KeyVaultCredential MssqlVirtualMachineKeyVaultCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a>

key_vault_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#key_vault_credential MssqlVirtualMachine#key_vault_credential}

---

##### `RServicesEnabled`<sup>Optional</sup> <a name="RServicesEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.rServicesEnabled"></a>

```go
RServicesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#r_services_enabled MssqlVirtualMachine#r_services_enabled}.

---

##### `SqlConnectivityPort`<sup>Optional</sup> <a name="SqlConnectivityPort" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityPort"></a>

```go
SqlConnectivityPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_connectivity_port MssqlVirtualMachine#sql_connectivity_port}.

---

##### `SqlConnectivityType`<sup>Optional</sup> <a name="SqlConnectivityType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityType"></a>

```go
SqlConnectivityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_connectivity_type MssqlVirtualMachine#sql_connectivity_type}.

---

##### `SqlConnectivityUpdatePassword`<sup>Optional</sup> <a name="SqlConnectivityUpdatePassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityUpdatePassword"></a>

```go
SqlConnectivityUpdatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_connectivity_update_password MssqlVirtualMachine#sql_connectivity_update_password}.

---

##### `SqlConnectivityUpdateUsername`<sup>Optional</sup> <a name="SqlConnectivityUpdateUsername" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlConnectivityUpdateUsername"></a>

```go
SqlConnectivityUpdateUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_connectivity_update_username MssqlVirtualMachine#sql_connectivity_update_username}.

---

##### `SqlInstance`<sup>Optional</sup> <a name="SqlInstance" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlInstance"></a>

```go
SqlInstance MssqlVirtualMachineSqlInstance
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a>

sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_instance MssqlVirtualMachine#sql_instance}

---

##### `SqlLicenseType`<sup>Optional</sup> <a name="SqlLicenseType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlLicenseType"></a>

```go
SqlLicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_license_type MssqlVirtualMachine#sql_license_type}.

---

##### `SqlVirtualMachineGroupId`<sup>Optional</sup> <a name="SqlVirtualMachineGroupId" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.sqlVirtualMachineGroupId"></a>

```go
SqlVirtualMachineGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_virtual_machine_group_id MssqlVirtualMachine#sql_virtual_machine_group_id}.

---

##### `StorageConfiguration`<sup>Optional</sup> <a name="StorageConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.storageConfiguration"></a>

```go
StorageConfiguration MssqlVirtualMachineStorageConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a>

storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#storage_configuration MssqlVirtualMachine#storage_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#tags MssqlVirtualMachine#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.timeouts"></a>

```go
Timeouts MssqlVirtualMachineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts">MssqlVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#timeouts MssqlVirtualMachine#timeouts}

---

##### `WsfcDomainCredential`<sup>Optional</sup> <a name="WsfcDomainCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineConfig.property.wsfcDomainCredential"></a>

```go
WsfcDomainCredential MssqlVirtualMachineWsfcDomainCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential">MssqlVirtualMachineWsfcDomainCredential</a>

wsfc_domain_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#wsfc_domain_credential MssqlVirtualMachine#wsfc_domain_credential}

---

### MssqlVirtualMachineKeyVaultCredential <a name="MssqlVirtualMachineKeyVaultCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineKeyVaultCredential {
	KeyVaultUrl: *string,
	Name: *string,
	ServicePrincipalName: *string,
	ServicePrincipalSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.keyVaultUrl">KeyVaultUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#key_vault_url MssqlVirtualMachine#key_vault_url}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#name MssqlVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#service_principal_name MssqlVirtualMachine#service_principal_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.servicePrincipalSecret">ServicePrincipalSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#service_principal_secret MssqlVirtualMachine#service_principal_secret}. |

---

##### `KeyVaultUrl`<sup>Required</sup> <a name="KeyVaultUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.keyVaultUrl"></a>

```go
KeyVaultUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#key_vault_url MssqlVirtualMachine#key_vault_url}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#name MssqlVirtualMachine#name}.

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.servicePrincipalName"></a>

```go
ServicePrincipalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#service_principal_name MssqlVirtualMachine#service_principal_name}.

---

##### `ServicePrincipalSecret`<sup>Required</sup> <a name="ServicePrincipalSecret" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential.property.servicePrincipalSecret"></a>

```go
ServicePrincipalSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#service_principal_secret MssqlVirtualMachine#service_principal_secret}.

---

### MssqlVirtualMachineSqlInstance <a name="MssqlVirtualMachineSqlInstance" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineSqlInstance {
	AdhocWorkloadsOptimizationEnabled: interface{},
	Collation: *string,
	InstantFileInitializationEnabled: interface{},
	LockPagesInMemoryEnabled: interface{},
	MaxDop: *f64,
	MaxServerMemoryMb: *f64,
	MinServerMemoryMb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.adhocWorkloadsOptimizationEnabled">AdhocWorkloadsOptimizationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#adhoc_workloads_optimization_enabled MssqlVirtualMachine#adhoc_workloads_optimization_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.collation">Collation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#collation MssqlVirtualMachine#collation}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.instantFileInitializationEnabled">InstantFileInitializationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#instant_file_initialization_enabled MssqlVirtualMachine#instant_file_initialization_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.lockPagesInMemoryEnabled">LockPagesInMemoryEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#lock_pages_in_memory_enabled MssqlVirtualMachine#lock_pages_in_memory_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.maxDop">MaxDop</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#max_dop MssqlVirtualMachine#max_dop}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.maxServerMemoryMb">MaxServerMemoryMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#max_server_memory_mb MssqlVirtualMachine#max_server_memory_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.minServerMemoryMb">MinServerMemoryMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#min_server_memory_mb MssqlVirtualMachine#min_server_memory_mb}. |

---

##### `AdhocWorkloadsOptimizationEnabled`<sup>Optional</sup> <a name="AdhocWorkloadsOptimizationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.adhocWorkloadsOptimizationEnabled"></a>

```go
AdhocWorkloadsOptimizationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#adhoc_workloads_optimization_enabled MssqlVirtualMachine#adhoc_workloads_optimization_enabled}.

---

##### `Collation`<sup>Optional</sup> <a name="Collation" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.collation"></a>

```go
Collation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#collation MssqlVirtualMachine#collation}.

---

##### `InstantFileInitializationEnabled`<sup>Optional</sup> <a name="InstantFileInitializationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.instantFileInitializationEnabled"></a>

```go
InstantFileInitializationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#instant_file_initialization_enabled MssqlVirtualMachine#instant_file_initialization_enabled}.

---

##### `LockPagesInMemoryEnabled`<sup>Optional</sup> <a name="LockPagesInMemoryEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.lockPagesInMemoryEnabled"></a>

```go
LockPagesInMemoryEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#lock_pages_in_memory_enabled MssqlVirtualMachine#lock_pages_in_memory_enabled}.

---

##### `MaxDop`<sup>Optional</sup> <a name="MaxDop" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.maxDop"></a>

```go
MaxDop *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#max_dop MssqlVirtualMachine#max_dop}.

---

##### `MaxServerMemoryMb`<sup>Optional</sup> <a name="MaxServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.maxServerMemoryMb"></a>

```go
MaxServerMemoryMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#max_server_memory_mb MssqlVirtualMachine#max_server_memory_mb}.

---

##### `MinServerMemoryMb`<sup>Optional</sup> <a name="MinServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance.property.minServerMemoryMb"></a>

```go
MinServerMemoryMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#min_server_memory_mb MssqlVirtualMachine#min_server_memory_mb}.

---

### MssqlVirtualMachineStorageConfiguration <a name="MssqlVirtualMachineStorageConfiguration" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineStorageConfiguration {
	DiskType: *string,
	StorageWorkloadType: *string,
	DataSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings,
	LogSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings,
	SystemDbOnDataDiskEnabled: interface{},
	TempDbSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.diskType">DiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#disk_type MssqlVirtualMachine#disk_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.storageWorkloadType">StorageWorkloadType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#storage_workload_type MssqlVirtualMachine#storage_workload_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.dataSettings">DataSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a></code> | data_settings block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.logSettings">LogSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a></code> | log_settings block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.systemDbOnDataDiskEnabled">SystemDbOnDataDiskEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#system_db_on_data_disk_enabled MssqlVirtualMachine#system_db_on_data_disk_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.tempDbSettings">TempDbSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a></code> | temp_db_settings block. |

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#disk_type MssqlVirtualMachine#disk_type}.

---

##### `StorageWorkloadType`<sup>Required</sup> <a name="StorageWorkloadType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.storageWorkloadType"></a>

```go
StorageWorkloadType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#storage_workload_type MssqlVirtualMachine#storage_workload_type}.

---

##### `DataSettings`<sup>Optional</sup> <a name="DataSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.dataSettings"></a>

```go
DataSettings MssqlVirtualMachineStorageConfigurationDataSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a>

data_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#data_settings MssqlVirtualMachine#data_settings}

---

##### `LogSettings`<sup>Optional</sup> <a name="LogSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.logSettings"></a>

```go
LogSettings MssqlVirtualMachineStorageConfigurationLogSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a>

log_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#log_settings MssqlVirtualMachine#log_settings}

---

##### `SystemDbOnDataDiskEnabled`<sup>Optional</sup> <a name="SystemDbOnDataDiskEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.systemDbOnDataDiskEnabled"></a>

```go
SystemDbOnDataDiskEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#system_db_on_data_disk_enabled MssqlVirtualMachine#system_db_on_data_disk_enabled}.

---

##### `TempDbSettings`<sup>Optional</sup> <a name="TempDbSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration.property.tempDbSettings"></a>

```go
TempDbSettings MssqlVirtualMachineStorageConfigurationTempDbSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a>

temp_db_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#temp_db_settings MssqlVirtualMachine#temp_db_settings}

---

### MssqlVirtualMachineStorageConfigurationDataSettings <a name="MssqlVirtualMachineStorageConfigurationDataSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineStorageConfigurationDataSettings {
	DefaultFilePath: *string,
	Luns: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings.property.defaultFilePath">DefaultFilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings.property.luns">Luns</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}. |

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings.property.defaultFilePath"></a>

```go
DefaultFilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}.

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings.property.luns"></a>

```go
Luns *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}.

---

### MssqlVirtualMachineStorageConfigurationLogSettings <a name="MssqlVirtualMachineStorageConfigurationLogSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineStorageConfigurationLogSettings {
	DefaultFilePath: *string,
	Luns: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings.property.defaultFilePath">DefaultFilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings.property.luns">Luns</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}. |

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings.property.defaultFilePath"></a>

```go
DefaultFilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}.

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings.property.luns"></a>

```go
Luns *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}.

---

### MssqlVirtualMachineStorageConfigurationTempDbSettings <a name="MssqlVirtualMachineStorageConfigurationTempDbSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineStorageConfigurationTempDbSettings {
	DefaultFilePath: *string,
	Luns: *[]*f64,
	DataFileCount: *f64,
	DataFileGrowthInMb: *f64,
	DataFileSizeMb: *f64,
	LogFileGrowthMb: *f64,
	LogFileSizeMb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.defaultFilePath">DefaultFilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.luns">Luns</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileCount">DataFileCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#data_file_count MssqlVirtualMachine#data_file_count}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileGrowthInMb">DataFileGrowthInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#data_file_growth_in_mb MssqlVirtualMachine#data_file_growth_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileSizeMb">DataFileSizeMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#data_file_size_mb MssqlVirtualMachine#data_file_size_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.logFileGrowthMb">LogFileGrowthMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#log_file_growth_mb MssqlVirtualMachine#log_file_growth_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.logFileSizeMb">LogFileSizeMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#log_file_size_mb MssqlVirtualMachine#log_file_size_mb}. |

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.defaultFilePath"></a>

```go
DefaultFilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#default_file_path MssqlVirtualMachine#default_file_path}.

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.luns"></a>

```go
Luns *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#luns MssqlVirtualMachine#luns}.

---

##### `DataFileCount`<sup>Optional</sup> <a name="DataFileCount" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileCount"></a>

```go
DataFileCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#data_file_count MssqlVirtualMachine#data_file_count}.

---

##### `DataFileGrowthInMb`<sup>Optional</sup> <a name="DataFileGrowthInMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileGrowthInMb"></a>

```go
DataFileGrowthInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#data_file_growth_in_mb MssqlVirtualMachine#data_file_growth_in_mb}.

---

##### `DataFileSizeMb`<sup>Optional</sup> <a name="DataFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.dataFileSizeMb"></a>

```go
DataFileSizeMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#data_file_size_mb MssqlVirtualMachine#data_file_size_mb}.

---

##### `LogFileGrowthMb`<sup>Optional</sup> <a name="LogFileGrowthMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.logFileGrowthMb"></a>

```go
LogFileGrowthMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#log_file_growth_mb MssqlVirtualMachine#log_file_growth_mb}.

---

##### `LogFileSizeMb`<sup>Optional</sup> <a name="LogFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings.property.logFileSizeMb"></a>

```go
LogFileSizeMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#log_file_size_mb MssqlVirtualMachine#log_file_size_mb}.

---

### MssqlVirtualMachineTimeouts <a name="MssqlVirtualMachineTimeouts" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#create MssqlVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#delete MssqlVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#read MssqlVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#update MssqlVirtualMachine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#create MssqlVirtualMachine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#delete MssqlVirtualMachine#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#read MssqlVirtualMachine#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#update MssqlVirtualMachine#update}.

---

### MssqlVirtualMachineWsfcDomainCredential <a name="MssqlVirtualMachineWsfcDomainCredential" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

&mssqlvirtualmachine.MssqlVirtualMachineWsfcDomainCredential {
	ClusterBootstrapAccountPassword: *string,
	ClusterOperatorAccountPassword: *string,
	SqlServiceAccountPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential.property.clusterBootstrapAccountPassword">ClusterBootstrapAccountPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#cluster_bootstrap_account_password MssqlVirtualMachine#cluster_bootstrap_account_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential.property.clusterOperatorAccountPassword">ClusterOperatorAccountPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#cluster_operator_account_password MssqlVirtualMachine#cluster_operator_account_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential.property.sqlServiceAccountPassword">SqlServiceAccountPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_service_account_password MssqlVirtualMachine#sql_service_account_password}. |

---

##### `ClusterBootstrapAccountPassword`<sup>Required</sup> <a name="ClusterBootstrapAccountPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential.property.clusterBootstrapAccountPassword"></a>

```go
ClusterBootstrapAccountPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#cluster_bootstrap_account_password MssqlVirtualMachine#cluster_bootstrap_account_password}.

---

##### `ClusterOperatorAccountPassword`<sup>Required</sup> <a name="ClusterOperatorAccountPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential.property.clusterOperatorAccountPassword"></a>

```go
ClusterOperatorAccountPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#cluster_operator_account_password MssqlVirtualMachine#cluster_operator_account_password}.

---

##### `SqlServiceAccountPassword`<sup>Required</sup> <a name="SqlServiceAccountPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential.property.sqlServiceAccountPassword"></a>

```go
SqlServiceAccountPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/mssql_virtual_machine#sql_service_account_password MssqlVirtualMachine#sql_service_account_password}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlVirtualMachineAssessmentOutputReference <a name="MssqlVirtualMachineAssessmentOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineAssessmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineAssessmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetRunImmediately">ResetRunImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.putSchedule"></a>

```go
func PutSchedule(value MssqlVirtualMachineAssessmentSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRunImmediately` <a name="ResetRunImmediately" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetRunImmediately"></a>

```go
func ResetRunImmediately()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference">MssqlVirtualMachineAssessmentScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.runImmediatelyInput">RunImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.runImmediately">RunImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.schedule"></a>

```go
func Schedule() MssqlVirtualMachineAssessmentScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference">MssqlVirtualMachineAssessmentScheduleOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RunImmediatelyInput`<sup>Optional</sup> <a name="RunImmediatelyInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.runImmediatelyInput"></a>

```go
func RunImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() MssqlVirtualMachineAssessmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `RunImmediately`<sup>Required</sup> <a name="RunImmediately" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.runImmediately"></a>

```go
func RunImmediately() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineAssessment
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessment">MssqlVirtualMachineAssessment</a>

---


### MssqlVirtualMachineAssessmentScheduleOutputReference <a name="MssqlVirtualMachineAssessmentScheduleOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineAssessmentScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineAssessmentScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resetMonthlyOccurrence">ResetMonthlyOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resetWeeklyInterval">ResetWeeklyInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMonthlyOccurrence` <a name="ResetMonthlyOccurrence" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resetMonthlyOccurrence"></a>

```go
func ResetMonthlyOccurrence()
```

##### `ResetWeeklyInterval` <a name="ResetWeeklyInterval" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.resetWeeklyInterval"></a>

```go
func ResetWeeklyInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.monthlyOccurrenceInput">MonthlyOccurrenceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.weeklyIntervalInput">WeeklyIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.monthlyOccurrence">MonthlyOccurrence</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.weeklyInterval">WeeklyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `MonthlyOccurrenceInput`<sup>Optional</sup> <a name="MonthlyOccurrenceInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.monthlyOccurrenceInput"></a>

```go
func MonthlyOccurrenceInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `WeeklyIntervalInput`<sup>Optional</sup> <a name="WeeklyIntervalInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.weeklyIntervalInput"></a>

```go
func WeeklyIntervalInput() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `MonthlyOccurrence`<sup>Required</sup> <a name="MonthlyOccurrence" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.monthlyOccurrence"></a>

```go
func MonthlyOccurrence() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `WeeklyInterval`<sup>Required</sup> <a name="WeeklyInterval" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.weeklyInterval"></a>

```go
func WeeklyInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineAssessmentSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAssessmentSchedule">MssqlVirtualMachineAssessmentSchedule</a>

---


### MssqlVirtualMachineAutoBackupManualScheduleOutputReference <a name="MssqlVirtualMachineAutoBackupManualScheduleOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineAutoBackupManualScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineAutoBackupManualScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupFrequencyInput">FullBackupFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupStartHourInput">FullBackupStartHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupWindowInHoursInput">FullBackupWindowInHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.logBackupFrequencyInMinutesInput">LogBackupFrequencyInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupFrequency">FullBackupFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupStartHour">FullBackupStartHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupWindowInHours">FullBackupWindowInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.logBackupFrequencyInMinutes">LogBackupFrequencyInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `FullBackupFrequencyInput`<sup>Optional</sup> <a name="FullBackupFrequencyInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupFrequencyInput"></a>

```go
func FullBackupFrequencyInput() *string
```

- *Type:* *string

---

##### `FullBackupStartHourInput`<sup>Optional</sup> <a name="FullBackupStartHourInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupStartHourInput"></a>

```go
func FullBackupStartHourInput() *f64
```

- *Type:* *f64

---

##### `FullBackupWindowInHoursInput`<sup>Optional</sup> <a name="FullBackupWindowInHoursInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupWindowInHoursInput"></a>

```go
func FullBackupWindowInHoursInput() *f64
```

- *Type:* *f64

---

##### `LogBackupFrequencyInMinutesInput`<sup>Optional</sup> <a name="LogBackupFrequencyInMinutesInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.logBackupFrequencyInMinutesInput"></a>

```go
func LogBackupFrequencyInMinutesInput() *f64
```

- *Type:* *f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `FullBackupFrequency`<sup>Required</sup> <a name="FullBackupFrequency" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupFrequency"></a>

```go
func FullBackupFrequency() *string
```

- *Type:* *string

---

##### `FullBackupStartHour`<sup>Required</sup> <a name="FullBackupStartHour" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupStartHour"></a>

```go
func FullBackupStartHour() *f64
```

- *Type:* *f64

---

##### `FullBackupWindowInHours`<sup>Required</sup> <a name="FullBackupWindowInHours" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.fullBackupWindowInHours"></a>

```go
func FullBackupWindowInHours() *f64
```

- *Type:* *f64

---

##### `LogBackupFrequencyInMinutes`<sup>Required</sup> <a name="LogBackupFrequencyInMinutes" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.logBackupFrequencyInMinutes"></a>

```go
func LogBackupFrequencyInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineAutoBackupManualSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a>

---


### MssqlVirtualMachineAutoBackupOutputReference <a name="MssqlVirtualMachineAutoBackupOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineAutoBackupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineAutoBackupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.putManualSchedule">PutManualSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetEncryptionEnabled">ResetEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetEncryptionPassword">ResetEncryptionPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetManualSchedule">ResetManualSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetSystemDatabasesBackupEnabled">ResetSystemDatabasesBackupEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManualSchedule` <a name="PutManualSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.putManualSchedule"></a>

```go
func PutManualSchedule(value MssqlVirtualMachineAutoBackupManualSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.putManualSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a>

---

##### `ResetEncryptionEnabled` <a name="ResetEncryptionEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetEncryptionEnabled"></a>

```go
func ResetEncryptionEnabled()
```

##### `ResetEncryptionPassword` <a name="ResetEncryptionPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetEncryptionPassword"></a>

```go
func ResetEncryptionPassword()
```

##### `ResetManualSchedule` <a name="ResetManualSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetManualSchedule"></a>

```go
func ResetManualSchedule()
```

##### `ResetSystemDatabasesBackupEnabled` <a name="ResetSystemDatabasesBackupEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.resetSystemDatabasesBackupEnabled"></a>

```go
func ResetSystemDatabasesBackupEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.manualSchedule">ManualSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference">MssqlVirtualMachineAutoBackupManualScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionEnabledInput">EncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionPasswordInput">EncryptionPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.manualScheduleInput">ManualScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.retentionPeriodInDaysInput">RetentionPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageBlobEndpointInput">StorageBlobEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.systemDatabasesBackupEnabledInput">SystemDatabasesBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionEnabled">EncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionPassword">EncryptionPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageBlobEndpoint">StorageBlobEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.systemDatabasesBackupEnabled">SystemDatabasesBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManualSchedule`<sup>Required</sup> <a name="ManualSchedule" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.manualSchedule"></a>

```go
func ManualSchedule() MssqlVirtualMachineAutoBackupManualScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualScheduleOutputReference">MssqlVirtualMachineAutoBackupManualScheduleOutputReference</a>

---

##### `EncryptionEnabledInput`<sup>Optional</sup> <a name="EncryptionEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionEnabledInput"></a>

```go
func EncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionPasswordInput`<sup>Optional</sup> <a name="EncryptionPasswordInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionPasswordInput"></a>

```go
func EncryptionPasswordInput() *string
```

- *Type:* *string

---

##### `ManualScheduleInput`<sup>Optional</sup> <a name="ManualScheduleInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.manualScheduleInput"></a>

```go
func ManualScheduleInput() MssqlVirtualMachineAutoBackupManualSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupManualSchedule">MssqlVirtualMachineAutoBackupManualSchedule</a>

---

##### `RetentionPeriodInDaysInput`<sup>Optional</sup> <a name="RetentionPeriodInDaysInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.retentionPeriodInDaysInput"></a>

```go
func RetentionPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageAccountAccessKeyInput"></a>

```go
func StorageAccountAccessKeyInput() *string
```

- *Type:* *string

---

##### `StorageBlobEndpointInput`<sup>Optional</sup> <a name="StorageBlobEndpointInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageBlobEndpointInput"></a>

```go
func StorageBlobEndpointInput() *string
```

- *Type:* *string

---

##### `SystemDatabasesBackupEnabledInput`<sup>Optional</sup> <a name="SystemDatabasesBackupEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.systemDatabasesBackupEnabledInput"></a>

```go
func SystemDatabasesBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionEnabled`<sup>Required</sup> <a name="EncryptionEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionEnabled"></a>

```go
func EncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `EncryptionPassword`<sup>Required</sup> <a name="EncryptionPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.encryptionPassword"></a>

```go
func EncryptionPassword() *string
```

- *Type:* *string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageAccountAccessKey"></a>

```go
func StorageAccountAccessKey() *string
```

- *Type:* *string

---

##### `StorageBlobEndpoint`<sup>Required</sup> <a name="StorageBlobEndpoint" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.storageBlobEndpoint"></a>

```go
func StorageBlobEndpoint() *string
```

- *Type:* *string

---

##### `SystemDatabasesBackupEnabled`<sup>Required</sup> <a name="SystemDatabasesBackupEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.systemDatabasesBackupEnabled"></a>

```go
func SystemDatabasesBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackupOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineAutoBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoBackup">MssqlVirtualMachineAutoBackup</a>

---


### MssqlVirtualMachineAutoPatchingOutputReference <a name="MssqlVirtualMachineAutoPatchingOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineAutoPatchingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineAutoPatchingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowDurationInMinutesInput">MaintenanceWindowDurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowStartingHourInput">MaintenanceWindowStartingHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowDurationInMinutes">MaintenanceWindowDurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowStartingHour">MaintenanceWindowStartingHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowDurationInMinutesInput`<sup>Optional</sup> <a name="MaintenanceWindowDurationInMinutesInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowDurationInMinutesInput"></a>

```go
func MaintenanceWindowDurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `MaintenanceWindowStartingHourInput`<sup>Optional</sup> <a name="MaintenanceWindowStartingHourInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowStartingHourInput"></a>

```go
func MaintenanceWindowStartingHourInput() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `MaintenanceWindowDurationInMinutes`<sup>Required</sup> <a name="MaintenanceWindowDurationInMinutes" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowDurationInMinutes"></a>

```go
func MaintenanceWindowDurationInMinutes() *f64
```

- *Type:* *f64

---

##### `MaintenanceWindowStartingHour`<sup>Required</sup> <a name="MaintenanceWindowStartingHour" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.maintenanceWindowStartingHour"></a>

```go
func MaintenanceWindowStartingHour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatchingOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineAutoPatching
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineAutoPatching">MssqlVirtualMachineAutoPatching</a>

---


### MssqlVirtualMachineKeyVaultCredentialOutputReference <a name="MssqlVirtualMachineKeyVaultCredentialOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineKeyVaultCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineKeyVaultCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.keyVaultUrlInput">KeyVaultUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalSecretInput">ServicePrincipalSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.keyVaultUrl">KeyVaultUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalSecret">ServicePrincipalSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyVaultUrlInput`<sup>Optional</sup> <a name="KeyVaultUrlInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.keyVaultUrlInput"></a>

```go
func KeyVaultUrlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalNameInput"></a>

```go
func ServicePrincipalNameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalSecretInput`<sup>Optional</sup> <a name="ServicePrincipalSecretInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalSecretInput"></a>

```go
func ServicePrincipalSecretInput() *string
```

- *Type:* *string

---

##### `KeyVaultUrl`<sup>Required</sup> <a name="KeyVaultUrl" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.keyVaultUrl"></a>

```go
func KeyVaultUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalName"></a>

```go
func ServicePrincipalName() *string
```

- *Type:* *string

---

##### `ServicePrincipalSecret`<sup>Required</sup> <a name="ServicePrincipalSecret" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.servicePrincipalSecret"></a>

```go
func ServicePrincipalSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineKeyVaultCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineKeyVaultCredential">MssqlVirtualMachineKeyVaultCredential</a>

---


### MssqlVirtualMachineSqlInstanceOutputReference <a name="MssqlVirtualMachineSqlInstanceOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineSqlInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineSqlInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetAdhocWorkloadsOptimizationEnabled">ResetAdhocWorkloadsOptimizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetCollation">ResetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetInstantFileInitializationEnabled">ResetInstantFileInitializationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetLockPagesInMemoryEnabled">ResetLockPagesInMemoryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMaxDop">ResetMaxDop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMaxServerMemoryMb">ResetMaxServerMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMinServerMemoryMb">ResetMinServerMemoryMb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdhocWorkloadsOptimizationEnabled` <a name="ResetAdhocWorkloadsOptimizationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetAdhocWorkloadsOptimizationEnabled"></a>

```go
func ResetAdhocWorkloadsOptimizationEnabled()
```

##### `ResetCollation` <a name="ResetCollation" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetCollation"></a>

```go
func ResetCollation()
```

##### `ResetInstantFileInitializationEnabled` <a name="ResetInstantFileInitializationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetInstantFileInitializationEnabled"></a>

```go
func ResetInstantFileInitializationEnabled()
```

##### `ResetLockPagesInMemoryEnabled` <a name="ResetLockPagesInMemoryEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetLockPagesInMemoryEnabled"></a>

```go
func ResetLockPagesInMemoryEnabled()
```

##### `ResetMaxDop` <a name="ResetMaxDop" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMaxDop"></a>

```go
func ResetMaxDop()
```

##### `ResetMaxServerMemoryMb` <a name="ResetMaxServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMaxServerMemoryMb"></a>

```go
func ResetMaxServerMemoryMb()
```

##### `ResetMinServerMemoryMb` <a name="ResetMinServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.resetMinServerMemoryMb"></a>

```go
func ResetMinServerMemoryMb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.adhocWorkloadsOptimizationEnabledInput">AdhocWorkloadsOptimizationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.collationInput">CollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.instantFileInitializationEnabledInput">InstantFileInitializationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.lockPagesInMemoryEnabledInput">LockPagesInMemoryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxDopInput">MaxDopInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxServerMemoryMbInput">MaxServerMemoryMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.minServerMemoryMbInput">MinServerMemoryMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.adhocWorkloadsOptimizationEnabled">AdhocWorkloadsOptimizationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.collation">Collation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.instantFileInitializationEnabled">InstantFileInitializationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.lockPagesInMemoryEnabled">LockPagesInMemoryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxDop">MaxDop</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxServerMemoryMb">MaxServerMemoryMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.minServerMemoryMb">MinServerMemoryMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdhocWorkloadsOptimizationEnabledInput`<sup>Optional</sup> <a name="AdhocWorkloadsOptimizationEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.adhocWorkloadsOptimizationEnabledInput"></a>

```go
func AdhocWorkloadsOptimizationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.collationInput"></a>

```go
func CollationInput() *string
```

- *Type:* *string

---

##### `InstantFileInitializationEnabledInput`<sup>Optional</sup> <a name="InstantFileInitializationEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.instantFileInitializationEnabledInput"></a>

```go
func InstantFileInitializationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LockPagesInMemoryEnabledInput`<sup>Optional</sup> <a name="LockPagesInMemoryEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.lockPagesInMemoryEnabledInput"></a>

```go
func LockPagesInMemoryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxDopInput`<sup>Optional</sup> <a name="MaxDopInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxDopInput"></a>

```go
func MaxDopInput() *f64
```

- *Type:* *f64

---

##### `MaxServerMemoryMbInput`<sup>Optional</sup> <a name="MaxServerMemoryMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxServerMemoryMbInput"></a>

```go
func MaxServerMemoryMbInput() *f64
```

- *Type:* *f64

---

##### `MinServerMemoryMbInput`<sup>Optional</sup> <a name="MinServerMemoryMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.minServerMemoryMbInput"></a>

```go
func MinServerMemoryMbInput() *f64
```

- *Type:* *f64

---

##### `AdhocWorkloadsOptimizationEnabled`<sup>Required</sup> <a name="AdhocWorkloadsOptimizationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.adhocWorkloadsOptimizationEnabled"></a>

```go
func AdhocWorkloadsOptimizationEnabled() interface{}
```

- *Type:* interface{}

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.collation"></a>

```go
func Collation() *string
```

- *Type:* *string

---

##### `InstantFileInitializationEnabled`<sup>Required</sup> <a name="InstantFileInitializationEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.instantFileInitializationEnabled"></a>

```go
func InstantFileInitializationEnabled() interface{}
```

- *Type:* interface{}

---

##### `LockPagesInMemoryEnabled`<sup>Required</sup> <a name="LockPagesInMemoryEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.lockPagesInMemoryEnabled"></a>

```go
func LockPagesInMemoryEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaxDop`<sup>Required</sup> <a name="MaxDop" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxDop"></a>

```go
func MaxDop() *f64
```

- *Type:* *f64

---

##### `MaxServerMemoryMb`<sup>Required</sup> <a name="MaxServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.maxServerMemoryMb"></a>

```go
func MaxServerMemoryMb() *f64
```

- *Type:* *f64

---

##### `MinServerMemoryMb`<sup>Required</sup> <a name="MinServerMemoryMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.minServerMemoryMb"></a>

```go
func MinServerMemoryMb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineSqlInstance
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineSqlInstance">MssqlVirtualMachineSqlInstance</a>

---


### MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference <a name="MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineStorageConfigurationDataSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.defaultFilePathInput">DefaultFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.lunsInput">LunsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.defaultFilePath">DefaultFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.luns">Luns</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultFilePathInput`<sup>Optional</sup> <a name="DefaultFilePathInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.defaultFilePathInput"></a>

```go
func DefaultFilePathInput() *string
```

- *Type:* *string

---

##### `LunsInput`<sup>Optional</sup> <a name="LunsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.lunsInput"></a>

```go
func LunsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.defaultFilePath"></a>

```go
func DefaultFilePath() *string
```

- *Type:* *string

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.luns"></a>

```go
func Luns() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineStorageConfigurationDataSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a>

---


### MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference <a name="MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineStorageConfigurationLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.defaultFilePathInput">DefaultFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.lunsInput">LunsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.defaultFilePath">DefaultFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.luns">Luns</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultFilePathInput`<sup>Optional</sup> <a name="DefaultFilePathInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.defaultFilePathInput"></a>

```go
func DefaultFilePathInput() *string
```

- *Type:* *string

---

##### `LunsInput`<sup>Optional</sup> <a name="LunsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.lunsInput"></a>

```go
func LunsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.defaultFilePath"></a>

```go
func DefaultFilePath() *string
```

- *Type:* *string

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.luns"></a>

```go
func Luns() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineStorageConfigurationLogSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a>

---


### MssqlVirtualMachineStorageConfigurationOutputReference <a name="MssqlVirtualMachineStorageConfigurationOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineStorageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineStorageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putDataSettings">PutDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putLogSettings">PutLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putTempDbSettings">PutTempDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetDataSettings">ResetDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetLogSettings">ResetLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetSystemDbOnDataDiskEnabled">ResetSystemDbOnDataDiskEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetTempDbSettings">ResetTempDbSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSettings` <a name="PutDataSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putDataSettings"></a>

```go
func PutDataSettings(value MssqlVirtualMachineStorageConfigurationDataSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putDataSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a>

---

##### `PutLogSettings` <a name="PutLogSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putLogSettings"></a>

```go
func PutLogSettings(value MssqlVirtualMachineStorageConfigurationLogSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a>

---

##### `PutTempDbSettings` <a name="PutTempDbSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putTempDbSettings"></a>

```go
func PutTempDbSettings(value MssqlVirtualMachineStorageConfigurationTempDbSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.putTempDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a>

---

##### `ResetDataSettings` <a name="ResetDataSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetDataSettings"></a>

```go
func ResetDataSettings()
```

##### `ResetLogSettings` <a name="ResetLogSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetLogSettings"></a>

```go
func ResetLogSettings()
```

##### `ResetSystemDbOnDataDiskEnabled` <a name="ResetSystemDbOnDataDiskEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetSystemDbOnDataDiskEnabled"></a>

```go
func ResetSystemDbOnDataDiskEnabled()
```

##### `ResetTempDbSettings` <a name="ResetTempDbSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.resetTempDbSettings"></a>

```go
func ResetTempDbSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.dataSettings">DataSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference">MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.logSettings">LogSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference">MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.tempDbSettings">TempDbSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference">MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.dataSettingsInput">DataSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.logSettingsInput">LogSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.storageWorkloadTypeInput">StorageWorkloadTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.systemDbOnDataDiskEnabledInput">SystemDbOnDataDiskEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.tempDbSettingsInput">TempDbSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.storageWorkloadType">StorageWorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.systemDbOnDataDiskEnabled">SystemDbOnDataDiskEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSettings`<sup>Required</sup> <a name="DataSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.dataSettings"></a>

```go
func DataSettings() MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference">MssqlVirtualMachineStorageConfigurationDataSettingsOutputReference</a>

---

##### `LogSettings`<sup>Required</sup> <a name="LogSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.logSettings"></a>

```go
func LogSettings() MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference">MssqlVirtualMachineStorageConfigurationLogSettingsOutputReference</a>

---

##### `TempDbSettings`<sup>Required</sup> <a name="TempDbSettings" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.tempDbSettings"></a>

```go
func TempDbSettings() MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference">MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference</a>

---

##### `DataSettingsInput`<sup>Optional</sup> <a name="DataSettingsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.dataSettingsInput"></a>

```go
func DataSettingsInput() MssqlVirtualMachineStorageConfigurationDataSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationDataSettings">MssqlVirtualMachineStorageConfigurationDataSettings</a>

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `LogSettingsInput`<sup>Optional</sup> <a name="LogSettingsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.logSettingsInput"></a>

```go
func LogSettingsInput() MssqlVirtualMachineStorageConfigurationLogSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationLogSettings">MssqlVirtualMachineStorageConfigurationLogSettings</a>

---

##### `StorageWorkloadTypeInput`<sup>Optional</sup> <a name="StorageWorkloadTypeInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.storageWorkloadTypeInput"></a>

```go
func StorageWorkloadTypeInput() *string
```

- *Type:* *string

---

##### `SystemDbOnDataDiskEnabledInput`<sup>Optional</sup> <a name="SystemDbOnDataDiskEnabledInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.systemDbOnDataDiskEnabledInput"></a>

```go
func SystemDbOnDataDiskEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TempDbSettingsInput`<sup>Optional</sup> <a name="TempDbSettingsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.tempDbSettingsInput"></a>

```go
func TempDbSettingsInput() MssqlVirtualMachineStorageConfigurationTempDbSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a>

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `StorageWorkloadType`<sup>Required</sup> <a name="StorageWorkloadType" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.storageWorkloadType"></a>

```go
func StorageWorkloadType() *string
```

- *Type:* *string

---

##### `SystemDbOnDataDiskEnabled`<sup>Required</sup> <a name="SystemDbOnDataDiskEnabled" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.systemDbOnDataDiskEnabled"></a>

```go
func SystemDbOnDataDiskEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineStorageConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfiguration">MssqlVirtualMachineStorageConfiguration</a>

---


### MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference <a name="MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileCount">ResetDataFileCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileGrowthInMb">ResetDataFileGrowthInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileSizeMb">ResetDataFileSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetLogFileGrowthMb">ResetLogFileGrowthMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetLogFileSizeMb">ResetLogFileSizeMb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataFileCount` <a name="ResetDataFileCount" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileCount"></a>

```go
func ResetDataFileCount()
```

##### `ResetDataFileGrowthInMb` <a name="ResetDataFileGrowthInMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileGrowthInMb"></a>

```go
func ResetDataFileGrowthInMb()
```

##### `ResetDataFileSizeMb` <a name="ResetDataFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetDataFileSizeMb"></a>

```go
func ResetDataFileSizeMb()
```

##### `ResetLogFileGrowthMb` <a name="ResetLogFileGrowthMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetLogFileGrowthMb"></a>

```go
func ResetLogFileGrowthMb()
```

##### `ResetLogFileSizeMb` <a name="ResetLogFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.resetLogFileSizeMb"></a>

```go
func ResetLogFileSizeMb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileCountInput">DataFileCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileGrowthInMbInput">DataFileGrowthInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileSizeMbInput">DataFileSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.defaultFilePathInput">DefaultFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileGrowthMbInput">LogFileGrowthMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileSizeMbInput">LogFileSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.lunsInput">LunsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileCount">DataFileCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileGrowthInMb">DataFileGrowthInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileSizeMb">DataFileSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.defaultFilePath">DefaultFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileGrowthMb">LogFileGrowthMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileSizeMb">LogFileSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.luns">Luns</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataFileCountInput`<sup>Optional</sup> <a name="DataFileCountInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileCountInput"></a>

```go
func DataFileCountInput() *f64
```

- *Type:* *f64

---

##### `DataFileGrowthInMbInput`<sup>Optional</sup> <a name="DataFileGrowthInMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileGrowthInMbInput"></a>

```go
func DataFileGrowthInMbInput() *f64
```

- *Type:* *f64

---

##### `DataFileSizeMbInput`<sup>Optional</sup> <a name="DataFileSizeMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileSizeMbInput"></a>

```go
func DataFileSizeMbInput() *f64
```

- *Type:* *f64

---

##### `DefaultFilePathInput`<sup>Optional</sup> <a name="DefaultFilePathInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.defaultFilePathInput"></a>

```go
func DefaultFilePathInput() *string
```

- *Type:* *string

---

##### `LogFileGrowthMbInput`<sup>Optional</sup> <a name="LogFileGrowthMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileGrowthMbInput"></a>

```go
func LogFileGrowthMbInput() *f64
```

- *Type:* *f64

---

##### `LogFileSizeMbInput`<sup>Optional</sup> <a name="LogFileSizeMbInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileSizeMbInput"></a>

```go
func LogFileSizeMbInput() *f64
```

- *Type:* *f64

---

##### `LunsInput`<sup>Optional</sup> <a name="LunsInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.lunsInput"></a>

```go
func LunsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DataFileCount`<sup>Required</sup> <a name="DataFileCount" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileCount"></a>

```go
func DataFileCount() *f64
```

- *Type:* *f64

---

##### `DataFileGrowthInMb`<sup>Required</sup> <a name="DataFileGrowthInMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileGrowthInMb"></a>

```go
func DataFileGrowthInMb() *f64
```

- *Type:* *f64

---

##### `DataFileSizeMb`<sup>Required</sup> <a name="DataFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.dataFileSizeMb"></a>

```go
func DataFileSizeMb() *f64
```

- *Type:* *f64

---

##### `DefaultFilePath`<sup>Required</sup> <a name="DefaultFilePath" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.defaultFilePath"></a>

```go
func DefaultFilePath() *string
```

- *Type:* *string

---

##### `LogFileGrowthMb`<sup>Required</sup> <a name="LogFileGrowthMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileGrowthMb"></a>

```go
func LogFileGrowthMb() *f64
```

- *Type:* *f64

---

##### `LogFileSizeMb`<sup>Required</sup> <a name="LogFileSizeMb" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.logFileSizeMb"></a>

```go
func LogFileSizeMb() *f64
```

- *Type:* *f64

---

##### `Luns`<sup>Required</sup> <a name="Luns" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.luns"></a>

```go
func Luns() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineStorageConfigurationTempDbSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineStorageConfigurationTempDbSettings">MssqlVirtualMachineStorageConfigurationTempDbSettings</a>

---


### MssqlVirtualMachineTimeoutsOutputReference <a name="MssqlVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MssqlVirtualMachineWsfcDomainCredentialOutputReference <a name="MssqlVirtualMachineWsfcDomainCredentialOutputReference" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlvirtualmachine"

mssqlvirtualmachine.NewMssqlVirtualMachineWsfcDomainCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlVirtualMachineWsfcDomainCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.clusterBootstrapAccountPasswordInput">ClusterBootstrapAccountPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.clusterOperatorAccountPasswordInput">ClusterOperatorAccountPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.sqlServiceAccountPasswordInput">SqlServiceAccountPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.clusterBootstrapAccountPassword">ClusterBootstrapAccountPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.clusterOperatorAccountPassword">ClusterOperatorAccountPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.sqlServiceAccountPassword">SqlServiceAccountPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential">MssqlVirtualMachineWsfcDomainCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterBootstrapAccountPasswordInput`<sup>Optional</sup> <a name="ClusterBootstrapAccountPasswordInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.clusterBootstrapAccountPasswordInput"></a>

```go
func ClusterBootstrapAccountPasswordInput() *string
```

- *Type:* *string

---

##### `ClusterOperatorAccountPasswordInput`<sup>Optional</sup> <a name="ClusterOperatorAccountPasswordInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.clusterOperatorAccountPasswordInput"></a>

```go
func ClusterOperatorAccountPasswordInput() *string
```

- *Type:* *string

---

##### `SqlServiceAccountPasswordInput`<sup>Optional</sup> <a name="SqlServiceAccountPasswordInput" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.sqlServiceAccountPasswordInput"></a>

```go
func SqlServiceAccountPasswordInput() *string
```

- *Type:* *string

---

##### `ClusterBootstrapAccountPassword`<sup>Required</sup> <a name="ClusterBootstrapAccountPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.clusterBootstrapAccountPassword"></a>

```go
func ClusterBootstrapAccountPassword() *string
```

- *Type:* *string

---

##### `ClusterOperatorAccountPassword`<sup>Required</sup> <a name="ClusterOperatorAccountPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.clusterOperatorAccountPassword"></a>

```go
func ClusterOperatorAccountPassword() *string
```

- *Type:* *string

---

##### `SqlServiceAccountPassword`<sup>Required</sup> <a name="SqlServiceAccountPassword" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.sqlServiceAccountPassword"></a>

```go
func SqlServiceAccountPassword() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlVirtualMachineWsfcDomainCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlVirtualMachine.MssqlVirtualMachineWsfcDomainCredential">MssqlVirtualMachineWsfcDomainCredential</a>

---



