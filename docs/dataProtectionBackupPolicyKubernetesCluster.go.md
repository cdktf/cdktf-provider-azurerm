# `dataProtectionBackupPolicyKubernetesCluster` Submodule <a name="`dataProtectionBackupPolicyKubernetesCluster` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyKubernetesCluster <a name="DataProtectionBackupPolicyKubernetesCluster" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster azurerm_data_protection_backup_policy_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.NewDataProtectionBackupPolicyKubernetesCluster(scope Construct, id *string, config DataProtectionBackupPolicyKubernetesClusterConfig) DataProtectionBackupPolicyKubernetesCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig">DataProtectionBackupPolicyKubernetesClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig">DataProtectionBackupPolicyKubernetesClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putDefaultRetentionRule">PutDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putRetentionRule">PutRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetRetentionRule">ResetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultRetentionRule` <a name="PutDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putDefaultRetentionRule"></a>

```go
func PutDefaultRetentionRule(value DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putDefaultRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

---

##### `PutRetentionRule` <a name="PutRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putRetentionRule"></a>

```go
func PutRetentionRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putRetentionRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts"></a>

```go
func PutTimeouts(value DataProtectionBackupPolicyKubernetesClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetRetentionRule` <a name="ResetRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetRetentionRule"></a>

```go
func ResetRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyKubernetesCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataProtectionBackupPolicyKubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataProtectionBackupPolicyKubernetesCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataProtectionBackupPolicyKubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyKubernetesCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRule">DefaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRule">RetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference">DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervalsInput">BackupRepeatingTimeIntervalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRuleInput">DefaultRetentionRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRuleInput">RetentionRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultNameInput">VaultNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultName">VaultName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultRetentionRule`<sup>Required</sup> <a name="DefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRule"></a>

```go
func DefaultRetentionRule() DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference</a>

---

##### `RetentionRule`<sup>Required</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRule"></a>

```go
func RetentionRule() DataProtectionBackupPolicyKubernetesClusterRetentionRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeouts"></a>

```go
func Timeouts() DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference">DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference</a>

---

##### `BackupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="BackupRepeatingTimeIntervalsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervalsInput"></a>

```go
func BackupRepeatingTimeIntervalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRetentionRuleInput`<sup>Optional</sup> <a name="DefaultRetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRuleInput"></a>

```go
func DefaultRetentionRuleInput() DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RetentionRuleInput`<sup>Optional</sup> <a name="RetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRuleInput"></a>

```go
func RetentionRuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `VaultNameInput`<sup>Optional</sup> <a name="VaultNameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultNameInput"></a>

```go
func VaultNameInput() *string
```

- *Type:* *string

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervals"></a>

```go
func BackupRepeatingTimeIntervals() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultName"></a>

```go
func VaultName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyKubernetesClusterConfig <a name="DataProtectionBackupPolicyKubernetesClusterConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

&dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupRepeatingTimeIntervals: *[]*string,
	DefaultRetentionRule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule,
	Name: *string,
	ResourceGroupName: *string,
	VaultName: *string,
	Id: *string,
	RetentionRule: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#backup_repeating_time_intervals DataProtectionBackupPolicyKubernetesCluster#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.defaultRetentionRule">DefaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#resource_group_name DataProtectionBackupPolicyKubernetesCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.vaultName">VaultName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#vault_name DataProtectionBackupPolicyKubernetesCluster#vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#id DataProtectionBackupPolicyKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.retentionRule">RetentionRule</a></code> | <code>interface{}</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#time_zone DataProtectionBackupPolicyKubernetesCluster#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.backupRepeatingTimeIntervals"></a>

```go
BackupRepeatingTimeIntervals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#backup_repeating_time_intervals DataProtectionBackupPolicyKubernetesCluster#backup_repeating_time_intervals}.

---

##### `DefaultRetentionRule`<sup>Required</sup> <a name="DefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.defaultRetentionRule"></a>

```go
DefaultRetentionRule DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#default_retention_rule DataProtectionBackupPolicyKubernetesCluster#default_retention_rule}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#resource_group_name DataProtectionBackupPolicyKubernetesCluster#resource_group_name}.

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.vaultName"></a>

```go
VaultName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#vault_name DataProtectionBackupPolicyKubernetesCluster#vault_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#id DataProtectionBackupPolicyKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionRule`<sup>Optional</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.retentionRule"></a>

```go
RetentionRule interface{}
```

- *Type:* interface{}

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#retention_rule DataProtectionBackupPolicyKubernetesCluster#retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeouts"></a>

```go
Timeouts DataProtectionBackupPolicyKubernetesClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#timeouts DataProtectionBackupPolicyKubernetesCluster#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#time_zone DataProtectionBackupPolicyKubernetesCluster#time_zone}.

---

### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

&dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule {
	LifeCycle: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code>interface{}</code> | life_cycle block. |

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule.property.lifeCycle"></a>

```go
LifeCycle interface{}
```

- *Type:* interface{}

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#life_cycle DataProtectionBackupPolicyKubernetesCluster#life_cycle}

---

### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

&dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle {
	DataStoreType: *string,
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.dataStoreType"></a>

```go
DataStoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}.

