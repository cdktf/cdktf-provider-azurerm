# `mssqlServerMicrosoftSupportAuditingPolicy` Submodule <a name="`mssqlServerMicrosoftSupportAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerMicrosoftSupportAuditingPolicy <a name="MssqlServerMicrosoftSupportAuditingPolicy" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy azurerm_mssql_server_microsoft_support_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlservermicrosoftsupportauditingpolicy"

mssqlservermicrosoftsupportauditingpolicy.NewMssqlServerMicrosoftSupportAuditingPolicy(scope Construct, id *string, config MssqlServerMicrosoftSupportAuditingPolicyConfig) MssqlServerMicrosoftSupportAuditingPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig">MssqlServerMicrosoftSupportAuditingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig">MssqlServerMicrosoftSupportAuditingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetBlobStorageEndpoint">ResetBlobStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetLogMonitoringEnabled">ResetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountSubscriptionId">ResetStorageAccountSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts"></a>

```go
func PutTimeouts(value MssqlServerMicrosoftSupportAuditingPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a>

---

##### `ResetBlobStorageEndpoint` <a name="ResetBlobStorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetBlobStorageEndpoint"></a>

```go
func ResetBlobStorageEndpoint()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLogMonitoringEnabled` <a name="ResetLogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetLogMonitoringEnabled"></a>

```go
func ResetLogMonitoringEnabled()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountAccessKey"></a>

```go
func ResetStorageAccountAccessKey()
```

##### `ResetStorageAccountSubscriptionId` <a name="ResetStorageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetStorageAccountSubscriptionId"></a>

```go
func ResetStorageAccountSubscriptionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlServerMicrosoftSupportAuditingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlservermicrosoftsupportauditingpolicy"

mssqlservermicrosoftsupportauditingpolicy.MssqlServerMicrosoftSupportAuditingPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlservermicrosoftsupportauditingpolicy"

mssqlservermicrosoftsupportauditingpolicy.MssqlServerMicrosoftSupportAuditingPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlservermicrosoftsupportauditingpolicy"

mssqlservermicrosoftsupportauditingpolicy.MssqlServerMicrosoftSupportAuditingPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlservermicrosoftsupportauditingpolicy"

mssqlservermicrosoftsupportauditingpolicy.MssqlServerMicrosoftSupportAuditingPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MssqlServerMicrosoftSupportAuditingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MssqlServerMicrosoftSupportAuditingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MssqlServerMicrosoftSupportAuditingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MssqlServerMicrosoftSupportAuditingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference">MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpointInput">BlobStorageEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabledInput">LogMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionIdInput">StorageAccountSubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpoint">BlobStorageEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabled">LogMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionId">StorageAccountSubscriptionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeouts"></a>

```go
func Timeouts() MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference">MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference</a>

---

##### `BlobStorageEndpointInput`<sup>Optional</sup> <a name="BlobStorageEndpointInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpointInput"></a>

```go
func BlobStorageEndpointInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogMonitoringEnabledInput`<sup>Optional</sup> <a name="LogMonitoringEnabledInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabledInput"></a>

```go
func LogMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```go
func StorageAccountAccessKeyInput() *string
```

- *Type:* *string

---

##### `StorageAccountSubscriptionIdInput`<sup>Optional</sup> <a name="StorageAccountSubscriptionIdInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionIdInput"></a>

```go
func StorageAccountSubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BlobStorageEndpoint`<sup>Required</sup> <a name="BlobStorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.blobStorageEndpoint"></a>

```go
func BlobStorageEndpoint() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogMonitoringEnabled`<sup>Required</sup> <a name="LogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.logMonitoringEnabled"></a>

```go
func LogMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountAccessKey"></a>

```go
func StorageAccountAccessKey() *string
```

- *Type:* *string

---

##### `StorageAccountSubscriptionId`<sup>Required</sup> <a name="StorageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.storageAccountSubscriptionId"></a>

```go
func StorageAccountSubscriptionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerMicrosoftSupportAuditingPolicyConfig <a name="MssqlServerMicrosoftSupportAuditingPolicyConfig" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlservermicrosoftsupportauditingpolicy"

&mssqlservermicrosoftsupportauditingpolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServerId: *string,
	BlobStorageEndpoint: *string,
	Enabled: interface{},
	Id: *string,
	LogMonitoringEnabled: interface{},
	StorageAccountAccessKey: *string,
	StorageAccountSubscriptionId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.serverId">ServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#server_id MssqlServerMicrosoftSupportAuditingPolicy#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.blobStorageEndpoint">BlobStorageEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#blob_storage_endpoint MssqlServerMicrosoftSupportAuditingPolicy#blob_storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#enabled MssqlServerMicrosoftSupportAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#id MssqlServerMicrosoftSupportAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.logMonitoringEnabled">LogMonitoringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#log_monitoring_enabled MssqlServerMicrosoftSupportAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_access_key MssqlServerMicrosoftSupportAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountSubscriptionId">StorageAccountSubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_subscription_id MssqlServerMicrosoftSupportAuditingPolicy#storage_account_subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#server_id MssqlServerMicrosoftSupportAuditingPolicy#server_id}.

---

##### `BlobStorageEndpoint`<sup>Optional</sup> <a name="BlobStorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.blobStorageEndpoint"></a>

```go
BlobStorageEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#blob_storage_endpoint MssqlServerMicrosoftSupportAuditingPolicy#blob_storage_endpoint}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#enabled MssqlServerMicrosoftSupportAuditingPolicy#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#id MssqlServerMicrosoftSupportAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogMonitoringEnabled`<sup>Optional</sup> <a name="LogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```go
LogMonitoringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#log_monitoring_enabled MssqlServerMicrosoftSupportAuditingPolicy#log_monitoring_enabled}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```go
StorageAccountAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_access_key MssqlServerMicrosoftSupportAuditingPolicy#storage_account_access_key}.

---

##### `StorageAccountSubscriptionId`<sup>Optional</sup> <a name="StorageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.storageAccountSubscriptionId"></a>

```go
StorageAccountSubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#storage_account_subscription_id MssqlServerMicrosoftSupportAuditingPolicy#storage_account_subscription_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyConfig.property.timeouts"></a>

```go
Timeouts MssqlServerMicrosoftSupportAuditingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts">MssqlServerMicrosoftSupportAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#timeouts MssqlServerMicrosoftSupportAuditingPolicy#timeouts}

---

### MssqlServerMicrosoftSupportAuditingPolicyTimeouts <a name="MssqlServerMicrosoftSupportAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlservermicrosoftsupportauditingpolicy"

&mssqlservermicrosoftsupportauditingpolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#create MssqlServerMicrosoftSupportAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#delete MssqlServerMicrosoftSupportAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#read MssqlServerMicrosoftSupportAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#update MssqlServerMicrosoftSupportAuditingPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#create MssqlServerMicrosoftSupportAuditingPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#delete MssqlServerMicrosoftSupportAuditingPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#read MssqlServerMicrosoftSupportAuditingPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.25.0/docs/resources/mssql_server_microsoft_support_auditing_policy#update MssqlServerMicrosoftSupportAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference <a name="MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/mssqlservermicrosoftsupportauditingpolicy"

mssqlservermicrosoftsupportauditingpolicy.NewMssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlServerMicrosoftSupportAuditingPolicy.MssqlServerMicrosoftSupportAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



