# `logicAppStandard` Submodule <a name="`logicAppStandard` Submodule" id="@cdktf/provider-azurerm.logicAppStandard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppStandard <a name="LogicAppStandard" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard azurerm_logic_app_standard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandard(scope Construct, id *string, config LogicAppStandardConfig) LogicAppStandard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig">LogicAppStandardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig">LogicAppStandardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString">PutConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig">PutSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetAppSettings">ResetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetBundleVersion">ResetBundleVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientAffinityEnabled">ResetClientAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientCertificateMode">ResetClientCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetHttpsOnly">ResetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetSiteConfig">ResetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetStorageAccountShareName">ResetStorageAccountShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetUseExtensionBundle">ResetUseExtensionBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionString` <a name="PutConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString"></a>

```go
func PutConnectionString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity"></a>

```go
func PutIdentity(value LogicAppStandardIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---

##### `PutSiteConfig` <a name="PutSiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig"></a>

```go
func PutSiteConfig(value LogicAppStandardSiteConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts"></a>

```go
func PutTimeouts(value LogicAppStandardTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

---

##### `ResetAppSettings` <a name="ResetAppSettings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetAppSettings"></a>

```go
func ResetAppSettings()
```

##### `ResetBundleVersion` <a name="ResetBundleVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetBundleVersion"></a>

```go
func ResetBundleVersion()
```

##### `ResetClientAffinityEnabled` <a name="ResetClientAffinityEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientAffinityEnabled"></a>

```go
func ResetClientAffinityEnabled()
```

##### `ResetClientCertificateMode` <a name="ResetClientCertificateMode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientCertificateMode"></a>

```go
func ResetClientCertificateMode()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHttpsOnly` <a name="ResetHttpsOnly" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetHttpsOnly"></a>

```go
func ResetHttpsOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetSiteConfig` <a name="ResetSiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetSiteConfig"></a>

```go
func ResetSiteConfig()
```

##### `ResetStorageAccountShareName` <a name="ResetStorageAccountShareName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetStorageAccountShareName"></a>

```go
func ResetStorageAccountShareName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseExtensionBundle` <a name="ResetUseExtensionBundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetUseExtensionBundle"></a>

```go
func ResetUseExtensionBundle()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVirtualNetworkSubnetId"></a>

```go
func ResetVirtualNetworkSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogicAppStandard resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.LogicAppStandard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.LogicAppStandard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.LogicAppStandard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.LogicAppStandard_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogicAppStandard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogicAppStandard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogicAppStandard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppStandard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionString">ConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList">LogicAppStandardConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.customDomainVerificationId">CustomDomainVerificationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.defaultHostname">DefaultHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference">LogicAppStandardIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.outboundIpAddresses">OutboundIpAddresses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.possibleOutboundIpAddresses">PossibleOutboundIpAddresses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference">LogicAppStandardSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteCredential">SiteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList">LogicAppStandardSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference">LogicAppStandardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanIdInput">AppServicePlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettingsInput">AppSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersionInput">BundleVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabledInput">ClientAffinityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateModeInput">ClientCertificateModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionStringInput">ConnectionStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnlyInput">HttpsOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfigInput">SiteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareNameInput">StorageAccountShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundleInput">UseExtensionBundleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanId">AppServicePlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettings">AppSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersion">BundleVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabled">ClientAffinityEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateMode">ClientCertificateMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnly">HttpsOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareName">StorageAccountShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundle">UseExtensionBundle</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionString"></a>

```go
func ConnectionString() LogicAppStandardConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList">LogicAppStandardConnectionStringList</a>

---

##### `CustomDomainVerificationId`<sup>Required</sup> <a name="CustomDomainVerificationId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.customDomainVerificationId"></a>

```go
func CustomDomainVerificationId() *string
```

- *Type:* *string

---

##### `DefaultHostname`<sup>Required</sup> <a name="DefaultHostname" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.defaultHostname"></a>

```go
func DefaultHostname() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identity"></a>

```go
func Identity() LogicAppStandardIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference">LogicAppStandardIdentityOutputReference</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `OutboundIpAddresses`<sup>Required</sup> <a name="OutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.outboundIpAddresses"></a>

```go
func OutboundIpAddresses() *string
```

- *Type:* *string

---

##### `PossibleOutboundIpAddresses`<sup>Required</sup> <a name="PossibleOutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.possibleOutboundIpAddresses"></a>

```go
func PossibleOutboundIpAddresses() *string
```

- *Type:* *string

---

##### `SiteConfig`<sup>Required</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfig"></a>

```go
func SiteConfig() LogicAppStandardSiteConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference">LogicAppStandardSiteConfigOutputReference</a>

---

##### `SiteCredential`<sup>Required</sup> <a name="SiteCredential" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteCredential"></a>

```go
func SiteCredential() LogicAppStandardSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList">LogicAppStandardSiteCredentialList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeouts"></a>

```go
func Timeouts() LogicAppStandardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference">LogicAppStandardTimeoutsOutputReference</a>

---

##### `AppServicePlanIdInput`<sup>Optional</sup> <a name="AppServicePlanIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanIdInput"></a>

```go
func AppServicePlanIdInput() *string
```

- *Type:* *string

---

##### `AppSettingsInput`<sup>Optional</sup> <a name="AppSettingsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettingsInput"></a>

```go
func AppSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BundleVersionInput`<sup>Optional</sup> <a name="BundleVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersionInput"></a>

```go
func BundleVersionInput() *string
```

- *Type:* *string

---

##### `ClientAffinityEnabledInput`<sup>Optional</sup> <a name="ClientAffinityEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabledInput"></a>

```go
func ClientAffinityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ClientCertificateModeInput`<sup>Optional</sup> <a name="ClientCertificateModeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateModeInput"></a>

```go
func ClientCertificateModeInput() *string
```

- *Type:* *string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionStringInput"></a>

```go
func ConnectionStringInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HttpsOnlyInput`<sup>Optional</sup> <a name="HttpsOnlyInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnlyInput"></a>

```go
func HttpsOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identityInput"></a>

```go
func IdentityInput() LogicAppStandardIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SiteConfigInput`<sup>Optional</sup> <a name="SiteConfigInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfigInput"></a>

```go
func SiteConfigInput() LogicAppStandardSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKeyInput"></a>

```go
func StorageAccountAccessKeyInput() *string
```

- *Type:* *string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountNameInput"></a>

```go
func StorageAccountNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountShareNameInput`<sup>Optional</sup> <a name="StorageAccountShareNameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareNameInput"></a>

```go
func StorageAccountShareNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseExtensionBundleInput`<sup>Optional</sup> <a name="UseExtensionBundleInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundleInput"></a>

```go
func UseExtensionBundleInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetIdInput"></a>

```go
func VirtualNetworkSubnetIdInput() *string
```

- *Type:* *string

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanId"></a>

```go
func AppServicePlanId() *string
```

- *Type:* *string

---

##### `AppSettings`<sup>Required</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettings"></a>

```go
func AppSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BundleVersion`<sup>Required</sup> <a name="BundleVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersion"></a>

```go
func BundleVersion() *string
```

- *Type:* *string

---

##### `ClientAffinityEnabled`<sup>Required</sup> <a name="ClientAffinityEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabled"></a>

```go
func ClientAffinityEnabled() interface{}
```

- *Type:* interface{}

---

##### `ClientCertificateMode`<sup>Required</sup> <a name="ClientCertificateMode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateMode"></a>

```go
func ClientCertificateMode() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnly"></a>

```go
func HttpsOnly() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKey"></a>

```go
func StorageAccountAccessKey() *string
```

- *Type:* *string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `StorageAccountShareName`<sup>Required</sup> <a name="StorageAccountShareName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareName"></a>

```go
func StorageAccountShareName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseExtensionBundle`<sup>Required</sup> <a name="UseExtensionBundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundle"></a>

```go
func UseExtensionBundle() interface{}
```

- *Type:* interface{}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppStandardConfig <a name="LogicAppStandardConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppServicePlanId: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	StorageAccountAccessKey: *string,
	StorageAccountName: *string,
	AppSettings: *map[string]*string,
	BundleVersion: *string,
	ClientAffinityEnabled: interface{},
	ClientCertificateMode: *string,
	ConnectionString: interface{},
	Enabled: interface{},
	HttpsOnly: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.logicAppStandard.LogicAppStandardIdentity,
	SiteConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.logicAppStandard.LogicAppStandardSiteConfig,
	StorageAccountShareName: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.logicAppStandard.LogicAppStandardTimeouts,
	UseExtensionBundle: interface{},
	Version: *string,
	VirtualNetworkSubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appServicePlanId">AppServicePlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#location LogicAppStandard#location}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appSettings">AppSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#app_settings LogicAppStandard#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.bundleVersion">BundleVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#bundle_version LogicAppStandard#bundle_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientAffinityEnabled">ClientAffinityEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientCertificateMode">ClientCertificateMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connectionString">ConnectionString</a></code> | <code>interface{}</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#enabled LogicAppStandard#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.httpsOnly">HttpsOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#https_only LogicAppStandard#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#id LogicAppStandard#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountShareName">StorageAccountShareName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#tags LogicAppStandard#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.useExtensionBundle">UseExtensionBundle</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#version LogicAppStandard#version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appServicePlanId"></a>

```go
AppServicePlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#location LogicAppStandard#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}.

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountAccessKey"></a>

```go
StorageAccountAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountName"></a>

```go
StorageAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}.

---

##### `AppSettings`<sup>Optional</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appSettings"></a>

```go
AppSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#app_settings LogicAppStandard#app_settings}.

---

##### `BundleVersion`<sup>Optional</sup> <a name="BundleVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.bundleVersion"></a>

```go
BundleVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#bundle_version LogicAppStandard#bundle_version}.

---

##### `ClientAffinityEnabled`<sup>Optional</sup> <a name="ClientAffinityEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientAffinityEnabled"></a>

```go
ClientAffinityEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}.

---

##### `ClientCertificateMode`<sup>Optional</sup> <a name="ClientCertificateMode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientCertificateMode"></a>

```go
ClientCertificateMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connectionString"></a>

```go
ConnectionString interface{}
```

- *Type:* interface{}

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#connection_string LogicAppStandard#connection_string}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#enabled LogicAppStandard#enabled}.

---

##### `HttpsOnly`<sup>Optional</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.httpsOnly"></a>

```go
HttpsOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#https_only LogicAppStandard#https_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#id LogicAppStandard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.identity"></a>

```go
Identity LogicAppStandardIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#identity LogicAppStandard#identity}

---

##### `SiteConfig`<sup>Optional</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.siteConfig"></a>

```go
SiteConfig LogicAppStandardSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#site_config LogicAppStandard#site_config}

---

##### `StorageAccountShareName`<sup>Optional</sup> <a name="StorageAccountShareName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountShareName"></a>

```go
StorageAccountShareName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#tags LogicAppStandard#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.timeouts"></a>

```go
Timeouts LogicAppStandardTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#timeouts LogicAppStandard#timeouts}

---

##### `UseExtensionBundle`<sup>Optional</sup> <a name="UseExtensionBundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.useExtensionBundle"></a>

```go
UseExtensionBundle interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#version LogicAppStandard#version}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.virtualNetworkSubnetId"></a>

```go
VirtualNetworkSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardConnectionString <a name="LogicAppStandardConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardConnectionString {
	Name: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#type LogicAppStandard#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#value LogicAppStandard#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#type LogicAppStandard#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#value LogicAppStandard#value}.

---

### LogicAppStandardIdentity <a name="LogicAppStandardIdentity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#type LogicAppStandard#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#identity_ids LogicAppStandard#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#type LogicAppStandard#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#identity_ids LogicAppStandard#identity_ids}.

---

### LogicAppStandardSiteConfig <a name="LogicAppStandardSiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardSiteConfig {
	AlwaysOn: interface{},
	AppScaleLimit: *f64,
	Cors: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.logicAppStandard.LogicAppStandardSiteConfigCors,
	DotnetFrameworkVersion: *string,
	ElasticInstanceMinimum: *f64,
	FtpsState: *string,
	HealthCheckPath: *string,
	Http2Enabled: interface{},
	IpRestriction: interface{},
	LinuxFxVersion: *string,
	MinTlsVersion: *string,
	PreWarmedInstanceCount: *f64,
	PublicNetworkAccessEnabled: interface{},
	RuntimeScaleMonitoringEnabled: interface{},
	ScmIpRestriction: interface{},
	ScmMinTlsVersion: *string,
	ScmType: *string,
	ScmUseMainIpRestriction: interface{},
	Use32BitWorkerProcess: interface{},
	VnetRouteAllEnabled: interface{},
	WebsocketsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.alwaysOn">AlwaysOn</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#always_on LogicAppStandard#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.appScaleLimit">AppScaleLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#app_scale_limit LogicAppStandard#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#dotnet_framework_version LogicAppStandard#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#elastic_instance_minimum LogicAppStandard#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ftpsState">FtpsState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#ftps_state LogicAppStandard#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#health_check_path LogicAppStandard#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.http2Enabled">Http2Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#http2_enabled LogicAppStandard#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ipRestriction">IpRestriction</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#ip_restriction LogicAppStandard#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#linux_fx_version LogicAppStandard#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#min_tls_version LogicAppStandard#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#pre_warmed_instance_count LogicAppStandard#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#public_network_access_enabled LogicAppStandard#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#runtime_scale_monitoring_enabled LogicAppStandard#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmIpRestriction">ScmIpRestriction</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#scm_ip_restriction LogicAppStandard#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmMinTlsVersion">ScmMinTlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#scm_min_tls_version LogicAppStandard#scm_min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmType">ScmType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#scm_type LogicAppStandard#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#scm_use_main_ip_restriction LogicAppStandard#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#use_32_bit_worker_process LogicAppStandard#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#vnet_route_all_enabled LogicAppStandard#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#websockets_enabled LogicAppStandard#websockets_enabled}. |

---

##### `AlwaysOn`<sup>Optional</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.alwaysOn"></a>

```go
AlwaysOn interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#always_on LogicAppStandard#always_on}.

---

##### `AppScaleLimit`<sup>Optional</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.appScaleLimit"></a>

```go
AppScaleLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#app_scale_limit LogicAppStandard#app_scale_limit}.

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.cors"></a>

```go
Cors LogicAppStandardSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#cors LogicAppStandard#cors}

---

##### `DotnetFrameworkVersion`<sup>Optional</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.dotnetFrameworkVersion"></a>

```go
DotnetFrameworkVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#dotnet_framework_version LogicAppStandard#dotnet_framework_version}.

---

##### `ElasticInstanceMinimum`<sup>Optional</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.elasticInstanceMinimum"></a>

```go
ElasticInstanceMinimum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#elastic_instance_minimum LogicAppStandard#elastic_instance_minimum}.

---

##### `FtpsState`<sup>Optional</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ftpsState"></a>

```go
FtpsState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#ftps_state LogicAppStandard#ftps_state}.

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.healthCheckPath"></a>

```go
HealthCheckPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#health_check_path LogicAppStandard#health_check_path}.

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.http2Enabled"></a>

```go
Http2Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#http2_enabled LogicAppStandard#http2_enabled}.

---

##### `IpRestriction`<sup>Optional</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ipRestriction"></a>

```go
IpRestriction interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#ip_restriction LogicAppStandard#ip_restriction}.

---

##### `LinuxFxVersion`<sup>Optional</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.linuxFxVersion"></a>

```go
LinuxFxVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#linux_fx_version LogicAppStandard#linux_fx_version}.

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.minTlsVersion"></a>

```go
MinTlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#min_tls_version LogicAppStandard#min_tls_version}.

---

##### `PreWarmedInstanceCount`<sup>Optional</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.preWarmedInstanceCount"></a>

```go
PreWarmedInstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#pre_warmed_instance_count LogicAppStandard#pre_warmed_instance_count}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#public_network_access_enabled LogicAppStandard#public_network_access_enabled}.

---

##### `RuntimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```go
RuntimeScaleMonitoringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#runtime_scale_monitoring_enabled LogicAppStandard#runtime_scale_monitoring_enabled}.

---

##### `ScmIpRestriction`<sup>Optional</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmIpRestriction"></a>

```go
ScmIpRestriction interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#scm_ip_restriction LogicAppStandard#scm_ip_restriction}.

---

##### `ScmMinTlsVersion`<sup>Optional</sup> <a name="ScmMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmMinTlsVersion"></a>

```go
ScmMinTlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#scm_min_tls_version LogicAppStandard#scm_min_tls_version}.

---

##### `ScmType`<sup>Optional</sup> <a name="ScmType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmType"></a>

```go
ScmType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#scm_type LogicAppStandard#scm_type}.

---

##### `ScmUseMainIpRestriction`<sup>Optional</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmUseMainIpRestriction"></a>

```go
ScmUseMainIpRestriction interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#scm_use_main_ip_restriction LogicAppStandard#scm_use_main_ip_restriction}.

---

##### `Use32BitWorkerProcess`<sup>Optional</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.use32BitWorkerProcess"></a>

```go
Use32BitWorkerProcess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#use_32_bit_worker_process LogicAppStandard#use_32_bit_worker_process}.

---

##### `VnetRouteAllEnabled`<sup>Optional</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.vnetRouteAllEnabled"></a>

```go
VnetRouteAllEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#vnet_route_all_enabled LogicAppStandard#vnet_route_all_enabled}.

---

##### `WebsocketsEnabled`<sup>Optional</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.websocketsEnabled"></a>

```go
WebsocketsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#websockets_enabled LogicAppStandard#websockets_enabled}.

---

### LogicAppStandardSiteConfigCors <a name="LogicAppStandardSiteConfigCors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardSiteConfigCors {
	AllowedOrigins: *[]*string,
	SupportCredentials: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#allowed_origins LogicAppStandard#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.supportCredentials">SupportCredentials</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#support_credentials LogicAppStandard#support_credentials}. |

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#allowed_origins LogicAppStandard#allowed_origins}.

---

##### `SupportCredentials`<sup>Optional</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.supportCredentials"></a>

```go
SupportCredentials interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#support_credentials LogicAppStandard#support_credentials}.

---

### LogicAppStandardSiteConfigIpRestriction <a name="LogicAppStandardSiteConfigIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardSiteConfigIpRestriction {
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#action LogicAppStandard#action}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.headers">Headers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#action LogicAppStandard#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.serviceTag"></a>

```go
ServiceTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```go
VirtualNetworkSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardSiteConfigIpRestrictionHeaders <a name="LogicAppStandardSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardSiteConfigIpRestrictionHeaders {
	XAzureFdid: *[]*string,
	XFdHealthProbe: *[]*string,
	XForwardedFor: *[]*string,
	XForwardedHost: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```go
XAzureFdid *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```go
XFdHealthProbe *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```go
XForwardedFor *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```go
XForwardedHost *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}.

---

### LogicAppStandardSiteConfigScmIpRestriction <a name="LogicAppStandardSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardSiteConfigScmIpRestriction {
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#action LogicAppStandard#action}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.headers">Headers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#action LogicAppStandard#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#headers LogicAppStandard#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#ip_address LogicAppStandard#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#name LogicAppStandard#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#priority LogicAppStandard#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.serviceTag"></a>

```go
ServiceTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#service_tag LogicAppStandard#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```go
VirtualNetworkSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardSiteConfigScmIpRestrictionHeaders <a name="LogicAppStandardSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders {
	XAzureFdid: *[]*string,
	XFdHealthProbe: *[]*string,
	XForwardedFor: *[]*string,
	XForwardedHost: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```go
XAzureFdid *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```go
XFdHealthProbe *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```go
XForwardedFor *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```go
XForwardedHost *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}.

