# `mediaLiveEvent` Submodule <a name="`mediaLiveEvent` Submodule" id="@cdktf/provider-azurerm.mediaLiveEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaLiveEvent <a name="MediaLiveEvent" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event azurerm_media_live_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEvent(scope Construct, id *string, config MediaLiveEventConfig) MediaLiveEvent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig">MediaLiveEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig">MediaLiveEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putCrossSiteAccessPolicy">PutCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding">PutEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview">PutPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetAutoStartEnabled">ResetAutoStartEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetCrossSiteAccessPolicy">ResetCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetHostnamePrefix">ResetHostnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetStreamOptions">ResetStreamOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTranscriptionLanguages">ResetTranscriptionLanguages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetUseStaticHostname">ResetUseStaticHostname</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCrossSiteAccessPolicy` <a name="PutCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putCrossSiteAccessPolicy"></a>

```go
func PutCrossSiteAccessPolicy(value MediaLiveEventCrossSiteAccessPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putCrossSiteAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

---

##### `PutEncoding` <a name="PutEncoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding"></a>

```go
func PutEncoding(value MediaLiveEventEncoding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

---

##### `PutInput` <a name="PutInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput"></a>

```go
func PutInput(value MediaLiveEventInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

---

##### `PutPreview` <a name="PutPreview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview"></a>

```go
func PutPreview(value MediaLiveEventPreview)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts"></a>

```go
func PutTimeouts(value MediaLiveEventTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a>

---

##### `ResetAutoStartEnabled` <a name="ResetAutoStartEnabled" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetAutoStartEnabled"></a>

```go
func ResetAutoStartEnabled()
```

##### `ResetCrossSiteAccessPolicy` <a name="ResetCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetCrossSiteAccessPolicy"></a>

```go
func ResetCrossSiteAccessPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetHostnamePrefix` <a name="ResetHostnamePrefix" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetHostnamePrefix"></a>

```go
func ResetHostnamePrefix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetId"></a>

```go
func ResetId()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetPreview"></a>

```go
func ResetPreview()
```

##### `ResetStreamOptions` <a name="ResetStreamOptions" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetStreamOptions"></a>

```go
func ResetStreamOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTranscriptionLanguages` <a name="ResetTranscriptionLanguages" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTranscriptionLanguages"></a>

```go
func ResetTranscriptionLanguages()
```

##### `ResetUseStaticHostname` <a name="ResetUseStaticHostname" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetUseStaticHostname"></a>

```go
func ResetUseStaticHostname()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MediaLiveEvent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.MediaLiveEvent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.MediaLiveEvent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.MediaLiveEvent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.MediaLiveEvent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MediaLiveEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaLiveEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaLiveEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MediaLiveEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicy">CrossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference">MediaLiveEventCrossSiteAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encoding">Encoding</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference">MediaLiveEventEncodingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.input">Input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference">MediaLiveEventInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.preview">Preview</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference">MediaLiveEventPreviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference">MediaLiveEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabledInput">AutoStartEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicyInput">CrossSiteAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encodingInput">EncodingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefixInput">HostnamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.inputInput">InputInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountNameInput">MediaServicesAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.previewInput">PreviewInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptionsInput">StreamOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguagesInput">TranscriptionLanguagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostnameInput">UseStaticHostnameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabled">AutoStartEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptions">StreamOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguages">TranscriptionLanguages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostname">UseStaticHostname</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CrossSiteAccessPolicy`<sup>Required</sup> <a name="CrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicy"></a>

```go
func CrossSiteAccessPolicy() MediaLiveEventCrossSiteAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference">MediaLiveEventCrossSiteAccessPolicyOutputReference</a>

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encoding"></a>

```go
func Encoding() MediaLiveEventEncodingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference">MediaLiveEventEncodingOutputReference</a>

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.input"></a>

```go
func Input() MediaLiveEventInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference">MediaLiveEventInputOutputReference</a>

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.preview"></a>

```go
func Preview() MediaLiveEventPreviewOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference">MediaLiveEventPreviewOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeouts"></a>

```go
func Timeouts() MediaLiveEventTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference">MediaLiveEventTimeoutsOutputReference</a>

---

##### `AutoStartEnabledInput`<sup>Optional</sup> <a name="AutoStartEnabledInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabledInput"></a>

```go
func AutoStartEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CrossSiteAccessPolicyInput`<sup>Optional</sup> <a name="CrossSiteAccessPolicyInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicyInput"></a>

```go
func CrossSiteAccessPolicyInput() MediaLiveEventCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encodingInput"></a>

```go
func EncodingInput() MediaLiveEventEncoding
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

---

##### `HostnamePrefixInput`<sup>Optional</sup> <a name="HostnamePrefixInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefixInput"></a>

```go
func HostnamePrefixInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.inputInput"></a>

```go
func InputInput() MediaLiveEventInput
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MediaServicesAccountNameInput`<sup>Optional</sup> <a name="MediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountNameInput"></a>

```go
func MediaServicesAccountNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.previewInput"></a>

```go
func PreviewInput() MediaLiveEventPreview
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StreamOptionsInput`<sup>Optional</sup> <a name="StreamOptionsInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptionsInput"></a>

```go
func StreamOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TranscriptionLanguagesInput`<sup>Optional</sup> <a name="TranscriptionLanguagesInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguagesInput"></a>

```go
func TranscriptionLanguagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UseStaticHostnameInput`<sup>Optional</sup> <a name="UseStaticHostnameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostnameInput"></a>

```go
func UseStaticHostnameInput() interface{}
```

- *Type:* interface{}

---

##### `AutoStartEnabled`<sup>Required</sup> <a name="AutoStartEnabled" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabled"></a>

```go
func AutoStartEnabled() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefix"></a>

```go
func HostnamePrefix() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountName"></a>

```go
func MediaServicesAccountName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StreamOptions`<sup>Required</sup> <a name="StreamOptions" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptions"></a>

```go
func StreamOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TranscriptionLanguages`<sup>Required</sup> <a name="TranscriptionLanguages" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguages"></a>

```go
func TranscriptionLanguages() *[]*string
```

- *Type:* *[]*string

---

##### `UseStaticHostname`<sup>Required</sup> <a name="UseStaticHostname" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostname"></a>

```go
func UseStaticHostname() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaLiveEventConfig <a name="MediaLiveEventConfig" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

&medialiveevent.MediaLiveEventConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Input: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mediaLiveEvent.MediaLiveEventInput,
	Location: *string,
	MediaServicesAccountName: *string,
	Name: *string,
	ResourceGroupName: *string,
	AutoStartEnabled: interface{},
	CrossSiteAccessPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy,
	Description: *string,
	Encoding: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mediaLiveEvent.MediaLiveEventEncoding,
	HostnamePrefix: *string,
	Id: *string,
	Preview: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mediaLiveEvent.MediaLiveEventPreview,
	StreamOptions: *[]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mediaLiveEvent.MediaLiveEventTimeouts,
	TranscriptionLanguages: *[]*string,
	UseStaticHostname: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.input">Input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#location MediaLiveEvent#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#media_services_account_name MediaLiveEvent#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#name MediaLiveEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#resource_group_name MediaLiveEvent#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.autoStartEnabled">AutoStartEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#auto_start_enabled MediaLiveEvent#auto_start_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.crossSiteAccessPolicy">CrossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a></code> | cross_site_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#description MediaLiveEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.encoding">Encoding</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a></code> | encoding block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#hostname_prefix MediaLiveEvent#hostname_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#id MediaLiveEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.preview">Preview</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a></code> | preview block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.streamOptions">StreamOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#stream_options MediaLiveEvent#stream_options}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#tags MediaLiveEvent#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.transcriptionLanguages">TranscriptionLanguages</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#transcription_languages MediaLiveEvent#transcription_languages}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.useStaticHostname">UseStaticHostname</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#use_static_hostname MediaLiveEvent#use_static_hostname}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.input"></a>

```go
Input MediaLiveEventInput
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#input MediaLiveEvent#input}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#location MediaLiveEvent#location}.

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.mediaServicesAccountName"></a>

```go
MediaServicesAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#media_services_account_name MediaLiveEvent#media_services_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#name MediaLiveEvent#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#resource_group_name MediaLiveEvent#resource_group_name}.

---

##### `AutoStartEnabled`<sup>Optional</sup> <a name="AutoStartEnabled" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.autoStartEnabled"></a>

```go
AutoStartEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#auto_start_enabled MediaLiveEvent#auto_start_enabled}.

---

##### `CrossSiteAccessPolicy`<sup>Optional</sup> <a name="CrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.crossSiteAccessPolicy"></a>

```go
CrossSiteAccessPolicy MediaLiveEventCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

cross_site_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#cross_site_access_policy MediaLiveEvent#cross_site_access_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#description MediaLiveEvent#description}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.encoding"></a>

```go
Encoding MediaLiveEventEncoding
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

encoding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#encoding MediaLiveEvent#encoding}

---

##### `HostnamePrefix`<sup>Optional</sup> <a name="HostnamePrefix" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.hostnamePrefix"></a>

```go
HostnamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#hostname_prefix MediaLiveEvent#hostname_prefix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#id MediaLiveEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.preview"></a>

```go
Preview MediaLiveEventPreview
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

preview block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#preview MediaLiveEvent#preview}

---

##### `StreamOptions`<sup>Optional</sup> <a name="StreamOptions" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.streamOptions"></a>

```go
StreamOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#stream_options MediaLiveEvent#stream_options}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#tags MediaLiveEvent#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.timeouts"></a>

```go
Timeouts MediaLiveEventTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#timeouts MediaLiveEvent#timeouts}

---

##### `TranscriptionLanguages`<sup>Optional</sup> <a name="TranscriptionLanguages" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.transcriptionLanguages"></a>

```go
TranscriptionLanguages *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#transcription_languages MediaLiveEvent#transcription_languages}.

---

##### `UseStaticHostname`<sup>Optional</sup> <a name="UseStaticHostname" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.useStaticHostname"></a>

```go
UseStaticHostname interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#use_static_hostname MediaLiveEvent#use_static_hostname}.

---

### MediaLiveEventCrossSiteAccessPolicy <a name="MediaLiveEventCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

&medialiveevent.MediaLiveEventCrossSiteAccessPolicy {
	ClientAccessPolicy: *string,
	CrossDomainPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.clientAccessPolicy">ClientAccessPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#client_access_policy MediaLiveEvent#client_access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.crossDomainPolicy">CrossDomainPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#cross_domain_policy MediaLiveEvent#cross_domain_policy}. |

---

##### `ClientAccessPolicy`<sup>Optional</sup> <a name="ClientAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.clientAccessPolicy"></a>

```go
ClientAccessPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#client_access_policy MediaLiveEvent#client_access_policy}.

---

##### `CrossDomainPolicy`<sup>Optional</sup> <a name="CrossDomainPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.crossDomainPolicy"></a>

```go
CrossDomainPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#cross_domain_policy MediaLiveEvent#cross_domain_policy}.

---

### MediaLiveEventEncoding <a name="MediaLiveEventEncoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

&medialiveevent.MediaLiveEventEncoding {
	KeyFrameInterval: *string,
	PresetName: *string,
	StretchMode: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.keyFrameInterval">KeyFrameInterval</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#key_frame_interval MediaLiveEvent#key_frame_interval}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.presetName">PresetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#preset_name MediaLiveEvent#preset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.stretchMode">StretchMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#stretch_mode MediaLiveEvent#stretch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#type MediaLiveEvent#type}. |

---

##### `KeyFrameInterval`<sup>Optional</sup> <a name="KeyFrameInterval" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.keyFrameInterval"></a>

```go
KeyFrameInterval *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#key_frame_interval MediaLiveEvent#key_frame_interval}.

---

##### `PresetName`<sup>Optional</sup> <a name="PresetName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.presetName"></a>

```go
PresetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#preset_name MediaLiveEvent#preset_name}.

---

##### `StretchMode`<sup>Optional</sup> <a name="StretchMode" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.stretchMode"></a>

```go
StretchMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#stretch_mode MediaLiveEvent#stretch_mode}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#type MediaLiveEvent#type}.

---

### MediaLiveEventInput <a name="MediaLiveEventInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

&medialiveevent.MediaLiveEventInput {
	AccessToken: *string,
	IpAccessControlAllow: interface{},
	KeyFrameIntervalDuration: *string,
	StreamingProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.accessToken">AccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#access_token MediaLiveEvent#access_token}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.ipAccessControlAllow">IpAccessControlAllow</a></code> | <code>interface{}</code> | ip_access_control_allow block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.keyFrameIntervalDuration">KeyFrameIntervalDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#key_frame_interval_duration MediaLiveEvent#key_frame_interval_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.streamingProtocol">StreamingProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#streaming_protocol MediaLiveEvent#streaming_protocol}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#access_token MediaLiveEvent#access_token}.

---

##### `IpAccessControlAllow`<sup>Optional</sup> <a name="IpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.ipAccessControlAllow"></a>

```go
IpAccessControlAllow interface{}
```

- *Type:* interface{}

ip_access_control_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}

---

##### `KeyFrameIntervalDuration`<sup>Optional</sup> <a name="KeyFrameIntervalDuration" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.keyFrameIntervalDuration"></a>

```go
KeyFrameIntervalDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#key_frame_interval_duration MediaLiveEvent#key_frame_interval_duration}.

---

##### `StreamingProtocol`<sup>Optional</sup> <a name="StreamingProtocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.streamingProtocol"></a>

```go
StreamingProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#streaming_protocol MediaLiveEvent#streaming_protocol}.

---

### MediaLiveEventInputEndpoint <a name="MediaLiveEventInputEndpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

&medialiveevent.MediaLiveEventInputEndpoint {

}
```


### MediaLiveEventInputIpAccessControlAllow <a name="MediaLiveEventInputIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

&medialiveevent.MediaLiveEventInputIpAccessControlAllow {
	Address: *string,
	Name: *string,
	SubnetPrefixLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#address MediaLiveEvent#address}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#name MediaLiveEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#address MediaLiveEvent#address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#name MediaLiveEvent#name}.

---

##### `SubnetPrefixLength`<sup>Optional</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.subnetPrefixLength"></a>

```go
SubnetPrefixLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}.

