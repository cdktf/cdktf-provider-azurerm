# `sentinelLogAnalyticsWorkspaceOnboarding` Submodule <a name="`sentinelLogAnalyticsWorkspaceOnboarding` Submodule" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelLogAnalyticsWorkspaceOnboarding <a name="SentinelLogAnalyticsWorkspaceOnboarding" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding azurerm_sentinel_log_analytics_workspace_onboarding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentinelloganalyticsworkspaceonboarding"

sentinelloganalyticsworkspaceonboarding.NewSentinelLogAnalyticsWorkspaceOnboarding(scope Construct, id *string, config SentinelLogAnalyticsWorkspaceOnboardingConfig) SentinelLogAnalyticsWorkspaceOnboarding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig">SentinelLogAnalyticsWorkspaceOnboardingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig">SentinelLogAnalyticsWorkspaceOnboardingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetCustomerManagedKeyEnabled">ResetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceName">ResetWorkspaceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts"></a>

```go
func PutTimeouts(value SentinelLogAnalyticsWorkspaceOnboardingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

---

##### `ResetCustomerManagedKeyEnabled` <a name="ResetCustomerManagedKeyEnabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetCustomerManagedKeyEnabled"></a>

```go
func ResetCustomerManagedKeyEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

##### `ResetWorkspaceName` <a name="ResetWorkspaceName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.resetWorkspaceName"></a>

```go
func ResetWorkspaceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelLogAnalyticsWorkspaceOnboarding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentinelloganalyticsworkspaceonboarding"

sentinelloganalyticsworkspaceonboarding.SentinelLogAnalyticsWorkspaceOnboarding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentinelloganalyticsworkspaceonboarding"

sentinelloganalyticsworkspaceonboarding.SentinelLogAnalyticsWorkspaceOnboarding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentinelloganalyticsworkspaceonboarding"

sentinelloganalyticsworkspaceonboarding.SentinelLogAnalyticsWorkspaceOnboarding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentinelloganalyticsworkspaceonboarding"

sentinelloganalyticsworkspaceonboarding.SentinelLogAnalyticsWorkspaceOnboarding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SentinelLogAnalyticsWorkspaceOnboarding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SentinelLogAnalyticsWorkspaceOnboarding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SentinelLogAnalyticsWorkspaceOnboarding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SentinelLogAnalyticsWorkspaceOnboarding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference">SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabledInput">CustomerManagedKeyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceNameInput">WorkspaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeouts"></a>

```go
func Timeouts() SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference">SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference</a>

---

##### `CustomerManagedKeyEnabledInput`<sup>Optional</sup> <a name="CustomerManagedKeyEnabledInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabledInput"></a>

```go
func CustomerManagedKeyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceNameInput`<sup>Optional</sup> <a name="WorkspaceNameInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceNameInput"></a>

```go
func WorkspaceNameInput() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.customerManagedKeyEnabled"></a>

```go
func CustomerManagedKeyEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.workspaceName"></a>

```go
func WorkspaceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboarding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelLogAnalyticsWorkspaceOnboardingConfig <a name="SentinelLogAnalyticsWorkspaceOnboardingConfig" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentinelloganalyticsworkspaceonboarding"

&sentinelloganalyticsworkspaceonboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomerManagedKeyEnabled: interface{},
	Id: *string,
	ResourceGroupName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts,
	WorkspaceId: *string,
	WorkspaceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerManagedKeyEnabled`<sup>Optional</sup> <a name="CustomerManagedKeyEnabled" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.customerManagedKeyEnabled"></a>

```go
CustomerManagedKeyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#customer_managed_key_enabled SentinelLogAnalyticsWorkspaceOnboarding#customer_managed_key_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#id SentinelLogAnalyticsWorkspaceOnboarding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#resource_group_name SentinelLogAnalyticsWorkspaceOnboarding#resource_group_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.timeouts"></a>

```go
Timeouts SentinelLogAnalyticsWorkspaceOnboardingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts">SentinelLogAnalyticsWorkspaceOnboardingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#timeouts SentinelLogAnalyticsWorkspaceOnboarding#timeouts}

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_id SentinelLogAnalyticsWorkspaceOnboarding#workspace_id}.

---

##### `WorkspaceName`<sup>Optional</sup> <a name="WorkspaceName" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingConfig.property.workspaceName"></a>

```go
WorkspaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#workspace_name SentinelLogAnalyticsWorkspaceOnboarding#workspace_name}.

---

### SentinelLogAnalyticsWorkspaceOnboardingTimeouts <a name="SentinelLogAnalyticsWorkspaceOnboardingTimeouts" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentinelloganalyticsworkspaceonboarding"

&sentinelloganalyticsworkspaceonboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#create SentinelLogAnalyticsWorkspaceOnboarding#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#delete SentinelLogAnalyticsWorkspaceOnboarding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#read SentinelLogAnalyticsWorkspaceOnboarding#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#create SentinelLogAnalyticsWorkspaceOnboarding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#delete SentinelLogAnalyticsWorkspaceOnboarding#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/sentinel_log_analytics_workspace_onboarding#read SentinelLogAnalyticsWorkspaceOnboarding#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference <a name="SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/sentinelloganalyticsworkspaceonboarding"

sentinelloganalyticsworkspaceonboarding.NewSentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelLogAnalyticsWorkspaceOnboarding.SentinelLogAnalyticsWorkspaceOnboardingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



