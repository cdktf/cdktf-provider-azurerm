# `appServiceSlot` Submodule <a name="`appServiceSlot` Submodule" id="@cdktf/provider-azurerm.appServiceSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSlot <a name="AppServiceSlot" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot azurerm_app_service_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlot(scope Construct, id *string, config AppServiceSlotConfig) AppServiceSlot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig">AppServiceSlotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig">AppServiceSlotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings">PutAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putConnectionString">PutConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs">PutLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig">PutSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putStorageAccount">PutStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAppSettings">ResetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAuthSettings">ResetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetClientAffinityEnabled">ResetClientAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetHttpsOnly">ResetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetKeyVaultReferenceIdentityId">ResetKeyVaultReferenceIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetLogs">ResetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetSiteConfig">ResetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetStorageAccount">ResetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthSettings` <a name="PutAuthSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings"></a>

```go
func PutAuthSettings(value AppServiceSlotAuthSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

---

##### `PutConnectionString` <a name="PutConnectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putConnectionString"></a>

```go
func PutConnectionString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putConnectionString.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putIdentity"></a>

```go
func PutIdentity(value AppServiceSlotIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

---

##### `PutLogs` <a name="PutLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs"></a>

```go
func PutLogs(value AppServiceSlotLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

---

##### `PutSiteConfig` <a name="PutSiteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig"></a>

```go
func PutSiteConfig(value AppServiceSlotSiteConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

---

##### `PutStorageAccount` <a name="PutStorageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putStorageAccount"></a>

```go
func PutStorageAccount(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putStorageAccount.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts"></a>

```go
func PutTimeouts(value AppServiceSlotTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>

---

##### `ResetAppSettings` <a name="ResetAppSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAppSettings"></a>

```go
func ResetAppSettings()
```

##### `ResetAuthSettings` <a name="ResetAuthSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAuthSettings"></a>

```go
func ResetAuthSettings()
```

##### `ResetClientAffinityEnabled` <a name="ResetClientAffinityEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetClientAffinityEnabled"></a>

```go
func ResetClientAffinityEnabled()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHttpsOnly` <a name="ResetHttpsOnly" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetHttpsOnly"></a>

```go
func ResetHttpsOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetKeyVaultReferenceIdentityId` <a name="ResetKeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetKeyVaultReferenceIdentityId"></a>

```go
func ResetKeyVaultReferenceIdentityId()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetLogs"></a>

```go
func ResetLogs()
```

##### `ResetSiteConfig` <a name="ResetSiteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetSiteConfig"></a>

```go
func ResetSiteConfig()
```

##### `ResetStorageAccount` <a name="ResetStorageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetStorageAccount"></a>

```go
func ResetStorageAccount()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceSlot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.AppServiceSlot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.AppServiceSlot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.AppServiceSlot_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.AppServiceSlot_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppServiceSlot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppServiceSlot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppServiceSlot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceSlot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettings">AuthSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference">AppServiceSlotAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionString">ConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList">AppServiceSlotConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.defaultSiteHostname">DefaultSiteHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference">AppServiceSlotIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference">AppServiceSlotLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference">AppServiceSlotSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteCredential">SiteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList">AppServiceSlotSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList">AppServiceSlotStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference">AppServiceSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceNameInput">AppServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanIdInput">AppServicePlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettingsInput">AppSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettingsInput">AuthSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabledInput">ClientAffinityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionStringInput">ConnectionStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnlyInput">HttpsOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityIdInput">KeyVaultReferenceIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logsInput">LogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfigInput">SiteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccountInput">StorageAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceName">AppServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanId">AppServicePlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettings">AppSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabled">ClientAffinityEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnly">HttpsOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityId">KeyVaultReferenceIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthSettings`<sup>Required</sup> <a name="AuthSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettings"></a>

```go
func AuthSettings() AppServiceSlotAuthSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference">AppServiceSlotAuthSettingsOutputReference</a>

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionString"></a>

```go
func ConnectionString() AppServiceSlotConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList">AppServiceSlotConnectionStringList</a>

---

##### `DefaultSiteHostname`<sup>Required</sup> <a name="DefaultSiteHostname" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.defaultSiteHostname"></a>

```go
func DefaultSiteHostname() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identity"></a>

```go
func Identity() AppServiceSlotIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference">AppServiceSlotIdentityOutputReference</a>

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logs"></a>

```go
func Logs() AppServiceSlotLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference">AppServiceSlotLogsOutputReference</a>

---

##### `SiteConfig`<sup>Required</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfig"></a>

```go
func SiteConfig() AppServiceSlotSiteConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference">AppServiceSlotSiteConfigOutputReference</a>

---

##### `SiteCredential`<sup>Required</sup> <a name="SiteCredential" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteCredential"></a>

```go
func SiteCredential() AppServiceSlotSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList">AppServiceSlotSiteCredentialList</a>

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccount"></a>

```go
func StorageAccount() AppServiceSlotStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList">AppServiceSlotStorageAccountList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeouts"></a>

```go
func Timeouts() AppServiceSlotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference">AppServiceSlotTimeoutsOutputReference</a>

---

##### `AppServiceNameInput`<sup>Optional</sup> <a name="AppServiceNameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceNameInput"></a>

```go
func AppServiceNameInput() *string
```

- *Type:* *string

---

##### `AppServicePlanIdInput`<sup>Optional</sup> <a name="AppServicePlanIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanIdInput"></a>

```go
func AppServicePlanIdInput() *string
```

- *Type:* *string

---

##### `AppSettingsInput`<sup>Optional</sup> <a name="AppSettingsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettingsInput"></a>

```go
func AppSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthSettingsInput`<sup>Optional</sup> <a name="AuthSettingsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettingsInput"></a>

```go
func AuthSettingsInput() AppServiceSlotAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

---

##### `ClientAffinityEnabledInput`<sup>Optional</sup> <a name="ClientAffinityEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabledInput"></a>

```go
func ClientAffinityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionStringInput"></a>

```go
func ConnectionStringInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HttpsOnlyInput`<sup>Optional</sup> <a name="HttpsOnlyInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnlyInput"></a>

```go
func HttpsOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identityInput"></a>

```go
func IdentityInput() AppServiceSlotIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultReferenceIdentityIdInput`<sup>Optional</sup> <a name="KeyVaultReferenceIdentityIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityIdInput"></a>

```go
func KeyVaultReferenceIdentityIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logsInput"></a>

```go
func LogsInput() AppServiceSlotLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SiteConfigInput`<sup>Optional</sup> <a name="SiteConfigInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfigInput"></a>

```go
func SiteConfigInput() AppServiceSlotSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccountInput"></a>

```go
func StorageAccountInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AppServiceName`<sup>Required</sup> <a name="AppServiceName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceName"></a>

```go
func AppServiceName() *string
```

- *Type:* *string

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanId"></a>

```go
func AppServicePlanId() *string
```

- *Type:* *string

---

##### `AppSettings`<sup>Required</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettings"></a>

```go
func AppSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ClientAffinityEnabled`<sup>Required</sup> <a name="ClientAffinityEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabled"></a>

```go
func ClientAffinityEnabled() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnly"></a>

```go
func HttpsOnly() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultReferenceIdentityId`<sup>Required</sup> <a name="KeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityId"></a>

```go
func KeyVaultReferenceIdentityId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSlotAuthSettings <a name="AppServiceSlotAuthSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotAuthSettings {
	Enabled: interface{},
	ActiveDirectory: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory,
	AdditionalLoginParams: *map[string]*string,
	AllowedExternalRedirectUrls: *[]*string,
	DefaultProvider: *string,
	Facebook: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook,
	Google: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle,
	Issuer: *string,
	Microsoft: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft,
	RuntimeVersion: *string,
	TokenRefreshExtensionHours: *f64,
	TokenStoreEnabled: interface{},
	Twitter: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter,
	UnauthenticatedClientAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.additionalLoginParams">AdditionalLoginParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#additional_login_params AppServiceSlot#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#allowed_external_redirect_urls AppServiceSlot#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.defaultProvider">DefaultProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#default_provider AppServiceSlot#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.facebook">Facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.google">Google</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#issuer AppServiceSlot#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.microsoft">Microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#runtime_version AppServiceSlot#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenRefreshExtensionHours">TokenRefreshExtensionHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#token_refresh_extension_hours AppServiceSlot#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#token_store_enabled AppServiceSlot#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.unauthenticatedClientAction">UnauthenticatedClientAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#unauthenticated_client_action AppServiceSlot#unauthenticated_client_action}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}.

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.activeDirectory"></a>

```go
ActiveDirectory AppServiceSlotAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#active_directory AppServiceSlot#active_directory}

---

##### `AdditionalLoginParams`<sup>Optional</sup> <a name="AdditionalLoginParams" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.additionalLoginParams"></a>

```go
AdditionalLoginParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#additional_login_params AppServiceSlot#additional_login_params}.

---

##### `AllowedExternalRedirectUrls`<sup>Optional</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.allowedExternalRedirectUrls"></a>

```go
AllowedExternalRedirectUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#allowed_external_redirect_urls AppServiceSlot#allowed_external_redirect_urls}.

---

##### `DefaultProvider`<sup>Optional</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.defaultProvider"></a>

```go
DefaultProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#default_provider AppServiceSlot#default_provider}.

---

##### `Facebook`<sup>Optional</sup> <a name="Facebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.facebook"></a>

```go
Facebook AppServiceSlotAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#facebook AppServiceSlot#facebook}

---

##### `Google`<sup>Optional</sup> <a name="Google" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.google"></a>

```go
Google AppServiceSlotAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#google AppServiceSlot#google}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#issuer AppServiceSlot#issuer}.

---

##### `Microsoft`<sup>Optional</sup> <a name="Microsoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.microsoft"></a>

```go
Microsoft AppServiceSlotAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#microsoft AppServiceSlot#microsoft}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#runtime_version AppServiceSlot#runtime_version}.

---

##### `TokenRefreshExtensionHours`<sup>Optional</sup> <a name="TokenRefreshExtensionHours" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenRefreshExtensionHours"></a>

```go
TokenRefreshExtensionHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#token_refresh_extension_hours AppServiceSlot#token_refresh_extension_hours}.

---

##### `TokenStoreEnabled`<sup>Optional</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenStoreEnabled"></a>

```go
TokenStoreEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#token_store_enabled AppServiceSlot#token_store_enabled}.

---

##### `Twitter`<sup>Optional</sup> <a name="Twitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.twitter"></a>

```go
Twitter AppServiceSlotAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#twitter AppServiceSlot#twitter}

---

##### `UnauthenticatedClientAction`<sup>Optional</sup> <a name="UnauthenticatedClientAction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.unauthenticatedClientAction"></a>

```go
UnauthenticatedClientAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#unauthenticated_client_action AppServiceSlot#unauthenticated_client_action}.

---

### AppServiceSlotAuthSettingsActiveDirectory <a name="AppServiceSlotAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotAuthSettingsActiveDirectory {
	ClientId: *string,
	AllowedAudiences: *[]*string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#allowed_audiences AppServiceSlot#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

##### `AllowedAudiences`<sup>Optional</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```go
AllowedAudiences *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#allowed_audiences AppServiceSlot#allowed_audiences}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

### AppServiceSlotAuthSettingsFacebook <a name="AppServiceSlotAuthSettingsFacebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotAuthSettingsFacebook {
	AppId: *string,
	AppSecret: *string,
	OauthScopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_id AppServiceSlot#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appSecret">AppSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_secret AppServiceSlot#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}. |

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_id AppServiceSlot#app_id}.

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appSecret"></a>

```go
AppSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_secret AppServiceSlot#app_secret}.

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.oauthScopes"></a>

```go
OauthScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

### AppServiceSlotAuthSettingsGoogle <a name="AppServiceSlotAuthSettingsGoogle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotAuthSettingsGoogle {
	ClientId: *string,
	ClientSecret: *string,
	OauthScopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.oauthScopes"></a>

```go
OauthScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

### AppServiceSlotAuthSettingsMicrosoft <a name="AppServiceSlotAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotAuthSettingsMicrosoft {
	ClientId: *string,
	ClientSecret: *string,
	OauthScopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.oauthScopes"></a>

```go
OauthScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

### AppServiceSlotAuthSettingsTwitter <a name="AppServiceSlotAuthSettingsTwitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotAuthSettingsTwitter {
	ConsumerKey: *string,
	ConsumerSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerKey">ConsumerKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#consumer_key AppServiceSlot#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerSecret">ConsumerSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#consumer_secret AppServiceSlot#consumer_secret}. |

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerKey"></a>

```go
ConsumerKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#consumer_key AppServiceSlot#consumer_key}.

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerSecret"></a>

```go
ConsumerSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#consumer_secret AppServiceSlot#consumer_secret}.

---

### AppServiceSlotConfig <a name="AppServiceSlotConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppServiceName: *string,
	AppServicePlanId: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	AppSettings: *map[string]*string,
	AuthSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotAuthSettings,
	ClientAffinityEnabled: interface{},
	ConnectionString: interface{},
	Enabled: interface{},
	HttpsOnly: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotIdentity,
	KeyVaultReferenceIdentityId: *string,
	Logs: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotLogs,
	SiteConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotSiteConfig,
	StorageAccount: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServiceName">AppServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_service_name AppServiceSlot#app_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServicePlanId">AppServicePlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_service_plan_id AppServiceSlot#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#location AppServiceSlot#location}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#resource_group_name AppServiceSlot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appSettings">AppSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_settings AppServiceSlot#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.authSettings">AuthSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.clientAffinityEnabled">ClientAffinityEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_affinity_enabled AppServiceSlot#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connectionString">ConnectionString</a></code> | <code>interface{}</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.httpsOnly">HttpsOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#https_only AppServiceSlot#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#id AppServiceSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.keyVaultReferenceIdentityId">KeyVaultReferenceIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#key_vault_reference_identity_id AppServiceSlot#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.storageAccount">StorageAccount</a></code> | <code>interface{}</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#tags AppServiceSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppServiceName`<sup>Required</sup> <a name="AppServiceName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServiceName"></a>

```go
AppServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_service_name AppServiceSlot#app_service_name}.

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServicePlanId"></a>

```go
AppServicePlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_service_plan_id AppServiceSlot#app_service_plan_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#location AppServiceSlot#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#resource_group_name AppServiceSlot#resource_group_name}.

---

##### `AppSettings`<sup>Optional</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appSettings"></a>

```go
AppSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_settings AppServiceSlot#app_settings}.

---

##### `AuthSettings`<sup>Optional</sup> <a name="AuthSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.authSettings"></a>

```go
AuthSettings AppServiceSlotAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#auth_settings AppServiceSlot#auth_settings}

---

##### `ClientAffinityEnabled`<sup>Optional</sup> <a name="ClientAffinityEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.clientAffinityEnabled"></a>

```go
ClientAffinityEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#client_affinity_enabled AppServiceSlot#client_affinity_enabled}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connectionString"></a>

```go
ConnectionString interface{}
```

- *Type:* interface{}

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#connection_string AppServiceSlot#connection_string}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}.

---

##### `HttpsOnly`<sup>Optional</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.httpsOnly"></a>

```go
HttpsOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#https_only AppServiceSlot#https_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#id AppServiceSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.identity"></a>

```go
Identity AppServiceSlotIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#identity AppServiceSlot#identity}

---

##### `KeyVaultReferenceIdentityId`<sup>Optional</sup> <a name="KeyVaultReferenceIdentityId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.keyVaultReferenceIdentityId"></a>

```go
KeyVaultReferenceIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#key_vault_reference_identity_id AppServiceSlot#key_vault_reference_identity_id}.

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.logs"></a>

```go
Logs AppServiceSlotLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#logs AppServiceSlot#logs}

---

##### `SiteConfig`<sup>Optional</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.siteConfig"></a>

```go
SiteConfig AppServiceSlotSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#site_config AppServiceSlot#site_config}

---

##### `StorageAccount`<sup>Optional</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.storageAccount"></a>

```go
StorageAccount interface{}
```

- *Type:* interface{}

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#storage_account AppServiceSlot#storage_account}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#tags AppServiceSlot#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.timeouts"></a>

```go
Timeouts AppServiceSlotTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#timeouts AppServiceSlot#timeouts}

---

### AppServiceSlotConnectionString <a name="AppServiceSlotConnectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotConnectionString {
	Name: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#type AppServiceSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#value AppServiceSlot#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#type AppServiceSlot#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#value AppServiceSlot#value}.

---

### AppServiceSlotIdentity <a name="AppServiceSlotIdentity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#type AppServiceSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#identity_ids AppServiceSlot#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#type AppServiceSlot#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#identity_ids AppServiceSlot#identity_ids}.

---

### AppServiceSlotLogs <a name="AppServiceSlotLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotLogs {
	ApplicationLogs: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs,
	DetailedErrorMessagesEnabled: interface{},
	FailedRequestTracingEnabled: interface{},
	HttpLogs: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.applicationLogs">ApplicationLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a></code> | application_logs block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.detailedErrorMessagesEnabled">DetailedErrorMessagesEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#detailed_error_messages_enabled AppServiceSlot#detailed_error_messages_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.failedRequestTracingEnabled">FailedRequestTracingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#failed_request_tracing_enabled AppServiceSlot#failed_request_tracing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.httpLogs">HttpLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a></code> | http_logs block. |

---

##### `ApplicationLogs`<sup>Optional</sup> <a name="ApplicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.applicationLogs"></a>

```go
ApplicationLogs AppServiceSlotLogsApplicationLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

application_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#application_logs AppServiceSlot#application_logs}

---

##### `DetailedErrorMessagesEnabled`<sup>Optional</sup> <a name="DetailedErrorMessagesEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.detailedErrorMessagesEnabled"></a>

```go
DetailedErrorMessagesEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#detailed_error_messages_enabled AppServiceSlot#detailed_error_messages_enabled}.

---

##### `FailedRequestTracingEnabled`<sup>Optional</sup> <a name="FailedRequestTracingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.failedRequestTracingEnabled"></a>

```go
FailedRequestTracingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#failed_request_tracing_enabled AppServiceSlot#failed_request_tracing_enabled}.

---

##### `HttpLogs`<sup>Optional</sup> <a name="HttpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.httpLogs"></a>

```go
HttpLogs AppServiceSlotLogsHttpLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

http_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#http_logs AppServiceSlot#http_logs}

---

### AppServiceSlotLogsApplicationLogs <a name="AppServiceSlotLogsApplicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotLogsApplicationLogs {
	AzureBlobStorage: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage,
	FileSystemLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.azureBlobStorage">AzureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.fileSystemLevel">FileSystemLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#file_system_level AppServiceSlot#file_system_level}. |

---

##### `AzureBlobStorage`<sup>Optional</sup> <a name="AzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.azureBlobStorage"></a>

```go
AzureBlobStorage AppServiceSlotLogsApplicationLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#azure_blob_storage AppServiceSlot#azure_blob_storage}

---

##### `FileSystemLevel`<sup>Optional</sup> <a name="FileSystemLevel" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.fileSystemLevel"></a>

```go
FileSystemLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#file_system_level AppServiceSlot#file_system_level}.

---

### AppServiceSlotLogsApplicationLogsAzureBlobStorage <a name="AppServiceSlotLogsApplicationLogsAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotLogsApplicationLogsAzureBlobStorage {
	Level: *string,
	RetentionInDays: *f64,
	SasUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.level">Level</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#level AppServiceSlot#level}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.sasUrl">SasUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}. |

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.level"></a>

```go
Level *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#level AppServiceSlot#level}.

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.retentionInDays"></a>

```go
RetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

##### `SasUrl`<sup>Required</sup> <a name="SasUrl" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.sasUrl"></a>

```go
SasUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}.

---

### AppServiceSlotLogsHttpLogs <a name="AppServiceSlotLogsHttpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotLogsHttpLogs {
	AzureBlobStorage: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage,
	FileSystem: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.azureBlobStorage">AzureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.fileSystem">FileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a></code> | file_system block. |

---

##### `AzureBlobStorage`<sup>Optional</sup> <a name="AzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.azureBlobStorage"></a>

```go
AzureBlobStorage AppServiceSlotLogsHttpLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#azure_blob_storage AppServiceSlot#azure_blob_storage}

---

##### `FileSystem`<sup>Optional</sup> <a name="FileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.fileSystem"></a>

```go
FileSystem AppServiceSlotLogsHttpLogsFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#file_system AppServiceSlot#file_system}

---

### AppServiceSlotLogsHttpLogsAzureBlobStorage <a name="AppServiceSlotLogsHttpLogsAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotLogsHttpLogsAzureBlobStorage {
	RetentionInDays: *f64,
	SasUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.sasUrl">SasUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}. |

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.retentionInDays"></a>

```go
RetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

##### `SasUrl`<sup>Required</sup> <a name="SasUrl" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.sasUrl"></a>

```go
SasUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}.