---

### DataProtectionBackupPolicyKubernetesClusterRetentionRule <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

&dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule {
	Criteria: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria,
	LifeCycle: interface{},
	Name: *string,
	Priority: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code>interface{}</code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#priority DataProtectionBackupPolicyKubernetesCluster#priority}. |

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.criteria"></a>

```go
Criteria DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#criteria DataProtectionBackupPolicyKubernetesCluster#criteria}

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.lifeCycle"></a>

```go
LifeCycle interface{}
```

- *Type:* interface{}

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#life_cycle DataProtectionBackupPolicyKubernetesCluster#life_cycle}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#priority DataProtectionBackupPolicyKubernetesCluster#priority}.

---

### DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

&dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria {
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
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#absolute_criteria DataProtectionBackupPolicyKubernetesCluster#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#days_of_week DataProtectionBackupPolicyKubernetesCluster#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.monthsOfYear">MonthsOfYear</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#months_of_year DataProtectionBackupPolicyKubernetesCluster#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#scheduled_backup_times DataProtectionBackupPolicyKubernetesCluster#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#weeks_of_month DataProtectionBackupPolicyKubernetesCluster#weeks_of_month}. |

---

##### `AbsoluteCriteria`<sup>Optional</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.absoluteCriteria"></a>

```go
AbsoluteCriteria *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#absolute_criteria DataProtectionBackupPolicyKubernetesCluster#absolute_criteria}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#days_of_week DataProtectionBackupPolicyKubernetesCluster#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.monthsOfYear"></a>

```go
MonthsOfYear *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#months_of_year DataProtectionBackupPolicyKubernetesCluster#months_of_year}.

---

##### `ScheduledBackupTimes`<sup>Optional</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```go
ScheduledBackupTimes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#scheduled_backup_times DataProtectionBackupPolicyKubernetesCluster#scheduled_backup_times}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#weeks_of_month DataProtectionBackupPolicyKubernetesCluster#weeks_of_month}.

---

### DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

&dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle {
	DataStoreType: *string,
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.dataStoreType"></a>

```go
DataStoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}.

---

### DataProtectionBackupPolicyKubernetesClusterTimeouts <a name="DataProtectionBackupPolicyKubernetesClusterTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

&dataprotectionbackuppolicykubernetescluster.DataProtectionBackupPolicyKubernetesClusterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#create DataProtectionBackupPolicyKubernetesCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#delete DataProtectionBackupPolicyKubernetesCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#read DataProtectionBackupPolicyKubernetesCluster#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#create DataProtectionBackupPolicyKubernetesCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#delete DataProtectionBackupPolicyKubernetesCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#read DataProtectionBackupPolicyKubernetesCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.NewDataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.get"></a>

```go
func Get(index *f64) DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.NewDataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```go
func DataStoreTypeInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```go
func DataStoreType() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.NewDataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.putLifeCycle"></a>

```go
func PutLifeCycle(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycle"></a>

```go
func LifeCycle() DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycleInput"></a>

```go
func LifeCycleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.NewDataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">ResetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">ResetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsoluteCriteria` <a name="ResetAbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```go
func ResetAbsoluteCriteria()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```go
func ResetMonthsOfYear()
```

##### `ResetScheduledBackupTimes` <a name="ResetScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```go
func ResetScheduledBackupTimes()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">AbsoluteCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">ScheduledBackupTimesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteCriteriaInput`<sup>Optional</sup> <a name="AbsoluteCriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```go
func AbsoluteCriteriaInput() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```go
func MonthsOfYearInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScheduledBackupTimesInput`<sup>Optional</sup> <a name="ScheduledBackupTimesInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```go
func ScheduledBackupTimesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*string
```

- *Type:* *[]*string

---

##### `AbsoluteCriteria`<sup>Required</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```go
func AbsoluteCriteria() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```go
func MonthsOfYear() *[]*string
```

- *Type:* *[]*string

---

##### `ScheduledBackupTimes`<sup>Required</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```go
func ScheduledBackupTimes() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.NewDataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.get"></a>

```go
func Get(index *f64) DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.NewDataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```go
func DataStoreTypeInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```go
func DataStoreType() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleList <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.NewDataProtectionBackupPolicyKubernetesClusterRetentionRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataProtectionBackupPolicyKubernetesClusterRetentionRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.get"></a>

```go
func Get(index *f64) DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.NewDataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria"></a>

```go
func PutCriteria(value DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

---

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putLifeCycle"></a>

```go
func PutLifeCycle(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteria"></a>

```go
func Criteria() DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference</a>

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycle"></a>

```go
func LifeCycle() DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteriaInput"></a>

```go
func CriteriaInput() DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycleInput"></a>

```go
func LifeCycleInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataprotectionbackuppolicykubernetescluster"

dataprotectionbackuppolicykubernetescluster.NewDataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