---

### LogicAppStandardSiteCredential <a name="LogicAppStandardSiteCredential" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardSiteCredential {

}
```


### LogicAppStandardTimeouts <a name="LogicAppStandardTimeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

&logicappstandard.LogicAppStandardTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#create LogicAppStandard#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#delete LogicAppStandard#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#read LogicAppStandard#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#update LogicAppStandard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#create LogicAppStandard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#delete LogicAppStandard#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#read LogicAppStandard#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/logic_app_standard#update LogicAppStandard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppStandardConnectionStringList <a name="LogicAppStandardConnectionStringList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardConnectionStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogicAppStandardConnectionStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get"></a>

```go
func Get(index *f64) LogicAppStandardConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppStandardConnectionStringOutputReference <a name="LogicAppStandardConnectionStringOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardConnectionStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogicAppStandardConnectionStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppStandardIdentityOutputReference <a name="LogicAppStandardIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppStandardIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppStandardIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---


### LogicAppStandardSiteConfigCorsOutputReference <a name="LogicAppStandardSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteConfigCorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppStandardSiteConfigCorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resetSupportCredentials">ResetSupportCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSupportCredentials` <a name="ResetSupportCredentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```go
func ResetSupportCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentialsInput">SupportCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials">SupportCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SupportCredentialsInput`<sup>Optional</sup> <a name="SupportCredentialsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```go
func SupportCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `SupportCredentials`<sup>Required</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials"></a>