---

### AppServiceSlotLogsHttpLogsFileSystem <a name="AppServiceSlotLogsHttpLogsFileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotLogsHttpLogsFileSystem {
	RetentionInDays: *f64,
	RetentionInMb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInMb">RetentionInMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#retention_in_mb AppServiceSlot#retention_in_mb}. |

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInDays"></a>

```go
RetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

##### `RetentionInMb`<sup>Required</sup> <a name="RetentionInMb" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInMb"></a>

```go
RetentionInMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#retention_in_mb AppServiceSlot#retention_in_mb}.

---

### AppServiceSlotSiteConfig <a name="AppServiceSlotSiteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotSiteConfig {
	AcrUseManagedIdentityCredentials: interface{},
	AcrUserManagedIdentityClientId: *string,
	AlwaysOn: interface{},
	AppCommandLine: *string,
	AutoSwapSlotName: *string,
	Cors: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.appServiceSlot.AppServiceSlotSiteConfigCors,
	DefaultDocuments: *[]*string,
	DotnetFrameworkVersion: *string,
	FtpsState: *string,
	HealthCheckPath: *string,
	Http2Enabled: interface{},
	IpRestriction: interface{},
	JavaContainer: *string,
	JavaContainerVersion: *string,
	JavaVersion: *string,
	LinuxFxVersion: *string,
	LocalMysqlEnabled: interface{},
	ManagedPipelineMode: *string,
	MinTlsVersion: *string,
	NumberOfWorkers: *f64,
	PhpVersion: *string,
	PythonVersion: *string,
	RemoteDebuggingEnabled: interface{},
	RemoteDebuggingVersion: *string,
	ScmIpRestriction: interface{},
	ScmType: *string,
	ScmUseMainIpRestriction: interface{},
	Use32BitWorkerProcess: interface{},
	VnetRouteAllEnabled: interface{},
	WebsocketsEnabled: interface{},
	WindowsFxVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUseManagedIdentityCredentials">AcrUseManagedIdentityCredentials</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#acr_use_managed_identity_credentials AppServiceSlot#acr_use_managed_identity_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUserManagedIdentityClientId">AcrUserManagedIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#acr_user_managed_identity_client_id AppServiceSlot#acr_user_managed_identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.alwaysOn">AlwaysOn</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#always_on AppServiceSlot#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.appCommandLine">AppCommandLine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_command_line AppServiceSlot#app_command_line}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.autoSwapSlotName">AutoSwapSlotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#auto_swap_slot_name AppServiceSlot#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.defaultDocuments">DefaultDocuments</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#default_documents AppServiceSlot#default_documents}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#dotnet_framework_version AppServiceSlot#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ftpsState">FtpsState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#ftps_state AppServiceSlot#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#health_check_path AppServiceSlot#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.http2Enabled">Http2Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#http2_enabled AppServiceSlot#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ipRestriction">IpRestriction</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#ip_restriction AppServiceSlot#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainer">JavaContainer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#java_container AppServiceSlot#java_container}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainerVersion">JavaContainerVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#java_container_version AppServiceSlot#java_container_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaVersion">JavaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#java_version AppServiceSlot#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#linux_fx_version AppServiceSlot#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.localMysqlEnabled">LocalMysqlEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#local_mysql_enabled AppServiceSlot#local_mysql_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.managedPipelineMode">ManagedPipelineMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#managed_pipeline_mode AppServiceSlot#managed_pipeline_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#min_tls_version AppServiceSlot#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#number_of_workers AppServiceSlot#number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.phpVersion">PhpVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#php_version AppServiceSlot#php_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#python_version AppServiceSlot#python_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingEnabled">RemoteDebuggingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#remote_debugging_enabled AppServiceSlot#remote_debugging_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingVersion">RemoteDebuggingVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#remote_debugging_version AppServiceSlot#remote_debugging_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmIpRestriction">ScmIpRestriction</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#scm_ip_restriction AppServiceSlot#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmType">ScmType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#scm_type AppServiceSlot#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#scm_use_main_ip_restriction AppServiceSlot#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#use_32_bit_worker_process AppServiceSlot#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#vnet_route_all_enabled AppServiceSlot#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#websockets_enabled AppServiceSlot#websockets_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.windowsFxVersion">WindowsFxVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#windows_fx_version AppServiceSlot#windows_fx_version}. |

