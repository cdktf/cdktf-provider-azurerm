# `synapseSqlPoolExtendedAuditingPolicy` Submodule <a name="`synapseSqlPoolExtendedAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSqlPoolExtendedAuditingPolicy <a name="SynapseSqlPoolExtendedAuditingPolicy" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy azurerm_synapse_sql_pool_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapsesqlpoolextendedauditingpolicy"

synapsesqlpoolextendedauditingpolicy.NewSynapseSqlPoolExtendedAuditingPolicy(scope Construct, id *string, config SynapseSqlPoolExtendedAuditingPolicyConfig) SynapseSqlPoolExtendedAuditingPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig">SynapseSqlPoolExtendedAuditingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig">SynapseSqlPoolExtendedAuditingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetLogMonitoringEnabled">ResetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">ResetStorageAccountAccessKeyIsSecondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageEndpoint">ResetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts"></a>

```go
func PutTimeouts(value SynapseSqlPoolExtendedAuditingPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLogMonitoringEnabled` <a name="ResetLogMonitoringEnabled" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```go
func ResetLogMonitoringEnabled()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetRetentionInDays"></a>

```go
func ResetRetentionInDays()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```go
func ResetStorageAccountAccessKey()
```

##### `ResetStorageAccountAccessKeyIsSecondary` <a name="ResetStorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```go
func ResetStorageAccountAccessKeyIsSecondary()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetStorageEndpoint"></a>

```go
func ResetStorageEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseSqlPoolExtendedAuditingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapsesqlpoolextendedauditingpolicy"

synapsesqlpoolextendedauditingpolicy.SynapseSqlPoolExtendedAuditingPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapsesqlpoolextendedauditingpolicy"

synapsesqlpoolextendedauditingpolicy.SynapseSqlPoolExtendedAuditingPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapsesqlpoolextendedauditingpolicy"

synapsesqlpoolextendedauditingpolicy.SynapseSqlPoolExtendedAuditingPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapsesqlpoolextendedauditingpolicy"

synapsesqlpoolextendedauditingpolicy.SynapseSqlPoolExtendedAuditingPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SynapseSqlPoolExtendedAuditingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SynapseSqlPoolExtendedAuditingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SynapseSqlPoolExtendedAuditingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SynapseSqlPoolExtendedAuditingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference">SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabledInput">LogMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolIdInput">SqlPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">StorageAccountAccessKeyIsSecondaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabled">LogMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolId">SqlPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">StorageAccountAccessKeyIsSecondary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeouts"></a>

```go
func Timeouts() SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference">SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogMonitoringEnabledInput`<sup>Optional</sup> <a name="LogMonitoringEnabledInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```go
func LogMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```go
func RetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `SqlPoolIdInput`<sup>Optional</sup> <a name="SqlPoolIdInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolIdInput"></a>

```go
func SqlPoolIdInput() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```go
func StorageAccountAccessKeyInput() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKeyIsSecondaryInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyIsSecondaryInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```go
func StorageAccountAccessKeyIsSecondaryInput() interface{}
```

- *Type:* interface{}

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpointInput"></a>

```go
func StorageEndpointInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogMonitoringEnabled`<sup>Required</sup> <a name="LogMonitoringEnabled" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```go
func LogMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `SqlPoolId`<sup>Required</sup> <a name="SqlPoolId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.sqlPoolId"></a>

```go
func SqlPoolId() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```go
func StorageAccountAccessKey() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKeyIsSecondary`<sup>Required</sup> <a name="StorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```go
func StorageAccountAccessKeyIsSecondary() interface{}
```

- *Type:* interface{}

---

##### `StorageEndpoint`<sup>Required</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.storageEndpoint"></a>

```go
func StorageEndpoint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSqlPoolExtendedAuditingPolicyConfig <a name="SynapseSqlPoolExtendedAuditingPolicyConfig" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapsesqlpoolextendedauditingpolicy"

&synapsesqlpoolextendedauditingpolicy.SynapseSqlPoolExtendedAuditingPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SqlPoolId: *string,
	Id: *string,
	LogMonitoringEnabled: interface{},
	RetentionInDays: *f64,
	StorageAccountAccessKey: *string,
	StorageAccountAccessKeyIsSecondary: interface{},
	StorageEndpoint: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.sqlPoolId">SqlPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#id SynapseSqlPoolExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.logMonitoringEnabled">LogMonitoringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">StorageAccountAccessKeyIsSecondary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SqlPoolId`<sup>Required</sup> <a name="SqlPoolId" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.sqlPoolId"></a>

```go
SqlPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#sql_pool_id SynapseSqlPoolExtendedAuditingPolicy#sql_pool_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#id SynapseSqlPoolExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogMonitoringEnabled`<sup>Optional</sup> <a name="LogMonitoringEnabled" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```go
LogMonitoringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#log_monitoring_enabled SynapseSqlPoolExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```go
RetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#retention_in_days SynapseSqlPoolExtendedAuditingPolicy#retention_in_days}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```go
StorageAccountAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key}.

---

##### `StorageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="StorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```go
StorageAccountAccessKeyIsSecondary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_account_access_key_is_secondary SynapseSqlPoolExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```go
StorageEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#storage_endpoint SynapseSqlPoolExtendedAuditingPolicy#storage_endpoint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyConfig.property.timeouts"></a>

```go
Timeouts SynapseSqlPoolExtendedAuditingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts">SynapseSqlPoolExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#timeouts SynapseSqlPoolExtendedAuditingPolicy#timeouts}

---

### SynapseSqlPoolExtendedAuditingPolicyTimeouts <a name="SynapseSqlPoolExtendedAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapsesqlpoolextendedauditingpolicy"

&synapsesqlpoolextendedauditingpolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#create SynapseSqlPoolExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#delete SynapseSqlPoolExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#read SynapseSqlPoolExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#update SynapseSqlPoolExtendedAuditingPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#create SynapseSqlPoolExtendedAuditingPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#delete SynapseSqlPoolExtendedAuditingPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#read SynapseSqlPoolExtendedAuditingPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/synapse_sql_pool_extended_auditing_policy#update SynapseSqlPoolExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference <a name="SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapsesqlpoolextendedauditingpolicy"

synapsesqlpoolextendedauditingpolicy.NewSynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseSqlPoolExtendedAuditingPolicy.SynapseSqlPoolExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