```go
func SupportCredentials() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppStandardSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---


### LogicAppStandardSiteConfigIpRestrictionHeadersList <a name="LogicAppStandardSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteConfigIpRestrictionHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogicAppStandardSiteConfigIpRestrictionHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get"></a>

```go
func Get(index *f64) LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference <a name="LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```go
func ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```go
func ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```go
func ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```go
func ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```go
func XAzureFdidInput() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```go
func XFdHealthProbeInput() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```go
func XForwardedForInput() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```go
func XForwardedHostInput() *[]*string
```

- *Type:* *[]*string

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```go
func XAzureFdid() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```go
func XFdHealthProbe() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```go
func XForwardedFor() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```go
func XForwardedHost() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppStandardSiteConfigIpRestrictionList <a name="LogicAppStandardSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteConfigIpRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogicAppStandardSiteConfigIpRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get"></a>

```go
func Get(index *f64) LogicAppStandardSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppStandardSiteConfigIpRestrictionOutputReference <a name="LogicAppStandardSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteConfigIpRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogicAppStandardSiteConfigIpRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```go
func ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```go
func ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList">LogicAppStandardSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers"></a>

```go
func Headers() LogicAppStandardSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList">LogicAppStandardSiteConfigIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```go
func ServiceTagInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```go
func VirtualNetworkSubnetIdInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```go
func ServiceTag() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppStandardSiteConfigOutputReference <a name="LogicAppStandardSiteConfigOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppStandardSiteConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction">PutIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction">PutScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAlwaysOn">ResetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAppScaleLimit">ResetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetDotnetFrameworkVersion">ResetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetElasticInstanceMinimum">ResetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetFtpsState">ResetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetIpRestriction">ResetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetLinuxFxVersion">ResetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPreWarmedInstanceCount">ResetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">ResetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmIpRestriction">ResetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmMinTlsVersion">ResetScmMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmType">ResetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmUseMainIpRestriction">ResetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetUse32BitWorkerProcess">ResetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetVnetRouteAllEnabled">ResetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetWebsocketsEnabled">ResetWebsocketsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCors` <a name="PutCors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors"></a>