---

##### `AcrUseManagedIdentityCredentials`<sup>Optional</sup> <a name="AcrUseManagedIdentityCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUseManagedIdentityCredentials"></a>

```go
AcrUseManagedIdentityCredentials interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#acr_use_managed_identity_credentials AppServiceSlot#acr_use_managed_identity_credentials}.

---

##### `AcrUserManagedIdentityClientId`<sup>Optional</sup> <a name="AcrUserManagedIdentityClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUserManagedIdentityClientId"></a>

```go
AcrUserManagedIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#acr_user_managed_identity_client_id AppServiceSlot#acr_user_managed_identity_client_id}.

---

##### `AlwaysOn`<sup>Optional</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.alwaysOn"></a>

```go
AlwaysOn interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#always_on AppServiceSlot#always_on}.

---

##### `AppCommandLine`<sup>Optional</sup> <a name="AppCommandLine" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.appCommandLine"></a>

```go
AppCommandLine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#app_command_line AppServiceSlot#app_command_line}.

---

##### `AutoSwapSlotName`<sup>Optional</sup> <a name="AutoSwapSlotName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.autoSwapSlotName"></a>

```go
AutoSwapSlotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#auto_swap_slot_name AppServiceSlot#auto_swap_slot_name}.

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.cors"></a>

```go
Cors AppServiceSlotSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#cors AppServiceSlot#cors}

---

##### `DefaultDocuments`<sup>Optional</sup> <a name="DefaultDocuments" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.defaultDocuments"></a>

```go
DefaultDocuments *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#default_documents AppServiceSlot#default_documents}.

---

##### `DotnetFrameworkVersion`<sup>Optional</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.dotnetFrameworkVersion"></a>

```go
DotnetFrameworkVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#dotnet_framework_version AppServiceSlot#dotnet_framework_version}.

---

##### `FtpsState`<sup>Optional</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ftpsState"></a>

```go
FtpsState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#ftps_state AppServiceSlot#ftps_state}.

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.healthCheckPath"></a>

```go
HealthCheckPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#health_check_path AppServiceSlot#health_check_path}.

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.http2Enabled"></a>

```go
Http2Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#http2_enabled AppServiceSlot#http2_enabled}.

---

##### `IpRestriction`<sup>Optional</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ipRestriction"></a>

```go
IpRestriction interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#ip_restriction AppServiceSlot#ip_restriction}.

