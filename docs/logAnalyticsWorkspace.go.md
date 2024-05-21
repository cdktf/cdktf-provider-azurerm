# `logAnalyticsWorkspace` Submodule <a name="`logAnalyticsWorkspace` Submodule" id="@cdktf/provider-azurerm.logAnalyticsWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsWorkspace <a name="LogAnalyticsWorkspace" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace azurerm_log_analytics_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsworkspace"

loganalyticsworkspace.NewLogAnalyticsWorkspace(scope Construct, id *string, config LogAnalyticsWorkspaceConfig) LogAnalyticsWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig">LogAnalyticsWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig">LogAnalyticsWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetAllowResourceOnlyPermissions">ResetAllowResourceOnlyPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetCmkForQueryForced">ResetCmkForQueryForced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetDailyQuotaGb">ResetDailyQuotaGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetDataCollectionRuleId">ResetDataCollectionRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetImmediateDataPurgeOn30DaysEnabled">ResetImmediateDataPurgeOn30DaysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetIngestionEnabled">ResetInternetIngestionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetQueryEnabled">ResetInternetQueryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetLocalAuthenticationDisabled">ResetLocalAuthenticationDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetReservationCapacityInGbPerDay">ResetReservationCapacityInGbPerDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putIdentity"></a>

```go
func PutIdentity(value LogAnalyticsWorkspaceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsWorkspaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a>

---

##### `ResetAllowResourceOnlyPermissions` <a name="ResetAllowResourceOnlyPermissions" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetAllowResourceOnlyPermissions"></a>

```go
func ResetAllowResourceOnlyPermissions()
```

##### `ResetCmkForQueryForced` <a name="ResetCmkForQueryForced" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetCmkForQueryForced"></a>

```go
func ResetCmkForQueryForced()
```

##### `ResetDailyQuotaGb` <a name="ResetDailyQuotaGb" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetDailyQuotaGb"></a>

```go
func ResetDailyQuotaGb()
```

##### `ResetDataCollectionRuleId` <a name="ResetDataCollectionRuleId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetDataCollectionRuleId"></a>

```go
func ResetDataCollectionRuleId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetImmediateDataPurgeOn30DaysEnabled` <a name="ResetImmediateDataPurgeOn30DaysEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetImmediateDataPurgeOn30DaysEnabled"></a>

```go
func ResetImmediateDataPurgeOn30DaysEnabled()
```

##### `ResetInternetIngestionEnabled` <a name="ResetInternetIngestionEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetIngestionEnabled"></a>

```go
func ResetInternetIngestionEnabled()
```

##### `ResetInternetQueryEnabled` <a name="ResetInternetQueryEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetQueryEnabled"></a>

```go
func ResetInternetQueryEnabled()
```

##### `ResetLocalAuthenticationDisabled` <a name="ResetLocalAuthenticationDisabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetLocalAuthenticationDisabled"></a>

```go
func ResetLocalAuthenticationDisabled()
```

##### `ResetReservationCapacityInGbPerDay` <a name="ResetReservationCapacityInGbPerDay" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetReservationCapacityInGbPerDay"></a>

```go
func ResetReservationCapacityInGbPerDay()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetRetentionInDays"></a>

```go
func ResetRetentionInDays()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetSku"></a>

```go
func ResetSku()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsworkspace"

loganalyticsworkspace.LogAnalyticsWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsworkspace"

loganalyticsworkspace.LogAnalyticsWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsworkspace"

loganalyticsworkspace.LogAnalyticsWorkspace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsworkspace"

