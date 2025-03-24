# `appConfigurationFeature` Submodule <a name="`appConfigurationFeature` Submodule" id="@cdktf/provider-azurerm.appConfigurationFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppConfigurationFeature <a name="AppConfigurationFeature" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature azurerm_app_configuration_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.NewAppConfigurationFeature(scope Construct, id *string, config AppConfigurationFeatureConfig) AppConfigurationFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig">AppConfigurationFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig">AppConfigurationFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTargetingFilter">PutTargetingFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimewindowFilter">PutTimewindowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLocked">ResetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetPercentageFilterValue">ResetPercentageFilterValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTargetingFilter">ResetTargetingFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimewindowFilter">ResetTimewindowFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetingFilter` <a name="PutTargetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTargetingFilter"></a>

```go
func PutTargetingFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTargetingFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts"></a>

```go
func PutTimeouts(value AppConfigurationFeatureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>

---

##### `PutTimewindowFilter` <a name="PutTimewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimewindowFilter"></a>

```go
func PutTimewindowFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.putTimewindowFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetId"></a>

```go
func ResetId()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetKey"></a>

```go
func ResetKey()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetLocked` <a name="ResetLocked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetLocked"></a>

```go
func ResetLocked()
```

##### `ResetPercentageFilterValue` <a name="ResetPercentageFilterValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetPercentageFilterValue"></a>

```go
func ResetPercentageFilterValue()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetingFilter` <a name="ResetTargetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTargetingFilter"></a>

```go
func ResetTargetingFilter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimewindowFilter` <a name="ResetTimewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.resetTimewindowFilter"></a>

```go
func ResetTimewindowFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppConfigurationFeature resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.AppConfigurationFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.AppConfigurationFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.AppConfigurationFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.AppConfigurationFeature_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppConfigurationFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppConfigurationFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppConfigurationFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppConfigurationFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilter">TargetingFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList">AppConfigurationFeatureTargetingFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference">AppConfigurationFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilter">TimewindowFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList">AppConfigurationFeatureTimewindowFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreIdInput">ConfigurationStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lockedInput">LockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValueInput">PercentageFilterValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilterInput">TargetingFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilterInput">TimewindowFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreId">ConfigurationStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.locked">Locked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValue">PercentageFilterValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TargetingFilter`<sup>Required</sup> <a name="TargetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilter"></a>

```go
func TargetingFilter() AppConfigurationFeatureTargetingFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList">AppConfigurationFeatureTargetingFilterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeouts"></a>

```go
func Timeouts() AppConfigurationFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference">AppConfigurationFeatureTimeoutsOutputReference</a>

---

##### `TimewindowFilter`<sup>Required</sup> <a name="TimewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilter"></a>

```go
func TimewindowFilter() AppConfigurationFeatureTimewindowFilterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList">AppConfigurationFeatureTimewindowFilterList</a>

---

##### `ConfigurationStoreIdInput`<sup>Optional</sup> <a name="ConfigurationStoreIdInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreIdInput"></a>

```go
func ConfigurationStoreIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LockedInput`<sup>Optional</sup> <a name="LockedInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.lockedInput"></a>

```go
func LockedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PercentageFilterValueInput`<sup>Optional</sup> <a name="PercentageFilterValueInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValueInput"></a>

```go
func PercentageFilterValueInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetingFilterInput`<sup>Optional</sup> <a name="TargetingFilterInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.targetingFilterInput"></a>

```go
func TargetingFilterInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimewindowFilterInput`<sup>Optional</sup> <a name="TimewindowFilterInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.timewindowFilterInput"></a>

```go
func TimewindowFilterInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationStoreId`<sup>Required</sup> <a name="ConfigurationStoreId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.configurationStoreId"></a>

```go
func ConfigurationStoreId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.locked"></a>

```go
func Locked() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PercentageFilterValue`<sup>Required</sup> <a name="PercentageFilterValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.percentageFilterValue"></a>

```go
func PercentageFilterValue() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppConfigurationFeatureConfig <a name="AppConfigurationFeatureConfig" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

&appconfigurationfeature.AppConfigurationFeatureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigurationStoreId: *string,
	Name: *string,
	Description: *string,
	Enabled: interface{},
	Etag: *string,
	Id: *string,
	Key: *string,
	Label: *string,
	Locked: interface{},
	PercentageFilterValue: *f64,
	Tags: *map[string]*string,
	TargetingFilter: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.appConfigurationFeature.AppConfigurationFeatureTimeouts,
	TimewindowFilter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.configurationStoreId">ConfigurationStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.locked">Locked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.percentageFilterValue">PercentageFilterValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.targetingFilter">TargetingFilter</a></code> | <code>interface{}</code> | targeting_filter block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timewindowFilter">TimewindowFilter</a></code> | <code>interface{}</code> | timewindow_filter block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationStoreId`<sup>Required</sup> <a name="ConfigurationStoreId" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.configurationStoreId"></a>

```go
ConfigurationStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#configuration_store_id AppConfigurationFeature#configuration_store_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#description AppConfigurationFeature#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#enabled AppConfigurationFeature#enabled}.

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#etag AppConfigurationFeature#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#id AppConfigurationFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#key AppConfigurationFeature#key}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#label AppConfigurationFeature#label}.

---

##### `Locked`<sup>Optional</sup> <a name="Locked" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.locked"></a>

```go
Locked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#locked AppConfigurationFeature#locked}.

---

##### `PercentageFilterValue`<sup>Optional</sup> <a name="PercentageFilterValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.percentageFilterValue"></a>

```go
PercentageFilterValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#percentage_filter_value AppConfigurationFeature#percentage_filter_value}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#tags AppConfigurationFeature#tags}.

---

##### `TargetingFilter`<sup>Optional</sup> <a name="TargetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.targetingFilter"></a>

```go
TargetingFilter interface{}
```

- *Type:* interface{}

targeting_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#targeting_filter AppConfigurationFeature#targeting_filter}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timeouts"></a>

```go
Timeouts AppConfigurationFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts">AppConfigurationFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#timeouts AppConfigurationFeature#timeouts}

---

##### `TimewindowFilter`<sup>Optional</sup> <a name="TimewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureConfig.property.timewindowFilter"></a>

```go
TimewindowFilter interface{}
```

- *Type:* interface{}

timewindow_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#timewindow_filter AppConfigurationFeature#timewindow_filter}

---

### AppConfigurationFeatureTargetingFilter <a name="AppConfigurationFeatureTargetingFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

&appconfigurationfeature.AppConfigurationFeatureTargetingFilter {
	DefaultRolloutPercentage: *f64,
	Groups: interface{},
	Users: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.defaultRolloutPercentage">DefaultRolloutPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#default_rollout_percentage AppConfigurationFeature#default_rollout_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.groups">Groups</a></code> | <code>interface{}</code> | groups block. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.users">Users</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#users AppConfigurationFeature#users}. |

---

##### `DefaultRolloutPercentage`<sup>Required</sup> <a name="DefaultRolloutPercentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.defaultRolloutPercentage"></a>

```go
DefaultRolloutPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#default_rollout_percentage AppConfigurationFeature#default_rollout_percentage}.

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.groups"></a>

```go
Groups interface{}
```

- *Type:* interface{}

groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#groups AppConfigurationFeature#groups}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilter.property.users"></a>

```go
Users *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#users AppConfigurationFeature#users}.

---

### AppConfigurationFeatureTargetingFilterGroups <a name="AppConfigurationFeatureTargetingFilterGroups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

&appconfigurationfeature.AppConfigurationFeatureTargetingFilterGroups {
	Name: *string,
	RolloutPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.rolloutPercentage">RolloutPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#rollout_percentage AppConfigurationFeature#rollout_percentage}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#name AppConfigurationFeature#name}.

---

##### `RolloutPercentage`<sup>Required</sup> <a name="RolloutPercentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroups.property.rolloutPercentage"></a>

```go
RolloutPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#rollout_percentage AppConfigurationFeature#rollout_percentage}.

---

### AppConfigurationFeatureTimeouts <a name="AppConfigurationFeatureTimeouts" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

&appconfigurationfeature.AppConfigurationFeatureTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#create AppConfigurationFeature#create}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#delete AppConfigurationFeature#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#read AppConfigurationFeature#read}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#update AppConfigurationFeature#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#create AppConfigurationFeature#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#delete AppConfigurationFeature#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#read AppConfigurationFeature#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#update AppConfigurationFeature#update}.

---

### AppConfigurationFeatureTimewindowFilter <a name="AppConfigurationFeatureTimewindowFilter" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

&appconfigurationfeature.AppConfigurationFeatureTimewindowFilter {
	End: *string,
	Start: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.end">End</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#end AppConfigurationFeature#end}. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.start">Start</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#start AppConfigurationFeature#start}. |

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.end"></a>

```go
End *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#end AppConfigurationFeature#end}.

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilter.property.start"></a>

```go
Start *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/app_configuration_feature#start AppConfigurationFeature#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppConfigurationFeatureTargetingFilterGroupsList <a name="AppConfigurationFeatureTargetingFilterGroupsList" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.NewAppConfigurationFeatureTargetingFilterGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppConfigurationFeatureTargetingFilterGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.get"></a>

```go
func Get(index *f64) AppConfigurationFeatureTargetingFilterGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppConfigurationFeatureTargetingFilterGroupsOutputReference <a name="AppConfigurationFeatureTargetingFilterGroupsOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.NewAppConfigurationFeatureTargetingFilterGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppConfigurationFeatureTargetingFilterGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentageInput">RolloutPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentage">RolloutPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RolloutPercentageInput`<sup>Optional</sup> <a name="RolloutPercentageInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentageInput"></a>

```go
func RolloutPercentageInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RolloutPercentage`<sup>Required</sup> <a name="RolloutPercentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.rolloutPercentage"></a>

```go
func RolloutPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppConfigurationFeatureTargetingFilterList <a name="AppConfigurationFeatureTargetingFilterList" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.NewAppConfigurationFeatureTargetingFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppConfigurationFeatureTargetingFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.get"></a>

```go
func Get(index *f64) AppConfigurationFeatureTargetingFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppConfigurationFeatureTargetingFilterOutputReference <a name="AppConfigurationFeatureTargetingFilterOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.NewAppConfigurationFeatureTargetingFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppConfigurationFeatureTargetingFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.putGroups">PutGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroups` <a name="PutGroups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.putGroups"></a>

```go
func PutGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.putGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetGroups"></a>

```go
func ResetGroups()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.resetUsers"></a>

```go
func ResetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groups">Groups</a></code> | <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList">AppConfigurationFeatureTargetingFilterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentageInput">DefaultRolloutPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groupsInput">GroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.usersInput">UsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentage">DefaultRolloutPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.users">Users</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groups"></a>

```go
func Groups() AppConfigurationFeatureTargetingFilterGroupsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterGroupsList">AppConfigurationFeatureTargetingFilterGroupsList</a>

---

##### `DefaultRolloutPercentageInput`<sup>Optional</sup> <a name="DefaultRolloutPercentageInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentageInput"></a>

```go
func DefaultRolloutPercentageInput() *f64
```

- *Type:* *f64

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.groupsInput"></a>

```go
func GroupsInput() interface{}
```

- *Type:* interface{}

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.usersInput"></a>

```go
func UsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultRolloutPercentage`<sup>Required</sup> <a name="DefaultRolloutPercentage" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.defaultRolloutPercentage"></a>

```go
func DefaultRolloutPercentage() *f64
```

- *Type:* *f64

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.users"></a>

```go
func Users() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTargetingFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppConfigurationFeatureTimeoutsOutputReference <a name="AppConfigurationFeatureTimeoutsOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.NewAppConfigurationFeatureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppConfigurationFeatureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppConfigurationFeatureTimewindowFilterList <a name="AppConfigurationFeatureTimewindowFilterList" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.NewAppConfigurationFeatureTimewindowFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppConfigurationFeatureTimewindowFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.get"></a>

```go
func Get(index *f64) AppConfigurationFeatureTimewindowFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppConfigurationFeatureTimewindowFilterOutputReference <a name="AppConfigurationFeatureTimewindowFilterOutputReference" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/appconfigurationfeature"

appconfigurationfeature.NewAppConfigurationFeatureTimewindowFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppConfigurationFeatureTimewindowFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.resetStart"></a>

```go
func ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appConfigurationFeature.AppConfigurationFeatureTimewindowFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