---

##### `JavaContainer`<sup>Optional</sup> <a name="JavaContainer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainer"></a>

```go
JavaContainer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#java_container AppServiceSlot#java_container}.

---

##### `JavaContainerVersion`<sup>Optional</sup> <a name="JavaContainerVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainerVersion"></a>

```go
JavaContainerVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#java_container_version AppServiceSlot#java_container_version}.

---

##### `JavaVersion`<sup>Optional</sup> <a name="JavaVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaVersion"></a>

```go
JavaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#java_version AppServiceSlot#java_version}.

---

##### `LinuxFxVersion`<sup>Optional</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.linuxFxVersion"></a>

```go
LinuxFxVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#linux_fx_version AppServiceSlot#linux_fx_version}.

---

##### `LocalMysqlEnabled`<sup>Optional</sup> <a name="LocalMysqlEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.localMysqlEnabled"></a>

```go
LocalMysqlEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#local_mysql_enabled AppServiceSlot#local_mysql_enabled}.

---

##### `ManagedPipelineMode`<sup>Optional</sup> <a name="ManagedPipelineMode" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.managedPipelineMode"></a>

```go
ManagedPipelineMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#managed_pipeline_mode AppServiceSlot#managed_pipeline_mode}.

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.minTlsVersion"></a>

```go
MinTlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#min_tls_version AppServiceSlot#min_tls_version}.

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.numberOfWorkers"></a>

```go
NumberOfWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#number_of_workers AppServiceSlot#number_of_workers}.

---

##### `PhpVersion`<sup>Optional</sup> <a name="PhpVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.phpVersion"></a>

```go
PhpVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#php_version AppServiceSlot#php_version}.

---

##### `PythonVersion`<sup>Optional</sup> <a name="PythonVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.pythonVersion"></a>

```go
PythonVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#python_version AppServiceSlot#python_version}.

---

##### `RemoteDebuggingEnabled`<sup>Optional</sup> <a name="RemoteDebuggingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingEnabled"></a>

```go
RemoteDebuggingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#remote_debugging_enabled AppServiceSlot#remote_debugging_enabled}.

---

##### `RemoteDebuggingVersion`<sup>Optional</sup> <a name="RemoteDebuggingVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingVersion"></a>

```go
RemoteDebuggingVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#remote_debugging_version AppServiceSlot#remote_debugging_version}.

---

##### `ScmIpRestriction`<sup>Optional</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmIpRestriction"></a>

```go
ScmIpRestriction interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#scm_ip_restriction AppServiceSlot#scm_ip_restriction}.

---

##### `ScmType`<sup>Optional</sup> <a name="ScmType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmType"></a>

```go
ScmType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#scm_type AppServiceSlot#scm_type}.

---

##### `ScmUseMainIpRestriction`<sup>Optional</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmUseMainIpRestriction"></a>

```go
ScmUseMainIpRestriction interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#scm_use_main_ip_restriction AppServiceSlot#scm_use_main_ip_restriction}.

---

##### `Use32BitWorkerProcess`<sup>Optional</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.use32BitWorkerProcess"></a>

```go
Use32BitWorkerProcess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#use_32_bit_worker_process AppServiceSlot#use_32_bit_worker_process}.

---

##### `VnetRouteAllEnabled`<sup>Optional</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.vnetRouteAllEnabled"></a>

```go
VnetRouteAllEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#vnet_route_all_enabled AppServiceSlot#vnet_route_all_enabled}.

---

##### `WebsocketsEnabled`<sup>Optional</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.websocketsEnabled"></a>

```go
WebsocketsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#websockets_enabled AppServiceSlot#websockets_enabled}.

---

##### `WindowsFxVersion`<sup>Optional</sup> <a name="WindowsFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.windowsFxVersion"></a>

```go
WindowsFxVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#windows_fx_version AppServiceSlot#windows_fx_version}.

---

### AppServiceSlotSiteConfigCors <a name="AppServiceSlotSiteConfigCors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotSiteConfigCors {
	AllowedOrigins: *[]*string,
	SupportCredentials: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#allowed_origins AppServiceSlot#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.supportCredentials">SupportCredentials</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#support_credentials AppServiceSlot#support_credentials}. |

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#allowed_origins AppServiceSlot#allowed_origins}.

---

##### `SupportCredentials`<sup>Optional</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.supportCredentials"></a>

```go
SupportCredentials interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#support_credentials AppServiceSlot#support_credentials}.

---

### AppServiceSlotSiteConfigIpRestriction <a name="AppServiceSlotSiteConfigIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotSiteConfigIpRestriction {
	Action: *string,
	Headers: interface{},
	IpAddress: *string,
	Name: *string,
	Priority: *f64,
	ServiceTag: *string,
	VirtualNetworkSubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#action AppServiceSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.headers">Headers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#action AppServiceSlot#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.serviceTag"></a>

```go
ServiceTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```go
VirtualNetworkSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}.

---

### AppServiceSlotSiteConfigIpRestrictionHeaders <a name="AppServiceSlotSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotSiteConfigIpRestrictionHeaders {
	XAzureFdid: *[]*string,
	XFdHealthProbe: *[]*string,
	XForwardedFor: *[]*string,
	XForwardedHost: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```go
XAzureFdid *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```go
XFdHealthProbe *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```go
XForwardedFor *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```go
XForwardedHost *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}.

---

### AppServiceSlotSiteConfigScmIpRestriction <a name="AppServiceSlotSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotSiteConfigScmIpRestriction {
	Action: *string,
	Headers: interface{},
	IpAddress: *string,
	Name: *string,
	Priority: *f64,
	ServiceTag: *string,
	VirtualNetworkSubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#action AppServiceSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.headers">Headers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#action AppServiceSlot#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.serviceTag"></a>

```go
ServiceTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```go
VirtualNetworkSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}.

---

### AppServiceSlotSiteConfigScmIpRestrictionHeaders <a name="AppServiceSlotSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotSiteConfigScmIpRestrictionHeaders {
	XAzureFdid: *[]*string,
	XFdHealthProbe: *[]*string,
	XForwardedFor: *[]*string,
	XForwardedHost: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```go
XAzureFdid *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```go
XFdHealthProbe *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```go
XForwardedFor *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```go
XForwardedHost *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}.

---

### AppServiceSlotSiteCredential <a name="AppServiceSlotSiteCredential" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotSiteCredential {

}
```


### AppServiceSlotStorageAccount <a name="AppServiceSlotStorageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotStorageAccount {
	AccessKey: *string,
	AccountName: *string,
	Name: *string,
	ShareName: *string,
	Type: *string,
	MountPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accessKey">AccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#access_key AppServiceSlot#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#account_name AppServiceSlot#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.shareName">ShareName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#share_name AppServiceSlot#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#type AppServiceSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.mountPath">MountPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#mount_path AppServiceSlot#mount_path}. |

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accessKey"></a>

```go
AccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#access_key AppServiceSlot#access_key}.

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#account_name AppServiceSlot#account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.shareName"></a>

```go
ShareName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#share_name AppServiceSlot#share_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#type AppServiceSlot#type}.

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#mount_path AppServiceSlot#mount_path}.

---

### AppServiceSlotTimeouts <a name="AppServiceSlotTimeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

&appserviceslot.AppServiceSlotTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#create AppServiceSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#delete AppServiceSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#read AppServiceSlot#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#update AppServiceSlot#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#create AppServiceSlot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#delete AppServiceSlot#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#read AppServiceSlot#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/app_service_slot#update AppServiceSlot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSlotAuthSettingsActiveDirectoryOutputReference <a name="AppServiceSlotAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotAuthSettingsActiveDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotAuthSettingsActiveDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">ResetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAudiences` <a name="ResetAllowedAudiences" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```go
func ResetAllowedAudiences()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">AllowedAudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAudiencesInput`<sup>Optional</sup> <a name="AllowedAudiencesInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```go
func AllowedAudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```go
func AllowedAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

---


### AppServiceSlotAuthSettingsFacebookOutputReference <a name="AppServiceSlotAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotAuthSettingsFacebookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotAuthSettingsFacebookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```go
func ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecretInput">AppSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecret">AppSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `AppSecretInput`<sup>Optional</sup> <a name="AppSecretInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```go
func AppSecretInput() *string
```

- *Type:* *string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```go
func OauthScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecret"></a>

```go
func AppSecret() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

---


### AppServiceSlotAuthSettingsGoogleOutputReference <a name="AppServiceSlotAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotAuthSettingsGoogleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotAuthSettingsGoogleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```go
func ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```go
func OauthScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

---


### AppServiceSlotAuthSettingsMicrosoftOutputReference <a name="AppServiceSlotAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotAuthSettingsMicrosoftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotAuthSettingsMicrosoftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```go
func ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```go
func OauthScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

---


### AppServiceSlotAuthSettingsOutputReference <a name="AppServiceSlotAuthSettingsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotAuthSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotAuthSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory">PutActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook">PutFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle">PutGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft">PutMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putTwitter">PutTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetActiveDirectory">ResetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAdditionalLoginParams">ResetAdditionalLoginParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">ResetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetDefaultProvider">ResetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetFacebook">ResetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetGoogle">ResetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetMicrosoft">ResetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours">ResetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenStoreEnabled">ResetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTwitter">ResetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction">ResetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectory` <a name="PutActiveDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory"></a>

