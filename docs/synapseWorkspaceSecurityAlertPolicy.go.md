# `synapseWorkspaceSecurityAlertPolicy` Submodule <a name="`synapseWorkspaceSecurityAlertPolicy` Submodule" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceSecurityAlertPolicy <a name="SynapseWorkspaceSecurityAlertPolicy" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy azurerm_synapse_workspace_security_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseworkspacesecurityalertpolicy"

synapseworkspacesecurityalertpolicy.NewSynapseWorkspaceSecurityAlertPolicy(scope Construct, id *string, config SynapseWorkspaceSecurityAlertPolicyConfig) SynapseWorkspaceSecurityAlertPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig">SynapseWorkspaceSecurityAlertPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig">SynapseWorkspaceSecurityAlertPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetDisabledAlerts">ResetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAccountAdminsEnabled">ResetEmailAccountAdminsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageEndpoint">ResetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts"></a>

```go
func PutTimeouts(value SynapseWorkspaceSecurityAlertPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>

---

##### `ResetDisabledAlerts` <a name="ResetDisabledAlerts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetDisabledAlerts"></a>

```go
func ResetDisabledAlerts()
```

##### `ResetEmailAccountAdminsEnabled` <a name="ResetEmailAccountAdminsEnabled" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAccountAdminsEnabled"></a>

```go
func ResetEmailAccountAdminsEnabled()
```

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetRetentionDays"></a>

```go
func ResetRetentionDays()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageAccountAccessKey"></a>

```go
func ResetStorageAccountAccessKey()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageEndpoint"></a>

```go
func ResetStorageEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseWorkspaceSecurityAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseworkspacesecurityalertpolicy"

synapseworkspacesecurityalertpolicy.SynapseWorkspaceSecurityAlertPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseworkspacesecurityalertpolicy"

synapseworkspacesecurityalertpolicy.SynapseWorkspaceSecurityAlertPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseworkspacesecurityalertpolicy"

synapseworkspacesecurityalertpolicy.SynapseWorkspaceSecurityAlertPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseworkspacesecurityalertpolicy"

synapseworkspacesecurityalertpolicy.SynapseWorkspaceSecurityAlertPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SynapseWorkspaceSecurityAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SynapseWorkspaceSecurityAlertPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SynapseWorkspaceSecurityAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SynapseWorkspaceSecurityAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference">SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlertsInput">DisabledAlertsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabledInput">EmailAccountAdminsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyStateInput">PolicyStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceIdInput">SynapseWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlerts">DisabledAlerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabled">EmailAccountAdminsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyState">PolicyState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeouts"></a>

```go
func Timeouts() SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference">SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference</a>

---

##### `DisabledAlertsInput`<sup>Optional</sup> <a name="DisabledAlertsInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlertsInput"></a>

```go
func DisabledAlertsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAccountAdminsEnabledInput`<sup>Optional</sup> <a name="EmailAccountAdminsEnabledInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabledInput"></a>

```go
func EmailAccountAdminsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyStateInput`<sup>Optional</sup> <a name="PolicyStateInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyStateInput"></a>

```go
func PolicyStateInput() *string
```

- *Type:* *string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDaysInput"></a>

```go
func RetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKeyInput"></a>

```go
func StorageAccountAccessKeyInput() *string
```

- *Type:* *string

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpointInput"></a>

```go
func StorageEndpointInput() *string
```

- *Type:* *string

---

##### `SynapseWorkspaceIdInput`<sup>Optional</sup> <a name="SynapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceIdInput"></a>

```go
func SynapseWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledAlerts`<sup>Required</sup> <a name="DisabledAlerts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlerts"></a>

```go
func DisabledAlerts() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAccountAdminsEnabled`<sup>Required</sup> <a name="EmailAccountAdminsEnabled" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabled"></a>

```go
func EmailAccountAdminsEnabled() interface{}
```