```go
func PutCors(value LogicAppStandardSiteConfigCors)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---

##### `PutIpRestriction` <a name="PutIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction"></a>

```go
func PutIpRestriction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScmIpRestriction` <a name="PutScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction"></a>

```go
func PutScmIpRestriction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlwaysOn` <a name="ResetAlwaysOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAlwaysOn"></a>

```go
func ResetAlwaysOn()
```

##### `ResetAppScaleLimit` <a name="ResetAppScaleLimit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAppScaleLimit"></a>

```go
func ResetAppScaleLimit()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetCors"></a>

```go
func ResetCors()
```

##### `ResetDotnetFrameworkVersion` <a name="ResetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```go
func ResetDotnetFrameworkVersion()
```

##### `ResetElasticInstanceMinimum` <a name="ResetElasticInstanceMinimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```go
func ResetElasticInstanceMinimum()
```

##### `ResetFtpsState` <a name="ResetFtpsState" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetFtpsState"></a>

```go
func ResetFtpsState()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHealthCheckPath"></a>

```go
func ResetHealthCheckPath()
```

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHttp2Enabled"></a>

```go
func ResetHttp2Enabled()
```

##### `ResetIpRestriction` <a name="ResetIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetIpRestriction"></a>

```go
func ResetIpRestriction()
```