```go
func PutActiveDirectory(value AppServiceSlotAuthSettingsActiveDirectory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

---

##### `PutFacebook` <a name="PutFacebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook"></a>

```go
func PutFacebook(value AppServiceSlotAuthSettingsFacebook)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

---

##### `PutGoogle` <a name="PutGoogle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle"></a>

```go
func PutGoogle(value AppServiceSlotAuthSettingsGoogle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

---

##### `PutMicrosoft` <a name="PutMicrosoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft"></a>

```go
func PutMicrosoft(value AppServiceSlotAuthSettingsMicrosoft)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

---

##### `PutTwitter` <a name="PutTwitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putTwitter"></a>

```go
func PutTwitter(value AppServiceSlotAuthSettingsTwitter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetActiveDirectory"></a>

```go
func ResetActiveDirectory()
```

##### `ResetAdditionalLoginParams` <a name="ResetAdditionalLoginParams" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```go
func ResetAdditionalLoginParams()
```

##### `ResetAllowedExternalRedirectUrls` <a name="ResetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```go
func ResetAllowedExternalRedirectUrls()
```

##### `ResetDefaultProvider` <a name="ResetDefaultProvider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetDefaultProvider"></a>

```go
func ResetDefaultProvider()
```

##### `ResetFacebook` <a name="ResetFacebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetFacebook"></a>

```go
func ResetFacebook()
```

##### `ResetGoogle` <a name="ResetGoogle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetGoogle"></a>

```go
func ResetGoogle()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetMicrosoft` <a name="ResetMicrosoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetMicrosoft"></a>

```go
func ResetMicrosoft()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetRuntimeVersion"></a>

```go
func ResetRuntimeVersion()
```

##### `ResetTokenRefreshExtensionHours` <a name="ResetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```go
func ResetTokenRefreshExtensionHours()
```

##### `ResetTokenStoreEnabled` <a name="ResetTokenStoreEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```go
func ResetTokenStoreEnabled()
```

##### `ResetTwitter` <a name="ResetTwitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTwitter"></a>

```go
func ResetTwitter()
```

##### `ResetUnauthenticatedClientAction` <a name="ResetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```go
func ResetUnauthenticatedClientAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference">AppServiceSlotAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebook">Facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference">AppServiceSlotAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.google">Google</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference">AppServiceSlotAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoft">Microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference">AppServiceSlotAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference">AppServiceSlotAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParamsInput">AdditionalLoginParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">AllowedExternalRedirectUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProviderInput">DefaultProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebookInput">FacebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.googleInput">GoogleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoftInput">MicrosoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">TokenRefreshExtensionHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput">TokenStoreEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitterInput">TwitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput">UnauthenticatedClientActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParams">AdditionalLoginParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProvider">DefaultProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours">TokenRefreshExtensionHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientAction">UnauthenticatedClientAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectory"></a>

```go
func ActiveDirectory() AppServiceSlotAuthSettingsActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference">AppServiceSlotAuthSettingsActiveDirectoryOutputReference</a>

---

##### `Facebook`<sup>Required</sup> <a name="Facebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebook"></a>

```go
func Facebook() AppServiceSlotAuthSettingsFacebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference">AppServiceSlotAuthSettingsFacebookOutputReference</a>

---

##### `Google`<sup>Required</sup> <a name="Google" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.google"></a>

```go
func Google() AppServiceSlotAuthSettingsGoogleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference">AppServiceSlotAuthSettingsGoogleOutputReference</a>

---

##### `Microsoft`<sup>Required</sup> <a name="Microsoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoft"></a>

```go
func Microsoft() AppServiceSlotAuthSettingsMicrosoftOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference">AppServiceSlotAuthSettingsMicrosoftOutputReference</a>

---

##### `Twitter`<sup>Required</sup> <a name="Twitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitter"></a>

```go
func Twitter() AppServiceSlotAuthSettingsTwitterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference">AppServiceSlotAuthSettingsTwitterOutputReference</a>

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```go
func ActiveDirectoryInput() AppServiceSlotAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

---

##### `AdditionalLoginParamsInput`<sup>Optional</sup> <a name="AdditionalLoginParamsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```go
func AdditionalLoginParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AllowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="AllowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```go
func AllowedExternalRedirectUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultProviderInput`<sup>Optional</sup> <a name="DefaultProviderInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProviderInput"></a>

```go
func DefaultProviderInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FacebookInput`<sup>Optional</sup> <a name="FacebookInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebookInput"></a>

```go
func FacebookInput() AppServiceSlotAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

---

##### `GoogleInput`<sup>Optional</sup> <a name="GoogleInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.googleInput"></a>

```go
func GoogleInput() AppServiceSlotAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `MicrosoftInput`<sup>Optional</sup> <a name="MicrosoftInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoftInput"></a>

```go
func MicrosoftInput() AppServiceSlotAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `TokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="TokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```go
func TokenRefreshExtensionHoursInput() *f64
```

- *Type:* *f64

---

##### `TokenStoreEnabledInput`<sup>Optional</sup> <a name="TokenStoreEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```go
func TokenStoreEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TwitterInput`<sup>Optional</sup> <a name="TwitterInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitterInput"></a>

```go
func TwitterInput() AppServiceSlotAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

---

##### `UnauthenticatedClientActionInput`<sup>Optional</sup> <a name="UnauthenticatedClientActionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```go
func UnauthenticatedClientActionInput() *string
```

- *Type:* *string

---

##### `AdditionalLoginParams`<sup>Required</sup> <a name="AdditionalLoginParams" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParams"></a>

```go
func AdditionalLoginParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AllowedExternalRedirectUrls`<sup>Required</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```go
func AllowedExternalRedirectUrls() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultProvider`<sup>Required</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProvider"></a>

```go
func DefaultProvider() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `TokenRefreshExtensionHours`<sup>Required</sup> <a name="TokenRefreshExtensionHours" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```go
func TokenRefreshExtensionHours() *f64
```

- *Type:* *f64

---

##### `TokenStoreEnabled`<sup>Required</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```go
func TokenStoreEnabled() interface{}
```

- *Type:* interface{}

---

##### `UnauthenticatedClientAction`<sup>Required</sup> <a name="UnauthenticatedClientAction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```go
func UnauthenticatedClientAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

---


### AppServiceSlotAuthSettingsTwitterOutputReference <a name="AppServiceSlotAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotAuthSettingsTwitterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotAuthSettingsTwitterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput">ConsumerKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput">ConsumerSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerKeyInput`<sup>Optional</sup> <a name="ConsumerKeyInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```go
func ConsumerKeyInput() *string
```

- *Type:* *string

---

##### `ConsumerSecretInput`<sup>Optional</sup> <a name="ConsumerSecretInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```go
func ConsumerSecretInput() *string
```

- *Type:* *string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```go
func ConsumerKey() *string
```

- *Type:* *string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```go
func ConsumerSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

---


### AppServiceSlotConnectionStringList <a name="AppServiceSlotConnectionStringList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotConnectionStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppServiceSlotConnectionStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.get"></a>

```go
func Get(index *f64) AppServiceSlotConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotConnectionStringOutputReference <a name="AppServiceSlotConnectionStringOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotConnectionStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppServiceSlotConnectionStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotIdentityOutputReference <a name="AppServiceSlotIdentityOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

---


### AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference <a name="AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput">SasUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl">SasUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```go
func RetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `SasUrlInput`<sup>Optional</sup> <a name="SasUrlInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```go
func SasUrlInput() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `SasUrl`<sup>Required</sup> <a name="SasUrl" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```go
func SasUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotLogsApplicationLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

---


### AppServiceSlotLogsApplicationLogsOutputReference <a name="AppServiceSlotLogsApplicationLogsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotLogsApplicationLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotLogsApplicationLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage">PutAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetAzureBlobStorage">ResetAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetFileSystemLevel">ResetFileSystemLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureBlobStorage` <a name="PutAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage"></a>

```go
func PutAzureBlobStorage(value AppServiceSlotLogsApplicationLogsAzureBlobStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

---

##### `ResetAzureBlobStorage` <a name="ResetAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetAzureBlobStorage"></a>

```go
func ResetAzureBlobStorage()
```

##### `ResetFileSystemLevel` <a name="ResetFileSystemLevel" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetFileSystemLevel"></a>

```go
func ResetFileSystemLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorage">AzureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference">AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorageInput">AzureBlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevelInput">FileSystemLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevel">FileSystemLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureBlobStorage`<sup>Required</sup> <a name="AzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorage"></a>

```go
func AzureBlobStorage() AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference">AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference</a>

---

##### `AzureBlobStorageInput`<sup>Optional</sup> <a name="AzureBlobStorageInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorageInput"></a>

```go
func AzureBlobStorageInput() AppServiceSlotLogsApplicationLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

---

##### `FileSystemLevelInput`<sup>Optional</sup> <a name="FileSystemLevelInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevelInput"></a>

```go
func FileSystemLevelInput() *string
```

- *Type:* *string

---