loganalyticsworkspace.LogAnalyticsWorkspace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogAnalyticsWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogAnalyticsWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogAnalyticsWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference">LogAnalyticsWorkspaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.primarySharedKey">PrimarySharedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.secondarySharedKey">SecondarySharedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference">LogAnalyticsWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissionsInput">AllowResourceOnlyPermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForcedInput">CmkForQueryForcedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGbInput">DailyQuotaGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dataCollectionRuleIdInput">DataCollectionRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.immediateDataPurgeOn30DaysEnabledInput">ImmediateDataPurgeOn30DaysEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabledInput">InternetIngestionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabledInput">InternetQueryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabledInput">LocalAuthenticationDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDayInput">ReservationCapacityInGbPerDayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissions">AllowResourceOnlyPermissions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForced">CmkForQueryForced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGb">DailyQuotaGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dataCollectionRuleId">DataCollectionRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.immediateDataPurgeOn30DaysEnabled">ImmediateDataPurgeOn30DaysEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabled">InternetIngestionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabled">InternetQueryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabled">LocalAuthenticationDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDay">ReservationCapacityInGbPerDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.identity"></a>

```go
func Identity() LogAnalyticsWorkspaceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference">LogAnalyticsWorkspaceIdentityOutputReference</a>

---

##### `PrimarySharedKey`<sup>Required</sup> <a name="PrimarySharedKey" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.primarySharedKey"></a>

```go
func PrimarySharedKey() *string
```

- *Type:* *string

---

##### `SecondarySharedKey`<sup>Required</sup> <a name="SecondarySharedKey" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.secondarySharedKey"></a>

```go
func SecondarySharedKey() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference">LogAnalyticsWorkspaceTimeoutsOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `AllowResourceOnlyPermissionsInput`<sup>Optional</sup> <a name="AllowResourceOnlyPermissionsInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissionsInput"></a>

```go
func AllowResourceOnlyPermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `CmkForQueryForcedInput`<sup>Optional</sup> <a name="CmkForQueryForcedInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForcedInput"></a>

```go
func CmkForQueryForcedInput() interface{}
```

- *Type:* interface{}

---

##### `DailyQuotaGbInput`<sup>Optional</sup> <a name="DailyQuotaGbInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGbInput"></a>

```go
func DailyQuotaGbInput() *f64
```

- *Type:* *f64

---

##### `DataCollectionRuleIdInput`<sup>Optional</sup> <a name="DataCollectionRuleIdInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dataCollectionRuleIdInput"></a>

```go
func DataCollectionRuleIdInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.identityInput"></a>

```go
func IdentityInput() LogAnalyticsWorkspaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImmediateDataPurgeOn30DaysEnabledInput`<sup>Optional</sup> <a name="ImmediateDataPurgeOn30DaysEnabledInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.immediateDataPurgeOn30DaysEnabledInput"></a>

```go
func ImmediateDataPurgeOn30DaysEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `InternetIngestionEnabledInput`<sup>Optional</sup> <a name="InternetIngestionEnabledInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabledInput"></a>

```go
func InternetIngestionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `InternetQueryEnabledInput`<sup>Optional</sup> <a name="InternetQueryEnabledInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabledInput"></a>

```go
func InternetQueryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocalAuthenticationDisabledInput`<sup>Optional</sup> <a name="LocalAuthenticationDisabledInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabledInput"></a>

```go
func LocalAuthenticationDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReservationCapacityInGbPerDayInput`<sup>Optional</sup> <a name="ReservationCapacityInGbPerDayInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDayInput"></a>

```go
func ReservationCapacityInGbPerDayInput() *f64
```

- *Type:* *f64

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDaysInput"></a>

```go
func RetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowResourceOnlyPermissions`<sup>Required</sup> <a name="AllowResourceOnlyPermissions" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissions"></a>

```go
func AllowResourceOnlyPermissions() interface{}
```

- *Type:* interface{}

---

##### `CmkForQueryForced`<sup>Required</sup> <a name="CmkForQueryForced" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForced"></a>

```go
func CmkForQueryForced() interface{}
```

- *Type:* interface{}

---

##### `DailyQuotaGb`<sup>Required</sup> <a name="DailyQuotaGb" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGb"></a>

```go
func DailyQuotaGb() *f64
```

- *Type:* *f64

---

##### `DataCollectionRuleId`<sup>Required</sup> <a name="DataCollectionRuleId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dataCollectionRuleId"></a>