##### `ResetLinuxFxVersion` <a name="ResetLinuxFxVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetLinuxFxVersion"></a>

```go
func ResetLinuxFxVersion()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetMinTlsVersion"></a>

```go
func ResetMinTlsVersion()
```

##### `ResetPreWarmedInstanceCount` <a name="ResetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```go
func ResetPreWarmedInstanceCount()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetRuntimeScaleMonitoringEnabled` <a name="ResetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```go
func ResetRuntimeScaleMonitoringEnabled()
```

##### `ResetScmIpRestriction` <a name="ResetScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmIpRestriction"></a>

```go
func ResetScmIpRestriction()
```

##### `ResetScmMinTlsVersion` <a name="ResetScmMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmMinTlsVersion"></a>

```go
func ResetScmMinTlsVersion()
```

##### `ResetScmType` <a name="ResetScmType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmType"></a>

```go
func ResetScmType()
```

##### `ResetScmUseMainIpRestriction` <a name="ResetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```go
func ResetScmUseMainIpRestriction()
```

##### `ResetUse32BitWorkerProcess` <a name="ResetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```go
func ResetUse32BitWorkerProcess()
```

##### `ResetVnetRouteAllEnabled` <a name="ResetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```go
func ResetVnetRouteAllEnabled()
```

##### `ResetWebsocketsEnabled` <a name="ResetWebsocketsEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```go
func ResetWebsocketsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.autoSwapSlotName">AutoSwapSlotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference">LogicAppStandardSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestriction">IpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList">LogicAppStandardSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestriction">ScmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList">LogicAppStandardSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOnInput">AlwaysOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimitInput">AppScaleLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.corsInput">CorsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersionInput">DotnetFrameworkVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimumInput">ElasticInstanceMinimumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsStateInput">FtpsStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestrictionInput">IpRestrictionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersionInput">LinuxFxVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCountInput">PreWarmedInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">RuntimeScaleMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestrictionInput">ScmIpRestrictionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersionInput">ScmMinTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmTypeInput">ScmTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">ScmUseMainIpRestrictionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcessInput">Use32BitWorkerProcessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabledInput">VnetRouteAllEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabledInput">WebsocketsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOn">AlwaysOn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimit">AppScaleLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsState">FtpsState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion">ScmMinTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmType">ScmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoSwapSlotName`<sup>Required</sup> <a name="AutoSwapSlotName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.autoSwapSlotName"></a>

```go
func AutoSwapSlotName() *string
```

- *Type:* *string

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.cors"></a>

```go
func Cors() LogicAppStandardSiteConfigCorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference">LogicAppStandardSiteConfigCorsOutputReference</a>

