# `azurerm_data_factory_data_flow`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_data_flow`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow).

# `dataFactoryDataFlow` Submodule <a name="`dataFactoryDataFlow` Submodule" id="@cdktf/provider-azurerm.dataFactoryDataFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDataFlow <a name="DataFactoryDataFlow" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow azurerm_data_factory_data_flow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlow(scope Construct, id *string, config DataFactoryDataFlowConfig) DataFactoryDataFlow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig">DataFactoryDataFlowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig">DataFactoryDataFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSink">PutSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetScriptLines">ResetScriptLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSink` <a name="PutSink" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSink"></a>

```go
func PutSink(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSink.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSource"></a>

```go
func PutSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTimeouts"></a>

```go
func PutTimeouts(value DataFactoryDataFlowTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts">DataFactoryDataFlowTimeouts</a>

---

##### `PutTransformation` <a name="PutTransformation" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTransformation"></a>

```go
func PutTransformation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.putTransformation.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetFolder"></a>

```go
func ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetId"></a>

```go
func ResetId()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetScript"></a>

```go
func ResetScript()
```

##### `ResetScriptLines` <a name="ResetScriptLines" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetScriptLines"></a>

```go
func ResetScriptLines()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.resetTransformation"></a>

```go
func ResetTransformation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.DataFactoryDataFlow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.DataFactoryDataFlow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.DataFactoryDataFlow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sink">Sink</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList">DataFactoryDataFlowSinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList">DataFactoryDataFlowSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference">DataFactoryDataFlowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.transformation">Transformation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList">DataFactoryDataFlowTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.annotationsInput">AnnotationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptLinesInput">ScriptLinesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sinkInput">SinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.transformationInput">TransformationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.annotations">Annotations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptLines">ScriptLines</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Sink`<sup>Required</sup> <a name="Sink" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sink"></a>

```go
func Sink() DataFactoryDataFlowSinkList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList">DataFactoryDataFlowSinkList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.source"></a>

```go
func Source() DataFactoryDataFlowSourceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList">DataFactoryDataFlowSourceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.timeouts"></a>

```go
func Timeouts() DataFactoryDataFlowTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference">DataFactoryDataFlowTimeoutsOutputReference</a>

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.transformation"></a>

```go
func Transformation() DataFactoryDataFlowTransformationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList">DataFactoryDataFlowTransformationList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.annotationsInput"></a>

```go
func AnnotationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dataFactoryIdInput"></a>

```go
func DataFactoryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `ScriptLinesInput`<sup>Optional</sup> <a name="ScriptLinesInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptLinesInput"></a>

```go
func ScriptLinesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SinkInput`<sup>Optional</sup> <a name="SinkInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sinkInput"></a>

```go
func SinkInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.transformationInput"></a>

```go
func TransformationInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.annotations"></a>

```go
func Annotations() *[]*string
```

- *Type:* *[]*string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.dataFactoryId"></a>

```go
func DataFactoryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `ScriptLines`<sup>Required</sup> <a name="ScriptLines" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.scriptLines"></a>

```go
func ScriptLines() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDataFlowConfig <a name="DataFactoryDataFlowConfig" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataFactoryId: *string,
	Name: *string,
	Sink: interface{},
	Source: interface{},
	Annotations: *[]*string,
	Description: *string,
	Folder: *string,
	Id: *string,
	Script: *string,
	ScriptLines: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts,
	Transformation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#data_factory_id DataFactoryDataFlow#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.sink">Sink</a></code> | <code>interface{}</code> | sink block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.source">Source</a></code> | <code>interface{}</code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.annotations">Annotations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#annotations DataFactoryDataFlow#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.folder">Folder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#folder DataFactoryDataFlow#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#id DataFactoryDataFlow#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.script">Script</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#script DataFactoryDataFlow#script}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.scriptLines">ScriptLines</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#script_lines DataFactoryDataFlow#script_lines}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts">DataFactoryDataFlowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.transformation">Transformation</a></code> | <code>interface{}</code> | transformation block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.dataFactoryId"></a>

```go
DataFactoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#data_factory_id DataFactoryDataFlow#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Sink`<sup>Required</sup> <a name="Sink" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.sink"></a>

