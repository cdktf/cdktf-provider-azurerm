# `oracleAutonomousDatabaseCloneFromDatabase` Submodule <a name="`oracleAutonomousDatabaseCloneFromDatabase` Submodule" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseCloneFromDatabase <a name="OracleAutonomousDatabaseCloneFromDatabase" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefromdatabase"

oracleautonomousdatabaseclonefromdatabase.NewOracleAutonomousDatabaseCloneFromDatabase(scope Construct, id *string, config OracleAutonomousDatabaseCloneFromDatabaseConfig) OracleAutonomousDatabaseCloneFromDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig">OracleAutonomousDatabaseCloneFromDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig">OracleAutonomousDatabaseCloneFromDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetAllowedIpAddresses">ResetAllowedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetCustomerContacts">ResetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetRefreshableModel">ResetRefreshableModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts"></a>

```go
func PutTimeouts(value OracleAutonomousDatabaseCloneFromDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `ResetAllowedIpAddresses` <a name="ResetAllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetAllowedIpAddresses"></a>

```go
func ResetAllowedIpAddresses()
```

##### `ResetCustomerContacts` <a name="ResetCustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetCustomerContacts"></a>

```go
func ResetCustomerContacts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetRefreshableModel` <a name="ResetRefreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetRefreshableModel"></a>

```go
func ResetRefreshableModel()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefromdatabase"

oracleautonomousdatabaseclonefromdatabase.OracleAutonomousDatabaseCloneFromDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefromdatabase"

oracleautonomousdatabaseclonefromdatabase.OracleAutonomousDatabaseCloneFromDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefromdatabase"

oracleautonomousdatabaseclonefromdatabase.OracleAutonomousDatabaseCloneFromDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefromdatabase"

oracleautonomousdatabaseclonefromdatabase.OracleAutonomousDatabaseCloneFromDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OracleAutonomousDatabaseCloneFromDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OracleAutonomousDatabaseCloneFromDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseCloneFromDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddressesInput">AllowedIpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabledInput">AutoScalingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabledInput">AutoScalingForStorageEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDaysInput">BackupRetentionPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSetInput">CharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneTypeInput">CloneTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCountInput">ComputeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModelInput">ComputeModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContactsInput">CustomerContactsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersionInput">DatabaseVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkloadInput">DatabaseWorkloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTbInput">DataStorageSizeInTbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequiredInput">MtlsConnectionRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSetInput">NationalCharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModelInput">RefreshableModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseIdInput">SourceAutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneType">CloneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContacts">CustomerContacts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload">DatabaseWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb">DataStorageSizeInTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModel">RefreshableModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeouts"></a>

```go
func Timeouts() OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `AllowedIpAddressesInput`<sup>Optional</sup> <a name="AllowedIpAddressesInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddressesInput"></a>

```go
func AllowedIpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoScalingEnabledInput`<sup>Optional</sup> <a name="AutoScalingEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabledInput"></a>

```go
func AutoScalingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="AutoScalingForStorageEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabledInput"></a>

```go
func AutoScalingForStorageEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BackupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInDaysInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDaysInput"></a>

```go
func BackupRetentionPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSetInput"></a>

```go
func CharacterSetInput() *string
```

- *Type:* *string

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneTypeInput"></a>

```go
func CloneTypeInput() *string
```

- *Type:* *string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCountInput"></a>

```go
func ComputeCountInput() *f64
```

- *Type:* *f64

---

##### `ComputeModelInput`<sup>Optional</sup> <a name="ComputeModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModelInput"></a>

```go
func ComputeModelInput() *string
```

- *Type:* *string

---

##### `CustomerContactsInput`<sup>Optional</sup> <a name="CustomerContactsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContactsInput"></a>

```go
func CustomerContactsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseVersionInput`<sup>Optional</sup> <a name="DatabaseVersionInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersionInput"></a>

```go
func DatabaseVersionInput() *string
```

- *Type:* *string

---

##### `DatabaseWorkloadInput`<sup>Optional</sup> <a name="DatabaseWorkloadInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkloadInput"></a>

```go
func DatabaseWorkloadInput() *string
```

- *Type:* *string

---

##### `DataStorageSizeInTbInput`<sup>Optional</sup> <a name="DataStorageSizeInTbInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTbInput"></a>