---

##### `IpRestriction`<sup>Required</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestriction"></a>

```go
func IpRestriction() LogicAppStandardSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList">LogicAppStandardSiteConfigIpRestrictionList</a>

---

##### `ScmIpRestriction`<sup>Required</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestriction"></a>

```go
func ScmIpRestriction() LogicAppStandardSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList">LogicAppStandardSiteConfigScmIpRestrictionList</a>

---

##### `AlwaysOnInput`<sup>Optional</sup> <a name="AlwaysOnInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOnInput"></a>

```go
func AlwaysOnInput() interface{}
```

- *Type:* interface{}

---

##### `AppScaleLimitInput`<sup>Optional</sup> <a name="AppScaleLimitInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimitInput"></a>

```go
func AppScaleLimitInput() *f64
```

- *Type:* *f64

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.corsInput"></a>

```go
func CorsInput() LogicAppStandardSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---

##### `DotnetFrameworkVersionInput`<sup>Optional</sup> <a name="DotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```go
func DotnetFrameworkVersionInput() *string
```

- *Type:* *string

---

##### `ElasticInstanceMinimumInput`<sup>Optional</sup> <a name="ElasticInstanceMinimumInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```go
func ElasticInstanceMinimumInput() *f64
```

- *Type:* *f64

---

##### `FtpsStateInput`<sup>Optional</sup> <a name="FtpsStateInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsStateInput"></a>

```go
func FtpsStateInput() *string
```

- *Type:* *string

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPathInput"></a>

```go
func HealthCheckPathInput() *string
```

- *Type:* *string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2EnabledInput"></a>

```go
func Http2EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IpRestrictionInput`<sup>Optional</sup> <a name="IpRestrictionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestrictionInput"></a>

```go
func IpRestrictionInput() interface{}
```

- *Type:* interface{}

---

##### `LinuxFxVersionInput`<sup>Optional</sup> <a name="LinuxFxVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```go
func LinuxFxVersionInput() *string
```

- *Type:* *string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersionInput"></a>

```go
func MinTlsVersionInput() *string
```

- *Type:* *string

---

##### `PreWarmedInstanceCountInput`<sup>Optional</sup> <a name="PreWarmedInstanceCountInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```go
func PreWarmedInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RuntimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="RuntimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```go
func RuntimeScaleMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScmIpRestrictionInput`<sup>Optional</sup> <a name="ScmIpRestrictionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```go
func ScmIpRestrictionInput() interface{}
```

- *Type:* interface{}

---

##### `ScmMinTlsVersionInput`<sup>Optional</sup> <a name="ScmMinTlsVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersionInput"></a>

```go
func ScmMinTlsVersionInput() *string
```

- *Type:* *string

---

##### `ScmTypeInput`<sup>Optional</sup> <a name="ScmTypeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmTypeInput"></a>

```go
func ScmTypeInput() *string
```

- *Type:* *string

---

##### `ScmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="ScmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```go
func ScmUseMainIpRestrictionInput() interface{}
```

- *Type:* interface{}

---

##### `Use32BitWorkerProcessInput`<sup>Optional</sup> <a name="Use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```go
func Use32BitWorkerProcessInput() interface{}
```

- *Type:* interface{}

---

##### `VnetRouteAllEnabledInput`<sup>Optional</sup> <a name="VnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```go
func VnetRouteAllEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WebsocketsEnabledInput`<sup>Optional</sup> <a name="WebsocketsEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```go
func WebsocketsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AlwaysOn`<sup>Required</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOn"></a>

```go
func AlwaysOn() interface{}
```

- *Type:* interface{}

---

##### `AppScaleLimit`<sup>Required</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimit"></a>

```go
func AppScaleLimit() *f64
```

- *Type:* *f64

---

##### `DotnetFrameworkVersion`<sup>Required</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```go
func DotnetFrameworkVersion() *string
```

- *Type:* *string

---

##### `ElasticInstanceMinimum`<sup>Required</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```go
func ElasticInstanceMinimum() *f64
```

- *Type:* *f64

---

##### `FtpsState`<sup>Required</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsState"></a>

```go
func FtpsState() *string
```

- *Type:* *string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPath"></a>

```go
func HealthCheckPath() *string
```

- *Type:* *string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2Enabled"></a>

```go
func Http2Enabled() interface{}
```

- *Type:* interface{}

---

##### `LinuxFxVersion`<sup>Required</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersion"></a>

```go
func LinuxFxVersion() *string
```

- *Type:* *string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersion"></a>

```go
func MinTlsVersion() *string
```

- *Type:* *string

---

##### `PreWarmedInstanceCount`<sup>Required</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```go
func PreWarmedInstanceCount() *f64
```

- *Type:* *f64

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `RuntimeScaleMonitoringEnabled`<sup>Required</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```go
func RuntimeScaleMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `ScmMinTlsVersion`<sup>Required</sup> <a name="ScmMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion"></a>