```go
Sink interface{}
```

- *Type:* interface{}

sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#sink DataFactoryDataFlow#sink}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.source"></a>

```go
Source interface{}
```

- *Type:* interface{}

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#source DataFactoryDataFlow#source}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.annotations"></a>

```go
Annotations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#annotations DataFactoryDataFlow#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#folder DataFactoryDataFlow#folder}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#id DataFactoryDataFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.script"></a>

```go
Script *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#script DataFactoryDataFlow#script}.

---

##### `ScriptLines`<sup>Optional</sup> <a name="ScriptLines" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.scriptLines"></a>

```go
ScriptLines *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#script_lines DataFactoryDataFlow#script_lines}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.timeouts"></a>

```go
Timeouts DataFactoryDataFlowTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts">DataFactoryDataFlowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#timeouts DataFactoryDataFlow#timeouts}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowConfig.property.transformation"></a>

```go
Transformation interface{}
```

- *Type:* interface{}

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#transformation DataFactoryDataFlow#transformation}

---

### DataFactoryDataFlowSink <a name="DataFactoryDataFlowSink" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSink {
	Name: *string,
	Dataset: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset,
	Description: *string,
	Flowlet: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet,
	LinkedService: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService,
	RejectedLinkedService: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService,
	SchemaLinkedService: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a></code> | flowlet block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a></code> | linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a></code> | rejected_linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a></code> | schema_linked_service block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.dataset"></a>

```go
Dataset DataFactoryDataFlowSinkDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#dataset DataFactoryDataFlow#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}.

---

##### `Flowlet`<sup>Optional</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.flowlet"></a>

```go
Flowlet DataFactoryDataFlowSinkFlowlet
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a>

flowlet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#flowlet DataFactoryDataFlow#flowlet}

---

##### `LinkedService`<sup>Optional</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.linkedService"></a>

```go
LinkedService DataFactoryDataFlowSinkLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#linked_service DataFactoryDataFlow#linked_service}

---

##### `RejectedLinkedService`<sup>Optional</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.rejectedLinkedService"></a>

```go
RejectedLinkedService DataFactoryDataFlowSinkRejectedLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a>

rejected_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#rejected_linked_service DataFactoryDataFlow#rejected_linked_service}

---

##### `SchemaLinkedService`<sup>Optional</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSink.property.schemaLinkedService"></a>