##### `FileSystemLevel`<sup>Required</sup> <a name="FileSystemLevel" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevel"></a>

```go
func FileSystemLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotLogsApplicationLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

---


### AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference <a name="AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput">SasUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl">SasUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```go
func RetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `SasUrlInput`<sup>Optional</sup> <a name="SasUrlInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```go
func SasUrlInput() *string
```

- *Type:* *string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `SasUrl`<sup>Required</sup> <a name="SasUrl" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```go
func SasUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotLogsHttpLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

---


### AppServiceSlotLogsHttpLogsFileSystemOutputReference <a name="AppServiceSlotLogsHttpLogsFileSystemOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotLogsHttpLogsFileSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotLogsHttpLogsFileSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput">RetentionInMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMb">RetentionInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput"></a>

```go
func RetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `RetentionInMbInput`<sup>Optional</sup> <a name="RetentionInMbInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput"></a>

```go
func RetentionInMbInput() *f64
```

- *Type:* *f64

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `RetentionInMb`<sup>Required</sup> <a name="RetentionInMb" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMb"></a>

```go
func RetentionInMb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotLogsHttpLogsFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

---


### AppServiceSlotLogsHttpLogsOutputReference <a name="AppServiceSlotLogsHttpLogsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotLogsHttpLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotLogsHttpLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putAzureBlobStorage">PutAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putFileSystem">PutFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetAzureBlobStorage">ResetAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetFileSystem">ResetFileSystem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzureBlobStorage` <a name="PutAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putAzureBlobStorage"></a>

```go
func PutAzureBlobStorage(value AppServiceSlotLogsHttpLogsAzureBlobStorage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putAzureBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

---

##### `PutFileSystem` <a name="PutFileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putFileSystem"></a>

```go
func PutFileSystem(value AppServiceSlotLogsHttpLogsFileSystem)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putFileSystem.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

---

##### `ResetAzureBlobStorage` <a name="ResetAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetAzureBlobStorage"></a>

```go
func ResetAzureBlobStorage()
```

##### `ResetFileSystem` <a name="ResetFileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetFileSystem"></a>

```go
func ResetFileSystem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorage">AzureBlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference">AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystem">FileSystem</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference">AppServiceSlotLogsHttpLogsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorageInput">AzureBlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystemInput">FileSystemInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureBlobStorage`<sup>Required</sup> <a name="AzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorage"></a>

```go
func AzureBlobStorage() AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference">AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference</a>

---

##### `FileSystem`<sup>Required</sup> <a name="FileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystem"></a>

```go
func FileSystem() AppServiceSlotLogsHttpLogsFileSystemOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference">AppServiceSlotLogsHttpLogsFileSystemOutputReference</a>

---

##### `AzureBlobStorageInput`<sup>Optional</sup> <a name="AzureBlobStorageInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorageInput"></a>

```go
func AzureBlobStorageInput() AppServiceSlotLogsHttpLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

---

##### `FileSystemInput`<sup>Optional</sup> <a name="FileSystemInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystemInput"></a>

```go
func FileSystemInput() AppServiceSlotLogsHttpLogsFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotLogsHttpLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

---


### AppServiceSlotLogsOutputReference <a name="AppServiceSlotLogsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putApplicationLogs">PutApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putHttpLogs">PutHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetApplicationLogs">ResetApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetDetailedErrorMessagesEnabled">ResetDetailedErrorMessagesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetFailedRequestTracingEnabled">ResetFailedRequestTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetHttpLogs">ResetHttpLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationLogs` <a name="PutApplicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putApplicationLogs"></a>