```go
func DataCollectionRuleId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImmediateDataPurgeOn30DaysEnabled`<sup>Required</sup> <a name="ImmediateDataPurgeOn30DaysEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.immediateDataPurgeOn30DaysEnabled"></a>

```go
func ImmediateDataPurgeOn30DaysEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternetIngestionEnabled`<sup>Required</sup> <a name="InternetIngestionEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabled"></a>

```go
func InternetIngestionEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternetQueryEnabled`<sup>Required</sup> <a name="InternetQueryEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabled"></a>

```go
func InternetQueryEnabled() interface{}
```

- *Type:* interface{}

---

##### `LocalAuthenticationDisabled`<sup>Required</sup> <a name="LocalAuthenticationDisabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabled"></a>

```go
func LocalAuthenticationDisabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReservationCapacityInGbPerDay`<sup>Required</sup> <a name="ReservationCapacityInGbPerDay" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDay"></a>

```go
func ReservationCapacityInGbPerDay() *f64
```

- *Type:* *f64

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsWorkspaceConfig <a name="LogAnalyticsWorkspaceConfig" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsworkspace"

&loganalyticsworkspace.LogAnalyticsWorkspaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	AllowResourceOnlyPermissions: interface{},
	CmkForQueryForced: interface{},
	DailyQuotaGb: *f64,
	DataCollectionRuleId: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity,
	ImmediateDataPurgeOn30DaysEnabled: interface{},
	InternetIngestionEnabled: interface{},
	InternetQueryEnabled: interface{},
	LocalAuthenticationDisabled: interface{},
	ReservationCapacityInGbPerDay: *f64,
	RetentionInDays: *f64,
	Sku: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#location LogAnalyticsWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#name LogAnalyticsWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#resource_group_name LogAnalyticsWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.allowResourceOnlyPermissions">AllowResourceOnlyPermissions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#allow_resource_only_permissions LogAnalyticsWorkspace#allow_resource_only_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.cmkForQueryForced">CmkForQueryForced</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#cmk_for_query_forced LogAnalyticsWorkspace#cmk_for_query_forced}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dailyQuotaGb">DailyQuotaGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#daily_quota_gb LogAnalyticsWorkspace#daily_quota_gb}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dataCollectionRuleId">DataCollectionRuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#data_collection_rule_id LogAnalyticsWorkspace#data_collection_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#id LogAnalyticsWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.immediateDataPurgeOn30DaysEnabled">ImmediateDataPurgeOn30DaysEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#immediate_data_purge_on_30_days_enabled LogAnalyticsWorkspace#immediate_data_purge_on_30_days_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetIngestionEnabled">InternetIngestionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#internet_ingestion_enabled LogAnalyticsWorkspace#internet_ingestion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetQueryEnabled">InternetQueryEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#internet_query_enabled LogAnalyticsWorkspace#internet_query_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.localAuthenticationDisabled">LocalAuthenticationDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#local_authentication_disabled LogAnalyticsWorkspace#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.reservationCapacityInGbPerDay">ReservationCapacityInGbPerDay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#reservation_capacity_in_gb_per_day LogAnalyticsWorkspace#reservation_capacity_in_gb_per_day}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#retention_in_days LogAnalyticsWorkspace#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#sku LogAnalyticsWorkspace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#tags LogAnalyticsWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#location LogAnalyticsWorkspace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#name LogAnalyticsWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#resource_group_name LogAnalyticsWorkspace#resource_group_name}.

---

##### `AllowResourceOnlyPermissions`<sup>Optional</sup> <a name="AllowResourceOnlyPermissions" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.allowResourceOnlyPermissions"></a>

```go
AllowResourceOnlyPermissions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#allow_resource_only_permissions LogAnalyticsWorkspace#allow_resource_only_permissions}.

---

##### `CmkForQueryForced`<sup>Optional</sup> <a name="CmkForQueryForced" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.cmkForQueryForced"></a>

```go
CmkForQueryForced interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#cmk_for_query_forced LogAnalyticsWorkspace#cmk_for_query_forced}.