```go
SchemaLinkedService DataFactoryDataFlowSinkSchemaLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a>

schema_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#schema_linked_service DataFactoryDataFlow#schema_linked_service}

---

### DataFactoryDataFlowSinkDataset <a name="DataFactoryDataFlowSinkDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSinkDataset {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSinkFlowlet <a name="DataFactoryDataFlowSinkFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSinkFlowlet {
	Name: *string,
	DatasetParameters: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.datasetParameters">DatasetParameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `DatasetParameters`<sup>Optional</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.datasetParameters"></a>

```go
DatasetParameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSinkLinkedService <a name="DataFactoryDataFlowSinkLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSinkLinkedService {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSinkRejectedLinkedService <a name="DataFactoryDataFlowSinkRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSinkRejectedLinkedService {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSinkSchemaLinkedService <a name="DataFactoryDataFlowSinkSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSinkSchemaLinkedService {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSource <a name="DataFactoryDataFlowSource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSource {
	Name: *string,
	Dataset: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset,
	Description: *string,
	Flowlet: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet,
	LinkedService: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService,
	RejectedLinkedService: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService,
	SchemaLinkedService: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a></code> | flowlet block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a></code> | linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a></code> | rejected_linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a></code> | schema_linked_service block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.dataset"></a>

```go
Dataset DataFactoryDataFlowSourceDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#dataset DataFactoryDataFlow#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}.

---

##### `Flowlet`<sup>Optional</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.flowlet"></a>

```go
Flowlet DataFactoryDataFlowSourceFlowlet
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a>

flowlet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#flowlet DataFactoryDataFlow#flowlet}

---

##### `LinkedService`<sup>Optional</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.linkedService"></a>

```go
LinkedService DataFactoryDataFlowSourceLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#linked_service DataFactoryDataFlow#linked_service}

---

##### `RejectedLinkedService`<sup>Optional</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.rejectedLinkedService"></a>

```go
RejectedLinkedService DataFactoryDataFlowSourceRejectedLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a>

rejected_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#rejected_linked_service DataFactoryDataFlow#rejected_linked_service}

---

##### `SchemaLinkedService`<sup>Optional</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSource.property.schemaLinkedService"></a>

```go
SchemaLinkedService DataFactoryDataFlowSourceSchemaLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a>

schema_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#schema_linked_service DataFactoryDataFlow#schema_linked_service}

---

### DataFactoryDataFlowSourceDataset <a name="DataFactoryDataFlowSourceDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSourceDataset {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSourceFlowlet <a name="DataFactoryDataFlowSourceFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSourceFlowlet {
	Name: *string,
	DatasetParameters: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.datasetParameters">DatasetParameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `DatasetParameters`<sup>Optional</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.datasetParameters"></a>

```go
DatasetParameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSourceLinkedService <a name="DataFactoryDataFlowSourceLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSourceLinkedService {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSourceRejectedLinkedService <a name="DataFactoryDataFlowSourceRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSourceRejectedLinkedService {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowSourceSchemaLinkedService <a name="DataFactoryDataFlowSourceSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowSourceSchemaLinkedService {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowTimeouts <a name="DataFactoryDataFlowTimeouts" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#create DataFactoryDataFlow#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#delete DataFactoryDataFlow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#read DataFactoryDataFlow#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#update DataFactoryDataFlow#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#create DataFactoryDataFlow#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#delete DataFactoryDataFlow#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#read DataFactoryDataFlow#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#update DataFactoryDataFlow#update}.

---

### DataFactoryDataFlowTransformation <a name="DataFactoryDataFlowTransformation" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowTransformation {
	Name: *string,
	Dataset: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset,
	Description: *string,
	Flowlet: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet,
	LinkedService: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a></code> | flowlet block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a></code> | linked_service block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.dataset"></a>

```go
Dataset DataFactoryDataFlowTransformationDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#dataset DataFactoryDataFlow#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#description DataFactoryDataFlow#description}.

---

##### `Flowlet`<sup>Optional</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.flowlet"></a>

```go
Flowlet DataFactoryDataFlowTransformationFlowlet
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a>

flowlet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#flowlet DataFactoryDataFlow#flowlet}

---

##### `LinkedService`<sup>Optional</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformation.property.linkedService"></a>

```go
LinkedService DataFactoryDataFlowTransformationLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#linked_service DataFactoryDataFlow#linked_service}

---

### DataFactoryDataFlowTransformationDataset <a name="DataFactoryDataFlowTransformationDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowTransformationDataset {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowTransformationFlowlet <a name="DataFactoryDataFlowTransformationFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowTransformationFlowlet {
	Name: *string,
	DatasetParameters: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.datasetParameters">DatasetParameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `DatasetParameters`<sup>Optional</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.datasetParameters"></a>

```go
DatasetParameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#dataset_parameters DataFactoryDataFlow#dataset_parameters}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

### DataFactoryDataFlowTransformationLinkedService <a name="DataFactoryDataFlowTransformationLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

&datafactorydataflow.DataFactoryDataFlowTransformationLinkedService {
	Name: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#name DataFactoryDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/data_factory_data_flow#parameters DataFactoryDataFlow#parameters}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDataFlowSinkDatasetOutputReference <a name="DataFactoryDataFlowSinkDatasetOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSinkDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowSinkDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowSinkDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a>

---


### DataFactoryDataFlowSinkFlowletOutputReference <a name="DataFactoryDataFlowSinkFlowletOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSinkFlowletOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowSinkFlowletOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resetDatasetParameters">ResetDatasetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetParameters` <a name="ResetDatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resetDatasetParameters"></a>

```go
func ResetDatasetParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.datasetParametersInput">DatasetParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.datasetParameters">DatasetParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetParametersInput`<sup>Optional</sup> <a name="DatasetParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.datasetParametersInput"></a>

```go
func DatasetParametersInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatasetParameters`<sup>Required</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.datasetParameters"></a>

```go
func DatasetParameters() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowSinkFlowlet
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a>

---


### DataFactoryDataFlowSinkLinkedServiceOutputReference <a name="DataFactoryDataFlowSinkLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSinkLinkedServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowSinkLinkedServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowSinkLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a>

---


### DataFactoryDataFlowSinkList <a name="DataFactoryDataFlowSinkList" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSinkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataFactoryDataFlowSinkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.get"></a>

```go
func Get(index *f64) DataFactoryDataFlowSinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDataFlowSinkOutputReference <a name="DataFactoryDataFlowSinkOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSinkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataFactoryDataFlowSinkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putFlowlet">PutFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putLinkedService">PutLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putRejectedLinkedService">PutRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putSchemaLinkedService">PutSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetFlowlet">ResetFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetLinkedService">ResetLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetRejectedLinkedService">ResetRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetSchemaLinkedService">ResetSchemaLinkedService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putDataset"></a>

```go
func PutDataset(value DataFactoryDataFlowSinkDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a>

---

##### `PutFlowlet` <a name="PutFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putFlowlet"></a>

```go
func PutFlowlet(value DataFactoryDataFlowSinkFlowlet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putFlowlet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a>

---

##### `PutLinkedService` <a name="PutLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putLinkedService"></a>

```go
func PutLinkedService(value DataFactoryDataFlowSinkLinkedService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a>

---

##### `PutRejectedLinkedService` <a name="PutRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putRejectedLinkedService"></a>

```go
func PutRejectedLinkedService(value DataFactoryDataFlowSinkRejectedLinkedService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putRejectedLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a>

---

##### `PutSchemaLinkedService` <a name="PutSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putSchemaLinkedService"></a>

```go
func PutSchemaLinkedService(value DataFactoryDataFlowSinkSchemaLinkedService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.putSchemaLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFlowlet` <a name="ResetFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetFlowlet"></a>

```go
func ResetFlowlet()
```

##### `ResetLinkedService` <a name="ResetLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetLinkedService"></a>

```go
func ResetLinkedService()
```

##### `ResetRejectedLinkedService` <a name="ResetRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetRejectedLinkedService"></a>

```go
func ResetRejectedLinkedService()
```

##### `ResetSchemaLinkedService` <a name="ResetSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.resetSchemaLinkedService"></a>

```go
func ResetSchemaLinkedService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference">DataFactoryDataFlowSinkDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference">DataFactoryDataFlowSinkFlowletOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference">DataFactoryDataFlowSinkLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference">DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference">DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.flowletInput">FlowletInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.linkedServiceInput">LinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.rejectedLinkedServiceInput">RejectedLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.schemaLinkedServiceInput">SchemaLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.dataset"></a>

```go
func Dataset() DataFactoryDataFlowSinkDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDatasetOutputReference">DataFactoryDataFlowSinkDatasetOutputReference</a>

---

##### `Flowlet`<sup>Required</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.flowlet"></a>

```go
func Flowlet() DataFactoryDataFlowSinkFlowletOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowletOutputReference">DataFactoryDataFlowSinkFlowletOutputReference</a>

---

##### `LinkedService`<sup>Required</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.linkedService"></a>

```go
func LinkedService() DataFactoryDataFlowSinkLinkedServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedServiceOutputReference">DataFactoryDataFlowSinkLinkedServiceOutputReference</a>

---

##### `RejectedLinkedService`<sup>Required</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.rejectedLinkedService"></a>

```go
func RejectedLinkedService() DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference">DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference</a>

---

##### `SchemaLinkedService`<sup>Required</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.schemaLinkedService"></a>

```go
func SchemaLinkedService() DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference">DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.datasetInput"></a>

```go
func DatasetInput() DataFactoryDataFlowSinkDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkDataset">DataFactoryDataFlowSinkDataset</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FlowletInput`<sup>Optional</sup> <a name="FlowletInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.flowletInput"></a>

```go
func FlowletInput() DataFactoryDataFlowSinkFlowlet
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkFlowlet">DataFactoryDataFlowSinkFlowlet</a>

---

##### `LinkedServiceInput`<sup>Optional</sup> <a name="LinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.linkedServiceInput"></a>

```go
func LinkedServiceInput() DataFactoryDataFlowSinkLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkLinkedService">DataFactoryDataFlowSinkLinkedService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RejectedLinkedServiceInput`<sup>Optional</sup> <a name="RejectedLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.rejectedLinkedServiceInput"></a>

```go
func RejectedLinkedServiceInput() DataFactoryDataFlowSinkRejectedLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a>

---

##### `SchemaLinkedServiceInput`<sup>Optional</sup> <a name="SchemaLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.schemaLinkedServiceInput"></a>

```go
func SchemaLinkedServiceInput() DataFactoryDataFlowSinkSchemaLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference <a name="DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSinkRejectedLinkedServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowSinkRejectedLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkRejectedLinkedService">DataFactoryDataFlowSinkRejectedLinkedService</a>

---


### DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference <a name="DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSinkSchemaLinkedServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowSinkSchemaLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSinkSchemaLinkedService">DataFactoryDataFlowSinkSchemaLinkedService</a>

---


### DataFactoryDataFlowSourceDatasetOutputReference <a name="DataFactoryDataFlowSourceDatasetOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSourceDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowSourceDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowSourceDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a>

---


### DataFactoryDataFlowSourceFlowletOutputReference <a name="DataFactoryDataFlowSourceFlowletOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSourceFlowletOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowSourceFlowletOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resetDatasetParameters">ResetDatasetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetParameters` <a name="ResetDatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resetDatasetParameters"></a>

```go
func ResetDatasetParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.datasetParametersInput">DatasetParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.datasetParameters">DatasetParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetParametersInput`<sup>Optional</sup> <a name="DatasetParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.datasetParametersInput"></a>

```go
func DatasetParametersInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatasetParameters`<sup>Required</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.datasetParameters"></a>

```go
func DatasetParameters() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowSourceFlowlet
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a>

---


### DataFactoryDataFlowSourceLinkedServiceOutputReference <a name="DataFactoryDataFlowSourceLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSourceLinkedServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowSourceLinkedServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowSourceLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a>

---


### DataFactoryDataFlowSourceList <a name="DataFactoryDataFlowSourceList" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataFactoryDataFlowSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.get"></a>

```go
func Get(index *f64) DataFactoryDataFlowSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDataFlowSourceOutputReference <a name="DataFactoryDataFlowSourceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataFactoryDataFlowSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putFlowlet">PutFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putLinkedService">PutLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putRejectedLinkedService">PutRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putSchemaLinkedService">PutSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetFlowlet">ResetFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetLinkedService">ResetLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetRejectedLinkedService">ResetRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetSchemaLinkedService">ResetSchemaLinkedService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putDataset"></a>

```go
func PutDataset(value DataFactoryDataFlowSourceDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a>

---

##### `PutFlowlet` <a name="PutFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putFlowlet"></a>

```go
func PutFlowlet(value DataFactoryDataFlowSourceFlowlet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putFlowlet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a>

---

##### `PutLinkedService` <a name="PutLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putLinkedService"></a>

```go
func PutLinkedService(value DataFactoryDataFlowSourceLinkedService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a>

---

##### `PutRejectedLinkedService` <a name="PutRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putRejectedLinkedService"></a>

```go
func PutRejectedLinkedService(value DataFactoryDataFlowSourceRejectedLinkedService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putRejectedLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a>

---

##### `PutSchemaLinkedService` <a name="PutSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putSchemaLinkedService"></a>

```go
func PutSchemaLinkedService(value DataFactoryDataFlowSourceSchemaLinkedService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.putSchemaLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFlowlet` <a name="ResetFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetFlowlet"></a>

```go
func ResetFlowlet()
```

##### `ResetLinkedService` <a name="ResetLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetLinkedService"></a>

```go
func ResetLinkedService()
```

##### `ResetRejectedLinkedService` <a name="ResetRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetRejectedLinkedService"></a>

```go
func ResetRejectedLinkedService()
```

##### `ResetSchemaLinkedService` <a name="ResetSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.resetSchemaLinkedService"></a>

```go
func ResetSchemaLinkedService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference">DataFactoryDataFlowSourceDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference">DataFactoryDataFlowSourceFlowletOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference">DataFactoryDataFlowSourceLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference">DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference">DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.flowletInput">FlowletInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.linkedServiceInput">LinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.rejectedLinkedServiceInput">RejectedLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.schemaLinkedServiceInput">SchemaLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.dataset"></a>

```go
func Dataset() DataFactoryDataFlowSourceDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDatasetOutputReference">DataFactoryDataFlowSourceDatasetOutputReference</a>

---

##### `Flowlet`<sup>Required</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.flowlet"></a>

```go
func Flowlet() DataFactoryDataFlowSourceFlowletOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowletOutputReference">DataFactoryDataFlowSourceFlowletOutputReference</a>

---

##### `LinkedService`<sup>Required</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.linkedService"></a>

```go
func LinkedService() DataFactoryDataFlowSourceLinkedServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedServiceOutputReference">DataFactoryDataFlowSourceLinkedServiceOutputReference</a>

---

##### `RejectedLinkedService`<sup>Required</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.rejectedLinkedService"></a>

```go
func RejectedLinkedService() DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference">DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference</a>

---

##### `SchemaLinkedService`<sup>Required</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.schemaLinkedService"></a>

```go
func SchemaLinkedService() DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference">DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.datasetInput"></a>

```go
func DatasetInput() DataFactoryDataFlowSourceDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceDataset">DataFactoryDataFlowSourceDataset</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FlowletInput`<sup>Optional</sup> <a name="FlowletInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.flowletInput"></a>

```go
func FlowletInput() DataFactoryDataFlowSourceFlowlet
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceFlowlet">DataFactoryDataFlowSourceFlowlet</a>

---

##### `LinkedServiceInput`<sup>Optional</sup> <a name="LinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.linkedServiceInput"></a>

```go
func LinkedServiceInput() DataFactoryDataFlowSourceLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceLinkedService">DataFactoryDataFlowSourceLinkedService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RejectedLinkedServiceInput`<sup>Optional</sup> <a name="RejectedLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.rejectedLinkedServiceInput"></a>

```go
func RejectedLinkedServiceInput() DataFactoryDataFlowSourceRejectedLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a>

---

##### `SchemaLinkedServiceInput`<sup>Optional</sup> <a name="SchemaLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.schemaLinkedServiceInput"></a>

```go
func SchemaLinkedServiceInput() DataFactoryDataFlowSourceSchemaLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference <a name="DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSourceRejectedLinkedServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowSourceRejectedLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceRejectedLinkedService">DataFactoryDataFlowSourceRejectedLinkedService</a>

---


### DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference <a name="DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowSourceSchemaLinkedServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowSourceSchemaLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowSourceSchemaLinkedService">DataFactoryDataFlowSourceSchemaLinkedService</a>

---


### DataFactoryDataFlowTimeoutsOutputReference <a name="DataFactoryDataFlowTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDataFlowTransformationDatasetOutputReference <a name="DataFactoryDataFlowTransformationDatasetOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowTransformationDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowTransformationDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowTransformationDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a>

---


### DataFactoryDataFlowTransformationFlowletOutputReference <a name="DataFactoryDataFlowTransformationFlowletOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowTransformationFlowletOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowTransformationFlowletOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resetDatasetParameters">ResetDatasetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetParameters` <a name="ResetDatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resetDatasetParameters"></a>

```go
func ResetDatasetParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.datasetParametersInput">DatasetParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.datasetParameters">DatasetParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetParametersInput`<sup>Optional</sup> <a name="DatasetParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.datasetParametersInput"></a>

```go
func DatasetParametersInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DatasetParameters`<sup>Required</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.datasetParameters"></a>

```go
func DatasetParameters() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowTransformationFlowlet
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a>

---


### DataFactoryDataFlowTransformationLinkedServiceOutputReference <a name="DataFactoryDataFlowTransformationLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowTransformationLinkedServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataFactoryDataFlowTransformationLinkedServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataFactoryDataFlowTransformationLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a>

---


### DataFactoryDataFlowTransformationList <a name="DataFactoryDataFlowTransformationList" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowTransformationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataFactoryDataFlowTransformationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.get"></a>

```go
func Get(index *f64) DataFactoryDataFlowTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataFactoryDataFlowTransformationOutputReference <a name="DataFactoryDataFlowTransformationOutputReference" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datafactorydataflow"

datafactorydataflow.NewDataFactoryDataFlowTransformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataFactoryDataFlowTransformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putFlowlet">PutFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putLinkedService">PutLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetFlowlet">ResetFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetLinkedService">ResetLinkedService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putDataset"></a>

```go
func PutDataset(value DataFactoryDataFlowTransformationDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a>

---

##### `PutFlowlet` <a name="PutFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putFlowlet"></a>

```go
func PutFlowlet(value DataFactoryDataFlowTransformationFlowlet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putFlowlet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a>

---

##### `PutLinkedService` <a name="PutLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putLinkedService"></a>

```go
func PutLinkedService(value DataFactoryDataFlowTransformationLinkedService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.putLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFlowlet` <a name="ResetFlowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetFlowlet"></a>

```go
func ResetFlowlet()
```

##### `ResetLinkedService` <a name="ResetLinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.resetLinkedService"></a>

```go
func ResetLinkedService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference">DataFactoryDataFlowTransformationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference">DataFactoryDataFlowTransformationFlowletOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference">DataFactoryDataFlowTransformationLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.flowletInput">FlowletInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.linkedServiceInput">LinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.dataset"></a>

```go
func Dataset() DataFactoryDataFlowTransformationDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDatasetOutputReference">DataFactoryDataFlowTransformationDatasetOutputReference</a>

---

##### `Flowlet`<sup>Required</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.flowlet"></a>

```go
func Flowlet() DataFactoryDataFlowTransformationFlowletOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowletOutputReference">DataFactoryDataFlowTransformationFlowletOutputReference</a>

---

##### `LinkedService`<sup>Required</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.linkedService"></a>

```go
func LinkedService() DataFactoryDataFlowTransformationLinkedServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedServiceOutputReference">DataFactoryDataFlowTransformationLinkedServiceOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.datasetInput"></a>

```go
func DatasetInput() DataFactoryDataFlowTransformationDataset
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationDataset">DataFactoryDataFlowTransformationDataset</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FlowletInput`<sup>Optional</sup> <a name="FlowletInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.flowletInput"></a>

```go
func FlowletInput() DataFactoryDataFlowTransformationFlowlet
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationFlowlet">DataFactoryDataFlowTransformationFlowlet</a>

---

##### `LinkedServiceInput`<sup>Optional</sup> <a name="LinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.linkedServiceInput"></a>

```go
func LinkedServiceInput() DataFactoryDataFlowTransformationLinkedService
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationLinkedService">DataFactoryDataFlowTransformationLinkedService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryDataFlow.DataFactoryDataFlowTransformationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