---

### MediaLiveEventPreview <a name="MediaLiveEventPreview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

&medialiveevent.MediaLiveEventPreview {
	AlternativeMediaId: *string,
	IpAccessControlAllow: interface{},
	PreviewLocator: *string,
	StreamingPolicyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.alternativeMediaId">AlternativeMediaId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#alternative_media_id MediaLiveEvent#alternative_media_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.ipAccessControlAllow">IpAccessControlAllow</a></code> | <code>interface{}</code> | ip_access_control_allow block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.previewLocator">PreviewLocator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#preview_locator MediaLiveEvent#preview_locator}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.streamingPolicyName">StreamingPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#streaming_policy_name MediaLiveEvent#streaming_policy_name}. |

---

##### `AlternativeMediaId`<sup>Optional</sup> <a name="AlternativeMediaId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.alternativeMediaId"></a>

```go
AlternativeMediaId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#alternative_media_id MediaLiveEvent#alternative_media_id}.

---

##### `IpAccessControlAllow`<sup>Optional</sup> <a name="IpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.ipAccessControlAllow"></a>

```go
IpAccessControlAllow interface{}
```

- *Type:* interface{}

ip_access_control_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}

---

##### `PreviewLocator`<sup>Optional</sup> <a name="PreviewLocator" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.previewLocator"></a>

```go
PreviewLocator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#preview_locator MediaLiveEvent#preview_locator}.

---

##### `StreamingPolicyName`<sup>Optional</sup> <a name="StreamingPolicyName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.streamingPolicyName"></a>

```go
StreamingPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#streaming_policy_name MediaLiveEvent#streaming_policy_name}.

---

### MediaLiveEventPreviewEndpoint <a name="MediaLiveEventPreviewEndpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

&medialiveevent.MediaLiveEventPreviewEndpoint {

}
```


### MediaLiveEventPreviewIpAccessControlAllow <a name="MediaLiveEventPreviewIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

&medialiveevent.MediaLiveEventPreviewIpAccessControlAllow {
	Address: *string,
	Name: *string,
	SubnetPrefixLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#address MediaLiveEvent#address}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#name MediaLiveEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#address MediaLiveEvent#address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#name MediaLiveEvent#name}.

---

##### `SubnetPrefixLength`<sup>Optional</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.subnetPrefixLength"></a>

```go
SubnetPrefixLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}.

---

### MediaLiveEventTimeouts <a name="MediaLiveEventTimeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

&medialiveevent.MediaLiveEventTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#create MediaLiveEvent#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#delete MediaLiveEvent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#read MediaLiveEvent#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#update MediaLiveEvent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#create MediaLiveEvent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#delete MediaLiveEvent#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#read MediaLiveEvent#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/media_live_event#update MediaLiveEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaLiveEventCrossSiteAccessPolicyOutputReference <a name="MediaLiveEventCrossSiteAccessPolicyOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventCrossSiteAccessPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaLiveEventCrossSiteAccessPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy">ResetClientAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy">ResetCrossDomainPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientAccessPolicy` <a name="ResetClientAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy"></a>

```go
func ResetClientAccessPolicy()
```

##### `ResetCrossDomainPolicy` <a name="ResetCrossDomainPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy"></a>

```go
func ResetCrossDomainPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput">ClientAccessPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput">CrossDomainPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy">ClientAccessPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy">CrossDomainPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAccessPolicyInput`<sup>Optional</sup> <a name="ClientAccessPolicyInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput"></a>

```go
func ClientAccessPolicyInput() *string
```

- *Type:* *string

---

##### `CrossDomainPolicyInput`<sup>Optional</sup> <a name="CrossDomainPolicyInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput"></a>

```go
func CrossDomainPolicyInput() *string
```

- *Type:* *string

---

##### `ClientAccessPolicy`<sup>Required</sup> <a name="ClientAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy"></a>

```go
func ClientAccessPolicy() *string
```

- *Type:* *string

---

##### `CrossDomainPolicy`<sup>Required</sup> <a name="CrossDomainPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy"></a>

```go
func CrossDomainPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaLiveEventCrossSiteAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

---


### MediaLiveEventEncodingOutputReference <a name="MediaLiveEventEncodingOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventEncodingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaLiveEventEncodingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetKeyFrameInterval">ResetKeyFrameInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetPresetName">ResetPresetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetStretchMode">ResetStretchMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyFrameInterval` <a name="ResetKeyFrameInterval" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetKeyFrameInterval"></a>

```go
func ResetKeyFrameInterval()
```

##### `ResetPresetName` <a name="ResetPresetName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetPresetName"></a>

```go
func ResetPresetName()
```

##### `ResetStretchMode` <a name="ResetStretchMode" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetStretchMode"></a>

```go
func ResetStretchMode()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameIntervalInput">KeyFrameIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetNameInput">PresetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchModeInput">StretchModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameInterval">KeyFrameInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetName">PresetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchMode">StretchMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyFrameIntervalInput`<sup>Optional</sup> <a name="KeyFrameIntervalInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameIntervalInput"></a>

```go
func KeyFrameIntervalInput() *string
```

- *Type:* *string

---

##### `PresetNameInput`<sup>Optional</sup> <a name="PresetNameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetNameInput"></a>

```go
func PresetNameInput() *string
```

- *Type:* *string

---

##### `StretchModeInput`<sup>Optional</sup> <a name="StretchModeInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchModeInput"></a>

```go
func StretchModeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `KeyFrameInterval`<sup>Required</sup> <a name="KeyFrameInterval" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameInterval"></a>

```go
func KeyFrameInterval() *string
```

- *Type:* *string

---

##### `PresetName`<sup>Required</sup> <a name="PresetName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetName"></a>

```go
func PresetName() *string
```

- *Type:* *string

---

##### `StretchMode`<sup>Required</sup> <a name="StretchMode" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchMode"></a>

```go
func StretchMode() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaLiveEventEncoding
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

---


### MediaLiveEventInputEndpointList <a name="MediaLiveEventInputEndpointList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventInputEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaLiveEventInputEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.get"></a>

```go
func Get(index *f64) MediaLiveEventInputEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MediaLiveEventInputEndpointOutputReference <a name="MediaLiveEventInputEndpointOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventInputEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaLiveEventInputEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint">MediaLiveEventInputEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaLiveEventInputEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint">MediaLiveEventInputEndpoint</a>

---


### MediaLiveEventInputIpAccessControlAllowList <a name="MediaLiveEventInputIpAccessControlAllowList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventInputIpAccessControlAllowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaLiveEventInputIpAccessControlAllowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.get"></a>

```go
func Get(index *f64) MediaLiveEventInputIpAccessControlAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaLiveEventInputIpAccessControlAllowOutputReference <a name="MediaLiveEventInputIpAccessControlAllowOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventInputIpAccessControlAllowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaLiveEventInputIpAccessControlAllowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetSubnetPrefixLength">ResetSubnetPrefixLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSubnetPrefixLength` <a name="ResetSubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetSubnetPrefixLength"></a>

```go
func ResetSubnetPrefixLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput">SubnetPrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SubnetPrefixLengthInput`<sup>Optional</sup> <a name="SubnetPrefixLengthInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput"></a>

```go
func SubnetPrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SubnetPrefixLength`<sup>Required</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLength"></a>

```go
func SubnetPrefixLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaLiveEventInputOutputReference <a name="MediaLiveEventInputOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaLiveEventInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.putIpAccessControlAllow">PutIpAccessControlAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetIpAccessControlAllow">ResetIpAccessControlAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetKeyFrameIntervalDuration">ResetKeyFrameIntervalDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetStreamingProtocol">ResetStreamingProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAccessControlAllow` <a name="PutIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.putIpAccessControlAllow"></a>

```go
func PutIpAccessControlAllow(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.putIpAccessControlAllow.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetIpAccessControlAllow` <a name="ResetIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetIpAccessControlAllow"></a>

```go
func ResetIpAccessControlAllow()
```

##### `ResetKeyFrameIntervalDuration` <a name="ResetKeyFrameIntervalDuration" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetKeyFrameIntervalDuration"></a>

```go
func ResetKeyFrameIntervalDuration()
```

##### `ResetStreamingProtocol` <a name="ResetStreamingProtocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetStreamingProtocol"></a>

```go
func ResetStreamingProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList">MediaLiveEventInputEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllow">IpAccessControlAllow</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList">MediaLiveEventInputIpAccessControlAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllowInput">IpAccessControlAllowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDurationInput">KeyFrameIntervalDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocolInput">StreamingProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDuration">KeyFrameIntervalDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocol">StreamingProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.endpoint"></a>

```go
func Endpoint() MediaLiveEventInputEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList">MediaLiveEventInputEndpointList</a>

---

##### `IpAccessControlAllow`<sup>Required</sup> <a name="IpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllow"></a>

```go
func IpAccessControlAllow() MediaLiveEventInputIpAccessControlAllowList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList">MediaLiveEventInputIpAccessControlAllowList</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `IpAccessControlAllowInput`<sup>Optional</sup> <a name="IpAccessControlAllowInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllowInput"></a>

```go
func IpAccessControlAllowInput() interface{}
```

- *Type:* interface{}

---

##### `KeyFrameIntervalDurationInput`<sup>Optional</sup> <a name="KeyFrameIntervalDurationInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDurationInput"></a>

```go
func KeyFrameIntervalDurationInput() *string
```

- *Type:* *string

---

##### `StreamingProtocolInput`<sup>Optional</sup> <a name="StreamingProtocolInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocolInput"></a>

```go
func StreamingProtocolInput() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `KeyFrameIntervalDuration`<sup>Required</sup> <a name="KeyFrameIntervalDuration" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDuration"></a>

```go
func KeyFrameIntervalDuration() *string
```

- *Type:* *string

---

##### `StreamingProtocol`<sup>Required</sup> <a name="StreamingProtocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocol"></a>

```go
func StreamingProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaLiveEventInput
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

---


### MediaLiveEventPreviewEndpointList <a name="MediaLiveEventPreviewEndpointList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventPreviewEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaLiveEventPreviewEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.get"></a>

```go
func Get(index *f64) MediaLiveEventPreviewEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MediaLiveEventPreviewEndpointOutputReference <a name="MediaLiveEventPreviewEndpointOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventPreviewEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaLiveEventPreviewEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint">MediaLiveEventPreviewEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaLiveEventPreviewEndpoint
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint">MediaLiveEventPreviewEndpoint</a>

---


### MediaLiveEventPreviewIpAccessControlAllowList <a name="MediaLiveEventPreviewIpAccessControlAllowList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventPreviewIpAccessControlAllowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaLiveEventPreviewIpAccessControlAllowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.get"></a>

```go
func Get(index *f64) MediaLiveEventPreviewIpAccessControlAllowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaLiveEventPreviewIpAccessControlAllowOutputReference <a name="MediaLiveEventPreviewIpAccessControlAllowOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventPreviewIpAccessControlAllowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaLiveEventPreviewIpAccessControlAllowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetSubnetPrefixLength">ResetSubnetPrefixLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSubnetPrefixLength` <a name="ResetSubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetSubnetPrefixLength"></a>

```go
func ResetSubnetPrefixLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput">SubnetPrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SubnetPrefixLengthInput`<sup>Optional</sup> <a name="SubnetPrefixLengthInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput"></a>

```go
func SubnetPrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SubnetPrefixLength`<sup>Required</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLength"></a>

```go
func SubnetPrefixLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaLiveEventPreviewOutputReference <a name="MediaLiveEventPreviewOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventPreviewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaLiveEventPreviewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.putIpAccessControlAllow">PutIpAccessControlAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetAlternativeMediaId">ResetAlternativeMediaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetIpAccessControlAllow">ResetIpAccessControlAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetPreviewLocator">ResetPreviewLocator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetStreamingPolicyName">ResetStreamingPolicyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAccessControlAllow` <a name="PutIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.putIpAccessControlAllow"></a>

```go
func PutIpAccessControlAllow(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.putIpAccessControlAllow.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlternativeMediaId` <a name="ResetAlternativeMediaId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetAlternativeMediaId"></a>

```go
func ResetAlternativeMediaId()
```

##### `ResetIpAccessControlAllow` <a name="ResetIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetIpAccessControlAllow"></a>

```go
func ResetIpAccessControlAllow()
```

##### `ResetPreviewLocator` <a name="ResetPreviewLocator" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetPreviewLocator"></a>

```go
func ResetPreviewLocator()
```

##### `ResetStreamingPolicyName` <a name="ResetStreamingPolicyName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetStreamingPolicyName"></a>

```go
func ResetStreamingPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList">MediaLiveEventPreviewEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllow">IpAccessControlAllow</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList">MediaLiveEventPreviewIpAccessControlAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaIdInput">AlternativeMediaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllowInput">IpAccessControlAllowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocatorInput">PreviewLocatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyNameInput">StreamingPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaId">AlternativeMediaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocator">PreviewLocator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyName">StreamingPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.endpoint"></a>

```go
func Endpoint() MediaLiveEventPreviewEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList">MediaLiveEventPreviewEndpointList</a>

---

##### `IpAccessControlAllow`<sup>Required</sup> <a name="IpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllow"></a>

```go
func IpAccessControlAllow() MediaLiveEventPreviewIpAccessControlAllowList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList">MediaLiveEventPreviewIpAccessControlAllowList</a>

---

##### `AlternativeMediaIdInput`<sup>Optional</sup> <a name="AlternativeMediaIdInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaIdInput"></a>

```go
func AlternativeMediaIdInput() *string
```

- *Type:* *string

---

##### `IpAccessControlAllowInput`<sup>Optional</sup> <a name="IpAccessControlAllowInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllowInput"></a>

```go
func IpAccessControlAllowInput() interface{}
```

- *Type:* interface{}

---

##### `PreviewLocatorInput`<sup>Optional</sup> <a name="PreviewLocatorInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocatorInput"></a>

```go
func PreviewLocatorInput() *string
```

- *Type:* *string

---

##### `StreamingPolicyNameInput`<sup>Optional</sup> <a name="StreamingPolicyNameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyNameInput"></a>

```go
func StreamingPolicyNameInput() *string
```

- *Type:* *string

---

##### `AlternativeMediaId`<sup>Required</sup> <a name="AlternativeMediaId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaId"></a>

```go
func AlternativeMediaId() *string
```

- *Type:* *string

---

##### `PreviewLocator`<sup>Required</sup> <a name="PreviewLocator" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocator"></a>

```go
func PreviewLocator() *string
```

- *Type:* *string

---

##### `StreamingPolicyName`<sup>Required</sup> <a name="StreamingPolicyName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyName"></a>

```go
func StreamingPolicyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaLiveEventPreview
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

---


### MediaLiveEventTimeoutsOutputReference <a name="MediaLiveEventTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveevent"

medialiveevent.NewMediaLiveEventTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaLiveEventTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



