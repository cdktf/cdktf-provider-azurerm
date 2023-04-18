# `azurerm_video_analyzer_edge_module`

Refer to the Terraform Registory for docs: [`azurerm_video_analyzer_edge_module`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module).

# `videoAnalyzerEdgeModule` Submodule <a name="`videoAnalyzerEdgeModule` Submodule" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VideoAnalyzerEdgeModule <a name="VideoAnalyzerEdgeModule" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module azurerm_video_analyzer_edge_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VideoAnalyzerEdgeModule(Construct Scope, string Id, VideoAnalyzerEdgeModuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig">VideoAnalyzerEdgeModuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.putTimeouts"></a>

```csharp
private void PutTimeouts(VideoAnalyzerEdgeModuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VideoAnalyzerEdgeModule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VideoAnalyzerEdgeModule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VideoAnalyzerEdgeModule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference">VideoAnalyzerEdgeModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerNameInput">VideoAnalyzerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerName">VideoAnalyzerName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeouts"></a>

```csharp
public VideoAnalyzerEdgeModuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference">VideoAnalyzerEdgeModuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VideoAnalyzerNameInput`<sup>Optional</sup> <a name="VideoAnalyzerNameInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerNameInput"></a>

```csharp
public string VideoAnalyzerNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `VideoAnalyzerName`<sup>Required</sup> <a name="VideoAnalyzerName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.videoAnalyzerName"></a>

```csharp
public string VideoAnalyzerName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VideoAnalyzerEdgeModuleConfig <a name="VideoAnalyzerEdgeModuleConfig" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VideoAnalyzerEdgeModuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string VideoAnalyzerName,
    string Id = null,
    VideoAnalyzerEdgeModuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#name VideoAnalyzerEdgeModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#resource_group_name VideoAnalyzerEdgeModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.videoAnalyzerName">VideoAnalyzerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#video_analyzer_name VideoAnalyzerEdgeModule#video_analyzer_name}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#id VideoAnalyzerEdgeModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#name VideoAnalyzerEdgeModule#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#resource_group_name VideoAnalyzerEdgeModule#resource_group_name}.

---

##### `VideoAnalyzerName`<sup>Required</sup> <a name="VideoAnalyzerName" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.videoAnalyzerName"></a>

```csharp
public string VideoAnalyzerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#video_analyzer_name VideoAnalyzerEdgeModule#video_analyzer_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#id VideoAnalyzerEdgeModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleConfig.property.timeouts"></a>

```csharp
public VideoAnalyzerEdgeModuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts">VideoAnalyzerEdgeModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#timeouts VideoAnalyzerEdgeModule#timeouts}

---

### VideoAnalyzerEdgeModuleTimeouts <a name="VideoAnalyzerEdgeModuleTimeouts" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VideoAnalyzerEdgeModuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#create VideoAnalyzerEdgeModule#create}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#delete VideoAnalyzerEdgeModule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#read VideoAnalyzerEdgeModule#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#create VideoAnalyzerEdgeModule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#delete VideoAnalyzerEdgeModule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/video_analyzer_edge_module#read VideoAnalyzerEdgeModule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VideoAnalyzerEdgeModuleTimeoutsOutputReference <a name="VideoAnalyzerEdgeModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VideoAnalyzerEdgeModuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.videoAnalyzerEdgeModule.VideoAnalyzerEdgeModuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