```go
func ScmMinTlsVersion() *string
```

- *Type:* *string

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmType"></a>

```go
func ScmType() *string
```

- *Type:* *string

---

##### `ScmUseMainIpRestriction`<sup>Required</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```go
func ScmUseMainIpRestriction() interface{}
```

- *Type:* interface{}

---

##### `Use32BitWorkerProcess`<sup>Required</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```go
func Use32BitWorkerProcess() interface{}
```

- *Type:* interface{}

---

##### `VnetRouteAllEnabled`<sup>Required</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```go
func VnetRouteAllEnabled() interface{}
```

- *Type:* interface{}

---

##### `WebsocketsEnabled`<sup>Required</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabled"></a>

```go
func WebsocketsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppStandardSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---


### LogicAppStandardSiteConfigScmIpRestrictionHeadersList <a name="LogicAppStandardSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteConfigScmIpRestrictionHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogicAppStandardSiteConfigScmIpRestrictionHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get"></a>

```go
func Get(index *f64) LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference <a name="LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```go
func ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```go
func ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```go
func ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```go
func ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```go
func XAzureFdidInput() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```go
func XFdHealthProbeInput() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```go
func XForwardedForInput() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```go
func XForwardedHostInput() *[]*string
```

- *Type:* *[]*string

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```go
func XAzureFdid() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```go
func XFdHealthProbe() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```go
func XForwardedFor() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```go
func XForwardedHost() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppStandardSiteConfigScmIpRestrictionList <a name="LogicAppStandardSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteConfigScmIpRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogicAppStandardSiteConfigScmIpRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get"></a>

```go
func Get(index *f64) LogicAppStandardSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppStandardSiteConfigScmIpRestrictionOutputReference <a name="LogicAppStandardSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteConfigScmIpRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogicAppStandardSiteConfigScmIpRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```go
func ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```go
func ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList">LogicAppStandardSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```go
func Headers() LogicAppStandardSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList">LogicAppStandardSiteConfigScmIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```go
func ServiceTagInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```go
func VirtualNetworkSubnetIdInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```go
func ServiceTag() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogicAppStandardSiteCredentialList <a name="LogicAppStandardSiteCredentialList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteCredentialList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogicAppStandardSiteCredentialList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get"></a>

```go
func Get(index *f64) LogicAppStandardSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LogicAppStandardSiteCredentialOutputReference <a name="LogicAppStandardSiteCredentialOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardSiteCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogicAppStandardSiteCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential">LogicAppStandardSiteCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() LogicAppStandardSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential">LogicAppStandardSiteCredential</a>

---


### LogicAppStandardTimeoutsOutputReference <a name="LogicAppStandardTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/logicappstandard"

logicappstandard.NewLogicAppStandardTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogicAppStandardTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



