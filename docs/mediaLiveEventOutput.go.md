# `azurerm_media_live_event_output`

Refer to the Terraform Registory for docs: [`azurerm_media_live_event_output`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output).

# `mediaLiveEventOutput` Submodule <a name="`mediaLiveEventOutput` Submodule" id="@cdktf/provider-azurerm.mediaLiveEventOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaLiveEventOutput <a name="MediaLiveEventOutput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output azurerm_media_live_event_output}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveeventoutput"

medialiveeventoutput.NewMediaLiveEventOutput(scope Construct, id *string, config MediaLiveEventOutputConfig) MediaLiveEventOutput
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig">MediaLiveEventOutputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig">MediaLiveEventOutputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetHlsFragmentsPerTsSegment">ResetHlsFragmentsPerTsSegment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOutputSnapTimeInSeconds">ResetOutputSnapTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetRewindWindowDuration">ResetRewindWindowDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts"></a>

```go
func PutTimeouts(value MediaLiveEventOutputTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHlsFragmentsPerTsSegment` <a name="ResetHlsFragmentsPerTsSegment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetHlsFragmentsPerTsSegment"></a>

```go
func ResetHlsFragmentsPerTsSegment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetId"></a>

```go
func ResetId()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetManifestName"></a>

```go
func ResetManifestName()
```

##### `ResetOutputSnapTimeInSeconds` <a name="ResetOutputSnapTimeInSeconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOutputSnapTimeInSeconds"></a>

```go
func ResetOutputSnapTimeInSeconds()
```

##### `ResetRewindWindowDuration` <a name="ResetRewindWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetRewindWindowDuration"></a>

```go
func ResetRewindWindowDuration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MediaLiveEventOutput resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveeventoutput"

medialiveeventoutput.MediaLiveEventOutput_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveeventoutput"

medialiveeventoutput.MediaLiveEventOutput_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveeventoutput"

medialiveeventoutput.MediaLiveEventOutput_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveeventoutput"

medialiveeventoutput.MediaLiveEventOutput_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MediaLiveEventOutput resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaLiveEventOutput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaLiveEventOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MediaLiveEventOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference">MediaLiveEventOutputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDurationInput">ArchiveWindowDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetNameInput">AssetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegmentInput">HlsFragmentsPerTsSegmentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventIdInput">LiveEventIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestNameInput">ManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSecondsInput">OutputSnapTimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDurationInput">RewindWindowDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDuration">ArchiveWindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetName">AssetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegment">HlsFragmentsPerTsSegment</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventId">LiveEventId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSeconds">OutputSnapTimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDuration">RewindWindowDuration</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeouts"></a>

```go
func Timeouts() MediaLiveEventOutputTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference">MediaLiveEventOutputTimeoutsOutputReference</a>

---

##### `ArchiveWindowDurationInput`<sup>Optional</sup> <a name="ArchiveWindowDurationInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDurationInput"></a>

```go
func ArchiveWindowDurationInput() *string
```

- *Type:* *string

---

##### `AssetNameInput`<sup>Optional</sup> <a name="AssetNameInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetNameInput"></a>

```go
func AssetNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HlsFragmentsPerTsSegmentInput`<sup>Optional</sup> <a name="HlsFragmentsPerTsSegmentInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegmentInput"></a>

```go
func HlsFragmentsPerTsSegmentInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LiveEventIdInput`<sup>Optional</sup> <a name="LiveEventIdInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventIdInput"></a>

```go
func LiveEventIdInput() *string
```

- *Type:* *string

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestNameInput"></a>

```go
func ManifestNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputSnapTimeInSecondsInput`<sup>Optional</sup> <a name="OutputSnapTimeInSecondsInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSecondsInput"></a>

```go
func OutputSnapTimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `RewindWindowDurationInput`<sup>Optional</sup> <a name="RewindWindowDurationInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDurationInput"></a>

```go
func RewindWindowDurationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ArchiveWindowDuration`<sup>Required</sup> <a name="ArchiveWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDuration"></a>

```go
func ArchiveWindowDuration() *string
```

- *Type:* *string

---

##### `AssetName`<sup>Required</sup> <a name="AssetName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetName"></a>

```go
func AssetName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HlsFragmentsPerTsSegment`<sup>Required</sup> <a name="HlsFragmentsPerTsSegment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegment"></a>

```go
func HlsFragmentsPerTsSegment() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LiveEventId`<sup>Required</sup> <a name="LiveEventId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventId"></a>

```go
func LiveEventId() *string
```

- *Type:* *string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputSnapTimeInSeconds`<sup>Required</sup> <a name="OutputSnapTimeInSeconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSeconds"></a>

```go
func OutputSnapTimeInSeconds() *f64
```

- *Type:* *f64

---

##### `RewindWindowDuration`<sup>Required</sup> <a name="RewindWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDuration"></a>

```go
func RewindWindowDuration() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaLiveEventOutputConfig <a name="MediaLiveEventOutputConfig" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveeventoutput"

&medialiveeventoutput.MediaLiveEventOutputConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArchiveWindowDuration: *string,
	AssetName: *string,
	LiveEventId: *string,
	Name: *string,
	Description: *string,
	HlsFragmentsPerTsSegment: *f64,
	Id: *string,
	ManifestName: *string,
	OutputSnapTimeInSeconds: *f64,
	RewindWindowDuration: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.archiveWindowDuration">ArchiveWindowDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.assetName">AssetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.liveEventId">LiveEventId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.hlsFragmentsPerTsSegment">HlsFragmentsPerTsSegment</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.manifestName">ManifestName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.outputSnapTimeInSeconds">OutputSnapTimeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.rewindWindowDuration">RewindWindowDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArchiveWindowDuration`<sup>Required</sup> <a name="ArchiveWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.archiveWindowDuration"></a>

```go
ArchiveWindowDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}.

---

##### `AssetName`<sup>Required</sup> <a name="AssetName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.assetName"></a>

```go
AssetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}.

---

##### `LiveEventId`<sup>Required</sup> <a name="LiveEventId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.liveEventId"></a>

```go
LiveEventId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}.

---

##### `HlsFragmentsPerTsSegment`<sup>Optional</sup> <a name="HlsFragmentsPerTsSegment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.hlsFragmentsPerTsSegment"></a>

```go
HlsFragmentsPerTsSegment *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.manifestName"></a>

```go
ManifestName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}.

---

##### `OutputSnapTimeInSeconds`<sup>Optional</sup> <a name="OutputSnapTimeInSeconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.outputSnapTimeInSeconds"></a>

```go
OutputSnapTimeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}.

---

##### `RewindWindowDuration`<sup>Optional</sup> <a name="RewindWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.rewindWindowDuration"></a>

```go
RewindWindowDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.timeouts"></a>

```go
Timeouts MediaLiveEventOutputTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#timeouts MediaLiveEventOutput#timeouts}

---

### MediaLiveEventOutputTimeouts <a name="MediaLiveEventOutputTimeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveeventoutput"

&medialiveeventoutput.MediaLiveEventOutputTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#create MediaLiveEventOutput#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#delete MediaLiveEventOutput#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#read MediaLiveEventOutput#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#update MediaLiveEventOutput#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#create MediaLiveEventOutput#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#delete MediaLiveEventOutput#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#read MediaLiveEventOutput#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/media_live_event_output#update MediaLiveEventOutput#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaLiveEventOutputTimeoutsOutputReference <a name="MediaLiveEventOutputTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/medialiveeventoutput"

medialiveeventoutput.NewMediaLiveEventOutputTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaLiveEventOutputTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



