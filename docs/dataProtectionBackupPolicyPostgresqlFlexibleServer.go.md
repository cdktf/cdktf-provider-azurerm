# `dataProtectionBackupPolicyPostgresqlFlexibleServer` Submodule <a name="`dataProtectionBackupPolicyPostgresqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServer <a name="DataProtectionBackupPolicyPostgresqlFlexibleServer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server azurerm_data_protection_backup_policy_postgresql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.NewDataProtectionBackupPolicyPostgresqlFlexibleServer(scope Construct, id *string, config DataProtectionBackupPolicyPostgresqlFlexibleServerConfig) DataProtectionBackupPolicyPostgresqlFlexibleServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig">DataProtectionBackupPolicyPostgresqlFlexibleServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig">DataProtectionBackupPolicyPostgresqlFlexibleServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule">PutDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule">PutRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetRetentionRule">ResetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultRetentionRule` <a name="PutDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule"></a>

```go
func PutDefaultRetentionRule(value DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---

##### `PutRetentionRule` <a name="PutRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule"></a>

```go
func PutRetentionRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts"></a>

```go
func PutTimeouts(value DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetId"></a>

```go
func ResetId()
```

##### `ResetRetentionRule` <a name="ResetRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetRetentionRule"></a>

```go
func ResetRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyPostgresqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataProtectionBackupPolicyPostgresqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataProtectionBackupPolicyPostgresqlFlexibleServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataProtectionBackupPolicyPostgresqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyPostgresqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRule">DefaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRule">RetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervalsInput">BackupRepeatingTimeIntervalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRuleInput">DefaultRetentionRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRuleInput">RetentionRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultIdInput">VaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultRetentionRule`<sup>Required</sup> <a name="DefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRule"></a>

```go
func DefaultRetentionRule() DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference</a>

---

##### `RetentionRule`<sup>Required</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRule"></a>

```go
func RetentionRule() DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeouts"></a>

```go
func Timeouts() DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference</a>

---

##### `BackupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="BackupRepeatingTimeIntervalsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervalsInput"></a>

```go
func BackupRepeatingTimeIntervalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRetentionRuleInput`<sup>Optional</sup> <a name="DefaultRetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRuleInput"></a>

```go
func DefaultRetentionRuleInput() DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetentionRuleInput`<sup>Optional</sup> <a name="RetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRuleInput"></a>

```go
func RetentionRuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultIdInput"></a>

```go
func VaultIdInput() *string
```

- *Type:* *string

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervals"></a>

```go
func BackupRepeatingTimeIntervals() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServerConfig <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

&dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupRepeatingTimeIntervals: *[]*string,
	DefaultRetentionRule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule,
	Name: *string,
	VaultId: *string,
	Id: *string,
	RetentionRule: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresqlFlexibleServer#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.defaultRetentionRule">DefaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.vaultId">VaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#vault_id DataProtectionBackupPolicyPostgresqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#id DataProtectionBackupPolicyPostgresqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.retentionRule">RetentionRule</a></code> | <code>interface{}</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#time_zone DataProtectionBackupPolicyPostgresqlFlexibleServer#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.backupRepeatingTimeIntervals"></a>

```go
BackupRepeatingTimeIntervals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresqlFlexibleServer#backup_repeating_time_intervals}.

---

##### `DefaultRetentionRule`<sup>Required</sup> <a name="DefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.defaultRetentionRule"></a>

```go
DefaultRetentionRule DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#default_retention_rule DataProtectionBackupPolicyPostgresqlFlexibleServer#default_retention_rule}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.vaultId"></a>

```go
VaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#vault_id DataProtectionBackupPolicyPostgresqlFlexibleServer#vault_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#id DataProtectionBackupPolicyPostgresqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionRule`<sup>Optional</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.retentionRule"></a>

```go
RetentionRule interface{}
```

- *Type:* interface{}

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#retention_rule DataProtectionBackupPolicyPostgresqlFlexibleServer#retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeouts"></a>

```go
Timeouts DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#timeouts DataProtectionBackupPolicyPostgresqlFlexibleServer#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#time_zone DataProtectionBackupPolicyPostgresqlFlexibleServer#time_zone}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

&dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule {
	LifeCycle: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code>interface{}</code> | life_cycle block. |

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.property.lifeCycle"></a>

```go
LifeCycle interface{}
```

- *Type:* interface{}

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#life_cycle DataProtectionBackupPolicyPostgresqlFlexibleServer#life_cycle}

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

&dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle {
	DataStoreType: *string,
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType"></a>

```go
DataStoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

&dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule {
	Criteria: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria,
	LifeCycle: interface{},
	Name: *string,
	Priority: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code>interface{}</code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#priority DataProtectionBackupPolicyPostgresqlFlexibleServer#priority}. |

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.criteria"></a>

```go
Criteria DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#criteria}

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.lifeCycle"></a>

```go
LifeCycle interface{}
```

- *Type:* interface{}

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#life_cycle DataProtectionBackupPolicyPostgresqlFlexibleServer#life_cycle}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#priority DataProtectionBackupPolicyPostgresqlFlexibleServer#priority}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

&dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria {
	AbsoluteCriteria: *string,
	DaysOfWeek: *[]*string,
	MonthsOfYear: *[]*string,
	ScheduledBackupTimes: *[]*string,
	WeeksOfMonth: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#absolute_criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#days_of_week DataProtectionBackupPolicyPostgresqlFlexibleServer#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear">MonthsOfYear</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#months_of_year DataProtectionBackupPolicyPostgresqlFlexibleServer#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyPostgresqlFlexibleServer#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#weeks_of_month DataProtectionBackupPolicyPostgresqlFlexibleServer#weeks_of_month}. |

---

##### `AbsoluteCriteria`<sup>Optional</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria"></a>

```go
AbsoluteCriteria *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#absolute_criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#absolute_criteria}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#days_of_week DataProtectionBackupPolicyPostgresqlFlexibleServer#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear"></a>

```go
MonthsOfYear *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#months_of_year DataProtectionBackupPolicyPostgresqlFlexibleServer#months_of_year}.

---

##### `ScheduledBackupTimes`<sup>Optional</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```go
ScheduledBackupTimes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyPostgresqlFlexibleServer#scheduled_backup_times}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#weeks_of_month DataProtectionBackupPolicyPostgresqlFlexibleServer#weeks_of_month}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

&dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle {
	DataStoreType: *string,
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType"></a>

```go
DataStoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

&dataprotectionbackuppolicypostgresqlflexibleserver.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#create DataProtectionBackupPolicyPostgresqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#delete DataProtectionBackupPolicyPostgresqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#read DataProtectionBackupPolicyPostgresqlFlexibleServer#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#create DataProtectionBackupPolicyPostgresqlFlexibleServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#delete DataProtectionBackupPolicyPostgresqlFlexibleServer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.2.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#read DataProtectionBackupPolicyPostgresqlFlexibleServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.NewDataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get"></a>

```go
func Get(index *f64) DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.NewDataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```go
func DataStoreTypeInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```go
func DataStoreType() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.NewDataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle"></a>

```go
func PutLifeCycle(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle"></a>

```go
func LifeCycle() DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput"></a>

```go
func LifeCycleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.NewDataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">ResetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">ResetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsoluteCriteria` <a name="ResetAbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```go
func ResetAbsoluteCriteria()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```go
func ResetMonthsOfYear()
```

##### `ResetScheduledBackupTimes` <a name="ResetScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```go
func ResetScheduledBackupTimes()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">AbsoluteCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">ScheduledBackupTimesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteCriteriaInput`<sup>Optional</sup> <a name="AbsoluteCriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```go
func AbsoluteCriteriaInput() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```go
func MonthsOfYearInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScheduledBackupTimesInput`<sup>Optional</sup> <a name="ScheduledBackupTimesInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```go
func ScheduledBackupTimesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*string
```

- *Type:* *[]*string

---

##### `AbsoluteCriteria`<sup>Required</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```go
func AbsoluteCriteria() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```go
func MonthsOfYear() *[]*string
```

- *Type:* *[]*string

---

##### `ScheduledBackupTimes`<sup>Required</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```go
func ScheduledBackupTimes() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.NewDataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get"></a>

```go
func Get(index *f64) DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.NewDataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```go
func DataStoreTypeInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```go
func DataStoreType() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.NewDataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get"></a>

```go
func Get(index *f64) DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.NewDataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria"></a>

```go
func PutCriteria(value DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle"></a>

```go
func PutLifeCycle(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteria"></a>

```go
func Criteria() DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference</a>

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle"></a>

```go
func LifeCycle() DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput"></a>

```go
func CriteriaInput() DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput"></a>

```go
func LifeCycleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataprotectionbackuppolicypostgresqlflexibleserver"

dataprotectionbackuppolicypostgresqlflexibleserver.NewDataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