```go
func PutApplicationLogs(value AppServiceSlotLogsApplicationLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

---

##### `PutHttpLogs` <a name="PutHttpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putHttpLogs"></a>

```go
func PutHttpLogs(value AppServiceSlotLogsHttpLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putHttpLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

---

##### `ResetApplicationLogs` <a name="ResetApplicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetApplicationLogs"></a>

```go
func ResetApplicationLogs()
```

##### `ResetDetailedErrorMessagesEnabled` <a name="ResetDetailedErrorMessagesEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetDetailedErrorMessagesEnabled"></a>

```go
func ResetDetailedErrorMessagesEnabled()
```

##### `ResetFailedRequestTracingEnabled` <a name="ResetFailedRequestTracingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetFailedRequestTracingEnabled"></a>

```go
func ResetFailedRequestTracingEnabled()
```

##### `ResetHttpLogs` <a name="ResetHttpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetHttpLogs"></a>

```go
func ResetHttpLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogs">ApplicationLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference">AppServiceSlotLogsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogs">HttpLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference">AppServiceSlotLogsHttpLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogsInput">ApplicationLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabledInput">DetailedErrorMessagesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabledInput">FailedRequestTracingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogsInput">HttpLogsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabled">DetailedErrorMessagesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabled">FailedRequestTracingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationLogs`<sup>Required</sup> <a name="ApplicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogs"></a>

```go
func ApplicationLogs() AppServiceSlotLogsApplicationLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference">AppServiceSlotLogsApplicationLogsOutputReference</a>

---

##### `HttpLogs`<sup>Required</sup> <a name="HttpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogs"></a>

```go
func HttpLogs() AppServiceSlotLogsHttpLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference">AppServiceSlotLogsHttpLogsOutputReference</a>

---

##### `ApplicationLogsInput`<sup>Optional</sup> <a name="ApplicationLogsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogsInput"></a>

```go
func ApplicationLogsInput() AppServiceSlotLogsApplicationLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

---

##### `DetailedErrorMessagesEnabledInput`<sup>Optional</sup> <a name="DetailedErrorMessagesEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabledInput"></a>

```go
func DetailedErrorMessagesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FailedRequestTracingEnabledInput`<sup>Optional</sup> <a name="FailedRequestTracingEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabledInput"></a>

```go
func FailedRequestTracingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HttpLogsInput`<sup>Optional</sup> <a name="HttpLogsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogsInput"></a>

```go
func HttpLogsInput() AppServiceSlotLogsHttpLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

---

##### `DetailedErrorMessagesEnabled`<sup>Required</sup> <a name="DetailedErrorMessagesEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabled"></a>

```go
func DetailedErrorMessagesEnabled() interface{}
```

- *Type:* interface{}

---

##### `FailedRequestTracingEnabled`<sup>Required</sup> <a name="FailedRequestTracingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabled"></a>

```go
func FailedRequestTracingEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

---


### AppServiceSlotSiteConfigCorsOutputReference <a name="AppServiceSlotSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteConfigCorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotSiteConfigCorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resetSupportCredentials">ResetSupportCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSupportCredentials` <a name="ResetSupportCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```go
func ResetSupportCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentialsInput">SupportCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentials">SupportCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SupportCredentialsInput`<sup>Optional</sup> <a name="SupportCredentialsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```go
func SupportCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `SupportCredentials`<sup>Required</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentials"></a>

```go
func SupportCredentials() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

---


### AppServiceSlotSiteConfigIpRestrictionHeadersList <a name="AppServiceSlotSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteConfigIpRestrictionHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppServiceSlotSiteConfigIpRestrictionHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.get"></a>

```go
func Get(index *f64) AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference <a name="AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteConfigIpRestrictionHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```go
func ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```go
func ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```go
func ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```go
func ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```go
func XAzureFdidInput() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```go
func XFdHealthProbeInput() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```go
func XForwardedForInput() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```go
func XForwardedHostInput() *[]*string
```

- *Type:* *[]*string

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```go
func XAzureFdid() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```go
func XFdHealthProbe() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```go
func XForwardedFor() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```go
func XForwardedHost() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotSiteConfigIpRestrictionList <a name="AppServiceSlotSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteConfigIpRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppServiceSlotSiteConfigIpRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.get"></a>

```go
func Get(index *f64) AppServiceSlotSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotSiteConfigIpRestrictionOutputReference <a name="AppServiceSlotSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteConfigIpRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppServiceSlotSiteConfigIpRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```go
func ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```go
func ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList">AppServiceSlotSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headers"></a>

```go
func Headers() AppServiceSlotSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList">AppServiceSlotSiteConfigIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```go
func ServiceTagInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```go
func VirtualNetworkSubnetIdInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```go
func ServiceTag() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotSiteConfigOutputReference <a name="AppServiceSlotSiteConfigOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotSiteConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putIpRestriction">PutIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putScmIpRestriction">PutScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUseManagedIdentityCredentials">ResetAcrUseManagedIdentityCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUserManagedIdentityClientId">ResetAcrUserManagedIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAlwaysOn">ResetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAppCommandLine">ResetAppCommandLine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAutoSwapSlotName">ResetAutoSwapSlotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDefaultDocuments">ResetDefaultDocuments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDotnetFrameworkVersion">ResetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetFtpsState">ResetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetIpRestriction">ResetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainer">ResetJavaContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainerVersion">ResetJavaContainerVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaVersion">ResetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLinuxFxVersion">ResetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLocalMysqlEnabled">ResetLocalMysqlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetManagedPipelineMode">ResetManagedPipelineMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPhpVersion">ResetPhpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPythonVersion">ResetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingEnabled">ResetRemoteDebuggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingVersion">ResetRemoteDebuggingVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmIpRestriction">ResetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmType">ResetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmUseMainIpRestriction">ResetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetUse32BitWorkerProcess">ResetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetVnetRouteAllEnabled">ResetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWebsocketsEnabled">ResetWebsocketsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWindowsFxVersion">ResetWindowsFxVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCors` <a name="PutCors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putCors"></a>

```go
func PutCors(value AppServiceSlotSiteConfigCors)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

---

##### `PutIpRestriction` <a name="PutIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putIpRestriction"></a>

```go
func PutIpRestriction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScmIpRestriction` <a name="PutScmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putScmIpRestriction"></a>

```go
func PutScmIpRestriction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAcrUseManagedIdentityCredentials` <a name="ResetAcrUseManagedIdentityCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUseManagedIdentityCredentials"></a>

```go
func ResetAcrUseManagedIdentityCredentials()
```

##### `ResetAcrUserManagedIdentityClientId` <a name="ResetAcrUserManagedIdentityClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUserManagedIdentityClientId"></a>

```go
func ResetAcrUserManagedIdentityClientId()
```

##### `ResetAlwaysOn` <a name="ResetAlwaysOn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAlwaysOn"></a>

```go
func ResetAlwaysOn()
```

##### `ResetAppCommandLine` <a name="ResetAppCommandLine" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAppCommandLine"></a>

```go
func ResetAppCommandLine()
```

##### `ResetAutoSwapSlotName` <a name="ResetAutoSwapSlotName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```go
func ResetAutoSwapSlotName()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetCors"></a>

```go
func ResetCors()
```

##### `ResetDefaultDocuments` <a name="ResetDefaultDocuments" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDefaultDocuments"></a>

```go
func ResetDefaultDocuments()
```

##### `ResetDotnetFrameworkVersion` <a name="ResetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```go
func ResetDotnetFrameworkVersion()
```

##### `ResetFtpsState` <a name="ResetFtpsState" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetFtpsState"></a>

```go
func ResetFtpsState()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHealthCheckPath"></a>

```go
func ResetHealthCheckPath()
```

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHttp2Enabled"></a>

```go
func ResetHttp2Enabled()
```

##### `ResetIpRestriction` <a name="ResetIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetIpRestriction"></a>

```go
func ResetIpRestriction()
```

##### `ResetJavaContainer` <a name="ResetJavaContainer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainer"></a>

```go
func ResetJavaContainer()
```

##### `ResetJavaContainerVersion` <a name="ResetJavaContainerVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainerVersion"></a>

```go
func ResetJavaContainerVersion()
```

##### `ResetJavaVersion` <a name="ResetJavaVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaVersion"></a>

```go
func ResetJavaVersion()
```

##### `ResetLinuxFxVersion` <a name="ResetLinuxFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLinuxFxVersion"></a>

```go
func ResetLinuxFxVersion()
```

##### `ResetLocalMysqlEnabled` <a name="ResetLocalMysqlEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLocalMysqlEnabled"></a>

```go
func ResetLocalMysqlEnabled()
```

##### `ResetManagedPipelineMode` <a name="ResetManagedPipelineMode" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetManagedPipelineMode"></a>

```go
func ResetManagedPipelineMode()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetMinTlsVersion"></a>

```go
func ResetMinTlsVersion()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetNumberOfWorkers"></a>

```go
func ResetNumberOfWorkers()
```

##### `ResetPhpVersion` <a name="ResetPhpVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPhpVersion"></a>

```go
func ResetPhpVersion()
```

##### `ResetPythonVersion` <a name="ResetPythonVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPythonVersion"></a>

```go
func ResetPythonVersion()
```

##### `ResetRemoteDebuggingEnabled` <a name="ResetRemoteDebuggingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```go
func ResetRemoteDebuggingEnabled()
```

##### `ResetRemoteDebuggingVersion` <a name="ResetRemoteDebuggingVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```go
func ResetRemoteDebuggingVersion()
```

##### `ResetScmIpRestriction` <a name="ResetScmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmIpRestriction"></a>

```go
func ResetScmIpRestriction()
```

##### `ResetScmType` <a name="ResetScmType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmType"></a>

```go
func ResetScmType()
```

##### `ResetScmUseMainIpRestriction` <a name="ResetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```go
func ResetScmUseMainIpRestriction()
```

##### `ResetUse32BitWorkerProcess` <a name="ResetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```go
func ResetUse32BitWorkerProcess()
```

##### `ResetVnetRouteAllEnabled` <a name="ResetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```go
func ResetVnetRouteAllEnabled()
```

##### `ResetWebsocketsEnabled` <a name="ResetWebsocketsEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```go
func ResetWebsocketsEnabled()
```

##### `ResetWindowsFxVersion` <a name="ResetWindowsFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWindowsFxVersion"></a>

```go
func ResetWindowsFxVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference">AppServiceSlotSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestriction">IpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList">AppServiceSlotSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestriction">ScmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList">AppServiceSlotSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentialsInput">AcrUseManagedIdentityCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientIdInput">AcrUserManagedIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOnInput">AlwaysOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLineInput">AppCommandLineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotNameInput">AutoSwapSlotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.corsInput">CorsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocumentsInput">DefaultDocumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput">DotnetFrameworkVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsStateInput">FtpsStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestrictionInput">IpRestrictionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerInput">JavaContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersionInput">JavaContainerVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersionInput">JavaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersionInput">LinuxFxVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabledInput">LocalMysqlEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineModeInput">ManagedPipelineModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersionInput">PhpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersionInput">PythonVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabledInput">RemoteDebuggingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersionInput">RemoteDebuggingVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestrictionInput">ScmIpRestrictionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmTypeInput">ScmTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">ScmUseMainIpRestrictionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput">Use32BitWorkerProcessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput">VnetRouteAllEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabledInput">WebsocketsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersionInput">WindowsFxVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentials">AcrUseManagedIdentityCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientId">AcrUserManagedIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOn">AlwaysOn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLine">AppCommandLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotName">AutoSwapSlotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocuments">DefaultDocuments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsState">FtpsState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainer">JavaContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersion">JavaContainerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersion">JavaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabled">LocalMysqlEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineMode">ManagedPipelineMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersion">PhpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabled">RemoteDebuggingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersion">RemoteDebuggingVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmType">ScmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersion">WindowsFxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.cors"></a>

```go
func Cors() AppServiceSlotSiteConfigCorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference">AppServiceSlotSiteConfigCorsOutputReference</a>

---

##### `IpRestriction`<sup>Required</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestriction"></a>

```go
func IpRestriction() AppServiceSlotSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList">AppServiceSlotSiteConfigIpRestrictionList</a>

---

##### `ScmIpRestriction`<sup>Required</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestriction"></a>

```go
func ScmIpRestriction() AppServiceSlotSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList">AppServiceSlotSiteConfigScmIpRestrictionList</a>

---

##### `AcrUseManagedIdentityCredentialsInput`<sup>Optional</sup> <a name="AcrUseManagedIdentityCredentialsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentialsInput"></a>

```go
func AcrUseManagedIdentityCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AcrUserManagedIdentityClientIdInput`<sup>Optional</sup> <a name="AcrUserManagedIdentityClientIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientIdInput"></a>

```go
func AcrUserManagedIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `AlwaysOnInput`<sup>Optional</sup> <a name="AlwaysOnInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOnInput"></a>

```go
func AlwaysOnInput() interface{}
```

- *Type:* interface{}

---

##### `AppCommandLineInput`<sup>Optional</sup> <a name="AppCommandLineInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLineInput"></a>

```go
func AppCommandLineInput() *string
```

- *Type:* *string

---

##### `AutoSwapSlotNameInput`<sup>Optional</sup> <a name="AutoSwapSlotNameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```go
func AutoSwapSlotNameInput() *string
```

- *Type:* *string

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.corsInput"></a>

```go
func CorsInput() AppServiceSlotSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

---

##### `DefaultDocumentsInput`<sup>Optional</sup> <a name="DefaultDocumentsInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```go
func DefaultDocumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DotnetFrameworkVersionInput`<sup>Optional</sup> <a name="DotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```go
func DotnetFrameworkVersionInput() *string
```

- *Type:* *string

---

##### `FtpsStateInput`<sup>Optional</sup> <a name="FtpsStateInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsStateInput"></a>

```go
func FtpsStateInput() *string
```

- *Type:* *string

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPathInput"></a>

```go
func HealthCheckPathInput() *string
```

- *Type:* *string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2EnabledInput"></a>

```go
func Http2EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IpRestrictionInput`<sup>Optional</sup> <a name="IpRestrictionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestrictionInput"></a>

```go
func IpRestrictionInput() interface{}
```

- *Type:* interface{}

---

##### `JavaContainerInput`<sup>Optional</sup> <a name="JavaContainerInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerInput"></a>

```go
func JavaContainerInput() *string
```

- *Type:* *string

---

##### `JavaContainerVersionInput`<sup>Optional</sup> <a name="JavaContainerVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersionInput"></a>

```go
func JavaContainerVersionInput() *string
```

- *Type:* *string

---

##### `JavaVersionInput`<sup>Optional</sup> <a name="JavaVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersionInput"></a>

```go
func JavaVersionInput() *string
```

- *Type:* *string

---

##### `LinuxFxVersionInput`<sup>Optional</sup> <a name="LinuxFxVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```go
func LinuxFxVersionInput() *string
```

- *Type:* *string

---

##### `LocalMysqlEnabledInput`<sup>Optional</sup> <a name="LocalMysqlEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabledInput"></a>

```go
func LocalMysqlEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedPipelineModeInput`<sup>Optional</sup> <a name="ManagedPipelineModeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```go
func ManagedPipelineModeInput() *string
```

- *Type:* *string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersionInput"></a>

```go
func MinTlsVersionInput() *string
```

- *Type:* *string

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkersInput"></a>

```go
func NumberOfWorkersInput() *f64
```

- *Type:* *f64

---

##### `PhpVersionInput`<sup>Optional</sup> <a name="PhpVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersionInput"></a>

```go
func PhpVersionInput() *string
```

- *Type:* *string

---

##### `PythonVersionInput`<sup>Optional</sup> <a name="PythonVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersionInput"></a>

```go
func PythonVersionInput() *string
```

- *Type:* *string

---

##### `RemoteDebuggingEnabledInput`<sup>Optional</sup> <a name="RemoteDebuggingEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```go
func RemoteDebuggingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteDebuggingVersionInput`<sup>Optional</sup> <a name="RemoteDebuggingVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```go
func RemoteDebuggingVersionInput() *string
```

- *Type:* *string

---

##### `ScmIpRestrictionInput`<sup>Optional</sup> <a name="ScmIpRestrictionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```go
func ScmIpRestrictionInput() interface{}
```

- *Type:* interface{}

---

##### `ScmTypeInput`<sup>Optional</sup> <a name="ScmTypeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmTypeInput"></a>

```go
func ScmTypeInput() *string
```

- *Type:* *string

---

##### `ScmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="ScmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```go
func ScmUseMainIpRestrictionInput() interface{}
```

- *Type:* interface{}

---

##### `Use32BitWorkerProcessInput`<sup>Optional</sup> <a name="Use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```go
func Use32BitWorkerProcessInput() interface{}
```

- *Type:* interface{}

---

##### `VnetRouteAllEnabledInput`<sup>Optional</sup> <a name="VnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```go
func VnetRouteAllEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WebsocketsEnabledInput`<sup>Optional</sup> <a name="WebsocketsEnabledInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```go
func WebsocketsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WindowsFxVersionInput`<sup>Optional</sup> <a name="WindowsFxVersionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersionInput"></a>

```go
func WindowsFxVersionInput() *string
```

- *Type:* *string

---

##### `AcrUseManagedIdentityCredentials`<sup>Required</sup> <a name="AcrUseManagedIdentityCredentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentials"></a>

```go
func AcrUseManagedIdentityCredentials() interface{}
```

- *Type:* interface{}

---

##### `AcrUserManagedIdentityClientId`<sup>Required</sup> <a name="AcrUserManagedIdentityClientId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientId"></a>

```go
func AcrUserManagedIdentityClientId() *string
```

- *Type:* *string

---

##### `AlwaysOn`<sup>Required</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOn"></a>

```go
func AlwaysOn() interface{}
```

- *Type:* interface{}

---

##### `AppCommandLine`<sup>Required</sup> <a name="AppCommandLine" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLine"></a>

```go
func AppCommandLine() *string
```

- *Type:* *string

---

##### `AutoSwapSlotName`<sup>Required</sup> <a name="AutoSwapSlotName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotName"></a>

```go
func AutoSwapSlotName() *string
```

- *Type:* *string

---

##### `DefaultDocuments`<sup>Required</sup> <a name="DefaultDocuments" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocuments"></a>

```go
func DefaultDocuments() *[]*string
```

- *Type:* *[]*string

---

##### `DotnetFrameworkVersion`<sup>Required</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```go
func DotnetFrameworkVersion() *string
```

- *Type:* *string

---

##### `FtpsState`<sup>Required</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsState"></a>

```go
func FtpsState() *string
```

- *Type:* *string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPath"></a>

```go
func HealthCheckPath() *string
```

- *Type:* *string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2Enabled"></a>

```go
func Http2Enabled() interface{}
```

- *Type:* interface{}

---

##### `JavaContainer`<sup>Required</sup> <a name="JavaContainer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainer"></a>

```go
func JavaContainer() *string
```

- *Type:* *string

---

##### `JavaContainerVersion`<sup>Required</sup> <a name="JavaContainerVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersion"></a>

```go
func JavaContainerVersion() *string
```

- *Type:* *string

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersion"></a>

```go
func JavaVersion() *string
```

- *Type:* *string

---

##### `LinuxFxVersion`<sup>Required</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersion"></a>

```go
func LinuxFxVersion() *string
```

- *Type:* *string

---

##### `LocalMysqlEnabled`<sup>Required</sup> <a name="LocalMysqlEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabled"></a>

```go
func LocalMysqlEnabled() interface{}
```

- *Type:* interface{}

---

##### `ManagedPipelineMode`<sup>Required</sup> <a name="ManagedPipelineMode" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineMode"></a>

```go
func ManagedPipelineMode() *string
```

- *Type:* *string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersion"></a>

```go
func MinTlsVersion() *string
```

- *Type:* *string

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkers"></a>

```go
func NumberOfWorkers() *f64
```

- *Type:* *f64

---

##### `PhpVersion`<sup>Required</sup> <a name="PhpVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersion"></a>

```go
func PhpVersion() *string
```

- *Type:* *string

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersion"></a>

```go
func PythonVersion() *string
```

- *Type:* *string

---

##### `RemoteDebuggingEnabled`<sup>Required</sup> <a name="RemoteDebuggingEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```go
func RemoteDebuggingEnabled() interface{}
```

- *Type:* interface{}

---

##### `RemoteDebuggingVersion`<sup>Required</sup> <a name="RemoteDebuggingVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```go
func RemoteDebuggingVersion() *string
```

- *Type:* *string

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmType"></a>

```go
func ScmType() *string
```

- *Type:* *string

---

##### `ScmUseMainIpRestriction`<sup>Required</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```go
func ScmUseMainIpRestriction() interface{}
```

- *Type:* interface{}

---

##### `Use32BitWorkerProcess`<sup>Required</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```go
func Use32BitWorkerProcess() interface{}
```

- *Type:* interface{}

---

##### `VnetRouteAllEnabled`<sup>Required</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```go
func VnetRouteAllEnabled() interface{}
```

- *Type:* interface{}

---

##### `WebsocketsEnabled`<sup>Required</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabled"></a>

```go
func WebsocketsEnabled() interface{}
```

- *Type:* interface{}

---

##### `WindowsFxVersion`<sup>Required</sup> <a name="WindowsFxVersion" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersion"></a>

```go
func WindowsFxVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

---


### AppServiceSlotSiteConfigScmIpRestrictionHeadersList <a name="AppServiceSlotSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteConfigScmIpRestrictionHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppServiceSlotSiteConfigScmIpRestrictionHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.get"></a>

```go
func Get(index *f64) AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference <a name="AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```go
func ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```go
func ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```go
func ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```go
func ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```go
func XAzureFdidInput() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```go
func XFdHealthProbeInput() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```go
func XForwardedForInput() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```go
func XForwardedHostInput() *[]*string
```

- *Type:* *[]*string

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```go
func XAzureFdid() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```go
func XFdHealthProbe() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```go
func XForwardedFor() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```go
func XForwardedHost() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotSiteConfigScmIpRestrictionList <a name="AppServiceSlotSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteConfigScmIpRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppServiceSlotSiteConfigScmIpRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.get"></a>

```go
func Get(index *f64) AppServiceSlotSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotSiteConfigScmIpRestrictionOutputReference <a name="AppServiceSlotSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteConfigScmIpRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppServiceSlotSiteConfigScmIpRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```go
func ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```go
func ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList">AppServiceSlotSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```go
func Headers() AppServiceSlotSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList">AppServiceSlotSiteConfigScmIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```go
func ServiceTagInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```go
func VirtualNetworkSubnetIdInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```go
func ServiceTag() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotSiteCredentialList <a name="AppServiceSlotSiteCredentialList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteCredentialList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppServiceSlotSiteCredentialList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.get"></a>

```go
func Get(index *f64) AppServiceSlotSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AppServiceSlotSiteCredentialOutputReference <a name="AppServiceSlotSiteCredentialOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotSiteCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppServiceSlotSiteCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential">AppServiceSlotSiteCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() AppServiceSlotSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential">AppServiceSlotSiteCredential</a>

---


### AppServiceSlotStorageAccountList <a name="AppServiceSlotStorageAccountList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotStorageAccountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppServiceSlotStorageAccountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.get"></a>

```go
func Get(index *f64) AppServiceSlotStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotStorageAccountOutputReference <a name="AppServiceSlotStorageAccountOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotStorageAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppServiceSlotStorageAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resetMountPath"></a>

```go
func ResetMountPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareName">ShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKeyInput"></a>

```go
func AccessKeyInput() *string
```

- *Type:* *string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareNameInput"></a>

```go
func ShareNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareName"></a>

```go
func ShareName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppServiceSlotTimeoutsOutputReference <a name="AppServiceSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/appserviceslot"

appserviceslot.NewAppServiceSlotTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