```go
func DataStorageSizeInTbInput() *f64
```

- *Type:* *f64

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MtlsConnectionRequiredInput`<sup>Optional</sup> <a name="MtlsConnectionRequiredInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequiredInput"></a>

```go
func MtlsConnectionRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NationalCharacterSetInput`<sup>Optional</sup> <a name="NationalCharacterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSetInput"></a>

```go
func NationalCharacterSetInput() *string
```

- *Type:* *string

---

##### `RefreshableModelInput`<sup>Optional</sup> <a name="RefreshableModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModelInput"></a>

```go
func RefreshableModelInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseIdInput"></a>

```go
func SourceAutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AllowedIpAddresses`<sup>Required</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses"></a>

```go
func AllowedIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled"></a>

```go
func AutoScalingEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled"></a>

```go
func AutoScalingForStorageEnabled() interface{}
```

- *Type:* interface{}

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays"></a>

```go
func BackupRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneType"></a>

```go
func CloneType() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContacts"></a>

```go
func CustomerContacts() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DatabaseWorkload`<sup>Required</sup> <a name="DatabaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload"></a>

```go
func DatabaseWorkload() *string
```

- *Type:* *string

---

##### `DataStorageSizeInTb`<sup>Required</sup> <a name="DataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb"></a>

```go
func DataStorageSizeInTb() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired"></a>

```go
func MtlsConnectionRequired() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet"></a>

```go
func NationalCharacterSet() *string
```

- *Type:* *string

---

##### `RefreshableModel`<sup>Required</sup> <a name="RefreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModel"></a>

```go
func RefreshableModel() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId"></a>

```go
func SourceAutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseCloneFromDatabaseConfig <a name="OracleAutonomousDatabaseCloneFromDatabaseConfig" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefromdatabase"

&oracleautonomousdatabaseclonefromdatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig {
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
	CustomerContacts: *[]*string,
	Id: *string,
	RefreshableModel: *string,
	SubnetId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.characterSet">CharacterSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.cloneType">CloneType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeModel">ComputeModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseWorkload">DatabaseWorkload</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dataStorageSizeInTb">DataStorageSizeInTb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.customerContacts">CustomerContacts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.refreshableModel">RefreshableModel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}.

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingEnabled"></a>

```go
AutoScalingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}.

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingForStorageEnabled"></a>

```go
AutoScalingForStorageEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}.

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```go
BackupRetentionPeriodInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}.

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.characterSet"></a>

```go
CharacterSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}.

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.cloneType"></a>

```go
CloneType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}.

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeCount"></a>

```go
ComputeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}.

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeModel"></a>

```go
ComputeModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}.

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseVersion"></a>

```go
DatabaseVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}.

---

##### `DatabaseWorkload`<sup>Required</sup> <a name="DatabaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseWorkload"></a>

```go
DatabaseWorkload *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}.

---

##### `DataStorageSizeInTb`<sup>Required</sup> <a name="DataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dataStorageSizeInTb"></a>

```go
DataStorageSizeInTb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}.

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}.

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.mtlsConnectionRequired"></a>

```go
MtlsConnectionRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}.

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.nationalCharacterSet"></a>

```go
NationalCharacterSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}.

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.sourceAutonomousDatabaseId"></a>

```go
SourceAutonomousDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}.

---

##### `AllowedIpAddresses`<sup>Optional</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.allowedIpAddresses"></a>

```go
AllowedIpAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}.

---

##### `CustomerContacts`<sup>Optional</sup> <a name="CustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.customerContacts"></a>

```go
CustomerContacts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshableModel`<sup>Optional</sup> <a name="RefreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.refreshableModel"></a>

```go
RefreshableModel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts"></a>

```go
Timeouts OracleAutonomousDatabaseCloneFromDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#timeouts OracleAutonomousDatabaseCloneFromDatabase#timeouts}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}.

---

### OracleAutonomousDatabaseCloneFromDatabaseTimeouts <a name="OracleAutonomousDatabaseCloneFromDatabaseTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefromdatabase"

&oracleautonomousdatabaseclonefromdatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference <a name="OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabaseclonefromdatabase"

oracleautonomousdatabaseclonefromdatabase.NewOracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