- *Type:* interface{}

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyState`<sup>Required</sup> <a name="PolicyState" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyState"></a>

```go
func PolicyState() *string
```

- *Type:* *string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDays"></a>

```go
func RetentionDays() *f64
```

- *Type:* *f64

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKey"></a>

```go
func StorageAccountAccessKey() *string
```

- *Type:* *string

---

##### `StorageEndpoint`<sup>Required</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpoint"></a>

```go
func StorageEndpoint() *string
```

- *Type:* *string

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceId"></a>

```go
func SynapseWorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceSecurityAlertPolicyConfig <a name="SynapseWorkspaceSecurityAlertPolicyConfig" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseworkspacesecurityalertpolicy"

&synapseworkspacesecurityalertpolicy.SynapseWorkspaceSecurityAlertPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyState: *string,
	SynapseWorkspaceId: *string,
	DisabledAlerts: *[]*string,
	EmailAccountAdminsEnabled: interface{},
	EmailAddresses: *[]*string,
	Id: *string,
	RetentionDays: *f64,
	StorageAccountAccessKey: *string,
	StorageEndpoint: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.policyState">PolicyState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#policy_state SynapseWorkspaceSecurityAlertPolicy#policy_state}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#synapse_workspace_id SynapseWorkspaceSecurityAlertPolicy#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.disabledAlerts">DisabledAlerts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#disabled_alerts SynapseWorkspaceSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled">EmailAccountAdminsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#email_account_admins_enabled SynapseWorkspaceSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#email_addresses SynapseWorkspaceSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#id SynapseWorkspaceSecurityAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.retentionDays">RetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#retention_days SynapseWorkspaceSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#storage_account_access_key SynapseWorkspaceSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#storage_endpoint SynapseWorkspaceSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyState`<sup>Required</sup> <a name="PolicyState" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.policyState"></a>

```go
PolicyState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#policy_state SynapseWorkspaceSecurityAlertPolicy#policy_state}.

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.synapseWorkspaceId"></a>

```go
SynapseWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#synapse_workspace_id SynapseWorkspaceSecurityAlertPolicy#synapse_workspace_id}.

---

##### `DisabledAlerts`<sup>Optional</sup> <a name="DisabledAlerts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.disabledAlerts"></a>

```go
DisabledAlerts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#disabled_alerts SynapseWorkspaceSecurityAlertPolicy#disabled_alerts}.

---

##### `EmailAccountAdminsEnabled`<sup>Optional</sup> <a name="EmailAccountAdminsEnabled" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled"></a>

```go
EmailAccountAdminsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#email_account_admins_enabled SynapseWorkspaceSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#email_addresses SynapseWorkspaceSecurityAlertPolicy#email_addresses}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#id SynapseWorkspaceSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.retentionDays"></a>

```go
RetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#retention_days SynapseWorkspaceSecurityAlertPolicy#retention_days}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageAccountAccessKey"></a>

```go
StorageAccountAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#storage_account_access_key SynapseWorkspaceSecurityAlertPolicy#storage_account_access_key}.

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageEndpoint"></a>

```go
StorageEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#storage_endpoint SynapseWorkspaceSecurityAlertPolicy#storage_endpoint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.timeouts"></a>

```go
Timeouts SynapseWorkspaceSecurityAlertPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#timeouts SynapseWorkspaceSecurityAlertPolicy#timeouts}

---

### SynapseWorkspaceSecurityAlertPolicyTimeouts <a name="SynapseWorkspaceSecurityAlertPolicyTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseworkspacesecurityalertpolicy"

&synapseworkspacesecurityalertpolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#create SynapseWorkspaceSecurityAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#delete SynapseWorkspaceSecurityAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#read SynapseWorkspaceSecurityAlertPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#update SynapseWorkspaceSecurityAlertPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#create SynapseWorkspaceSecurityAlertPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#delete SynapseWorkspaceSecurityAlertPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#read SynapseWorkspaceSecurityAlertPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/synapse_workspace_security_alert_policy#update SynapseWorkspaceSecurityAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference <a name="SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseworkspacesecurityalertpolicy"

synapseworkspacesecurityalertpolicy.NewSynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



