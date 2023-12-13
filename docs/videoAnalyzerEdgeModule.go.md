# `videoAnalyzerEdgeModule` Submodule <a name="`videoAnalyzerEdgeModule` Submodule" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VideoAnalyzerEdgeModule <a name="VideoAnalyzerEdgeModule" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module azurerm_video_analyzer_edge_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/videoanalyzeredgemodule"

videoanalyzeredgemodule.NewVideoAnalyzerEdgeModule(scope Construct, id *string, config VideoAnalyzerEdgeModuleConfig) VideoAnalyzerEdgeModule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig">VideoAnalyzerEdgeModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig">VideoAnalyzerEdgeModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.putTimeouts"></a>

```go
func PutTimeouts(value VideoAnalyzerEdgeModuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VideoAnalyzerEdgeModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/videoanalyzeredgemodule"

videoanalyzeredgemodule.VideoAnalyzerEdgeModule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/videoanalyzeredgemodule"

videoanalyzeredgemodule.VideoAnalyzerEdgeModule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/videoanalyzeredgemodule"

videoanalyzeredgemodule.VideoAnalyzerEdgeModule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/videoanalyzeredgemodule"

videoanalyzeredgemodule.VideoAnalyzerEdgeModule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VideoAnalyzerEdgeModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VideoAnalyzerEdgeModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VideoAnalyzerEdgeModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VideoAnalyzerEdgeModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference">VideoAnalyzerEdgeModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerNameInput">VideoAnalyzerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerName">VideoAnalyzerName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeouts"></a>

```go
func Timeouts() VideoAnalyzerEdgeModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference">VideoAnalyzerEdgeModuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VideoAnalyzerNameInput`<sup>Optional</sup> <a name="VideoAnalyzerNameInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerNameInput"></a>

```go
func VideoAnalyzerNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `VideoAnalyzerName`<sup>Required</sup> <a name="VideoAnalyzerName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerName"></a>

```go
func VideoAnalyzerName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VideoAnalyzerEdgeModuleConfig <a name="VideoAnalyzerEdgeModuleConfig" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/videoanalyzeredgemodule"

&videoanalyzeredgemodule.VideoAnalyzerEdgeModuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	VideoAnalyzerName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#name VideoAnalyzerEdgeModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#resource_group_name VideoAnalyzerEdgeModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.videoAnalyzerName">VideoAnalyzerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#video_analyzer_name VideoAnalyzerEdgeModule#video_analyzer_name}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#id VideoAnalyzerEdgeModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#name VideoAnalyzerEdgeModule#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#resource_group_name VideoAnalyzerEdgeModule#resource_group_name}.

---

##### `VideoAnalyzerName`<sup>Required</sup> <a name="VideoAnalyzerName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.videoAnalyzerName"></a>

```go
VideoAnalyzerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#video_analyzer_name VideoAnalyzerEdgeModule#video_analyzer_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#id VideoAnalyzerEdgeModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.timeouts"></a>

```go
Timeouts VideoAnalyzerEdgeModuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#timeouts VideoAnalyzerEdgeModule#timeouts}

---

### VideoAnalyzerEdgeModuleTimeouts <a name="VideoAnalyzerEdgeModuleTimeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/videoanalyzeredgemodule"

&videoanalyzeredgemodule.VideoAnalyzerEdgeModuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#create VideoAnalyzerEdgeModule#create}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#delete VideoAnalyzerEdgeModule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#read VideoAnalyzerEdgeModule#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#create VideoAnalyzerEdgeModule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#delete VideoAnalyzerEdgeModule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/video_analyzer_edge_module#read VideoAnalyzerEdgeModule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VideoAnalyzerEdgeModuleTimeoutsOutputReference <a name="VideoAnalyzerEdgeModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/videoanalyzeredgemodule"

videoanalyzeredgemodule.NewVideoAnalyzerEdgeModuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VideoAnalyzerEdgeModuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