---

##### `DailyQuotaGb`<sup>Optional</sup> <a name="DailyQuotaGb" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dailyQuotaGb"></a>

```go
DailyQuotaGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#daily_quota_gb LogAnalyticsWorkspace#daily_quota_gb}.

---

##### `DataCollectionRuleId`<sup>Optional</sup> <a name="DataCollectionRuleId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dataCollectionRuleId"></a>

```go
DataCollectionRuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#data_collection_rule_id LogAnalyticsWorkspace#data_collection_rule_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#id LogAnalyticsWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.identity"></a>

```go
Identity LogAnalyticsWorkspaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#identity LogAnalyticsWorkspace#identity}

---

##### `ImmediateDataPurgeOn30DaysEnabled`<sup>Optional</sup> <a name="ImmediateDataPurgeOn30DaysEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.immediateDataPurgeOn30DaysEnabled"></a>

```go
ImmediateDataPurgeOn30DaysEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#immediate_data_purge_on_30_days_enabled LogAnalyticsWorkspace#immediate_data_purge_on_30_days_enabled}.

---

##### `InternetIngestionEnabled`<sup>Optional</sup> <a name="InternetIngestionEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetIngestionEnabled"></a>

```go
InternetIngestionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#internet_ingestion_enabled LogAnalyticsWorkspace#internet_ingestion_enabled}.

---

##### `InternetQueryEnabled`<sup>Optional</sup> <a name="InternetQueryEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetQueryEnabled"></a>

```go
InternetQueryEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#internet_query_enabled LogAnalyticsWorkspace#internet_query_enabled}.

---

##### `LocalAuthenticationDisabled`<sup>Optional</sup> <a name="LocalAuthenticationDisabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.localAuthenticationDisabled"></a>

```go
LocalAuthenticationDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#local_authentication_disabled LogAnalyticsWorkspace#local_authentication_disabled}.

---

##### `ReservationCapacityInGbPerDay`<sup>Optional</sup> <a name="ReservationCapacityInGbPerDay" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.reservationCapacityInGbPerDay"></a>

```go
ReservationCapacityInGbPerDay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#reservation_capacity_in_gb_per_day LogAnalyticsWorkspace#reservation_capacity_in_gb_per_day}.

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.retentionInDays"></a>

```go
RetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#retention_in_days LogAnalyticsWorkspace#retention_in_days}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#sku LogAnalyticsWorkspace#sku}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#tags LogAnalyticsWorkspace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsWorkspaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#timeouts LogAnalyticsWorkspace#timeouts}

---

### LogAnalyticsWorkspaceIdentity <a name="LogAnalyticsWorkspaceIdentity" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsworkspace"

&loganalyticsworkspace.LogAnalyticsWorkspaceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#type LogAnalyticsWorkspace#type}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#identity_ids LogAnalyticsWorkspace#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#type LogAnalyticsWorkspace#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#identity_ids LogAnalyticsWorkspace#identity_ids}.

---

### LogAnalyticsWorkspaceTimeouts <a name="LogAnalyticsWorkspaceTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsworkspace"

&loganalyticsworkspace.LogAnalyticsWorkspaceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#create LogAnalyticsWorkspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#delete LogAnalyticsWorkspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#read LogAnalyticsWorkspace#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#update LogAnalyticsWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#create LogAnalyticsWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#delete LogAnalyticsWorkspace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#read LogAnalyticsWorkspace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/log_analytics_workspace#update LogAnalyticsWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsWorkspaceIdentityOutputReference <a name="LogAnalyticsWorkspaceIdentityOutputReference" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsworkspace"

loganalyticsworkspace.NewLogAnalyticsWorkspaceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsWorkspaceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() LogAnalyticsWorkspaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceIdentity">LogAnalyticsWorkspaceIdentity</a>

---


### LogAnalyticsWorkspaceTimeoutsOutputReference <a name="LogAnalyticsWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/loganalyticsworkspace"

loganalyticsworkspace.NewLogAnalyticsWorkspaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsWorkspaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



