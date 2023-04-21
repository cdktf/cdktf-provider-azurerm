# `azurerm_media_services_account_filter`

Refer to the Terraform Registory for docs: [`azurerm_media_services_account_filter`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter).

# `mediaServicesAccountFilter` Submodule <a name="`mediaServicesAccountFilter` Submodule" id="@cdktf/provider-azurerm.mediaServicesAccountFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesAccountFilter <a name="MediaServicesAccountFilter" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter azurerm_media_services_account_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilter(Construct Scope, string Id, MediaServicesAccountFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig">MediaServicesAccountFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig">MediaServicesAccountFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange">PutPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTrackSelection">PutTrackSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetFirstQualityBitrate">ResetFirstQualityBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetPresentationTimeRange">ResetPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTrackSelection">ResetTrackSelection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPresentationTimeRange` <a name="PutPresentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange"></a>

```csharp
private void PutPresentationTimeRange(MediaServicesAccountFilterPresentationTimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putPresentationTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts"></a>

```csharp
private void PutTimeouts(MediaServicesAccountFilterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>

---

##### `PutTrackSelection` <a name="PutTrackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTrackSelection"></a>

```csharp
private void PutTrackSelection(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.putTrackSelection.parameter.value"></a>

- *Type:* object

---

##### `ResetFirstQualityBitrate` <a name="ResetFirstQualityBitrate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetFirstQualityBitrate"></a>

```csharp
private void ResetFirstQualityBitrate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPresentationTimeRange` <a name="ResetPresentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetPresentationTimeRange"></a>

```csharp
private void ResetPresentationTimeRange()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrackSelection` <a name="ResetTrackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.resetTrackSelection"></a>

```csharp
private void ResetTrackSelection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaServicesAccountFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaServicesAccountFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaServicesAccountFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRange">PresentationTimeRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference">MediaServicesAccountFilterPresentationTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference">MediaServicesAccountFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelection">TrackSelection</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList">MediaServicesAccountFilterTrackSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrateInput">FirstQualityBitrateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountNameInput">MediaServicesAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRangeInput">PresentationTimeRangeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelectionInput">TrackSelectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrate">FirstQualityBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PresentationTimeRange`<sup>Required</sup> <a name="PresentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRange"></a>

```csharp
public MediaServicesAccountFilterPresentationTimeRangeOutputReference PresentationTimeRange { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference">MediaServicesAccountFilterPresentationTimeRangeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeouts"></a>

```csharp
public MediaServicesAccountFilterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference">MediaServicesAccountFilterTimeoutsOutputReference</a>

---

##### `TrackSelection`<sup>Required</sup> <a name="TrackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelection"></a>

```csharp
public MediaServicesAccountFilterTrackSelectionList TrackSelection { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList">MediaServicesAccountFilterTrackSelectionList</a>

---

##### `FirstQualityBitrateInput`<sup>Optional</sup> <a name="FirstQualityBitrateInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrateInput"></a>

```csharp
public double FirstQualityBitrateInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MediaServicesAccountNameInput`<sup>Optional</sup> <a name="MediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountNameInput"></a>

```csharp
public string MediaServicesAccountNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PresentationTimeRangeInput`<sup>Optional</sup> <a name="PresentationTimeRangeInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.presentationTimeRangeInput"></a>

```csharp
public MediaServicesAccountFilterPresentationTimeRange PresentationTimeRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrackSelectionInput`<sup>Optional</sup> <a name="TrackSelectionInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.trackSelectionInput"></a>

```csharp
public object TrackSelectionInput { get; }
```

- *Type:* object

---

##### `FirstQualityBitrate`<sup>Required</sup> <a name="FirstQualityBitrate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.firstQualityBitrate"></a>

```csharp
public double FirstQualityBitrate { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.mediaServicesAccountName"></a>

```csharp
public string MediaServicesAccountName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesAccountFilterConfig <a name="MediaServicesAccountFilterConfig" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MediaServicesAccountName,
    string Name,
    string ResourceGroupName,
    double FirstQualityBitrate = null,
    string Id = null,
    MediaServicesAccountFilterPresentationTimeRange PresentationTimeRange = null,
    MediaServicesAccountFilterTimeouts Timeouts = null,
    object TrackSelection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#media_services_account_name MediaServicesAccountFilter#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#name MediaServicesAccountFilter#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#resource_group_name MediaServicesAccountFilter#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.firstQualityBitrate">FirstQualityBitrate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#first_quality_bitrate MediaServicesAccountFilter#first_quality_bitrate}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#id MediaServicesAccountFilter#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.presentationTimeRange">PresentationTimeRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a></code> | presentation_time_range block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.trackSelection">TrackSelection</a></code> | <code>object</code> | track_selection block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.mediaServicesAccountName"></a>

```csharp
public string MediaServicesAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#media_services_account_name MediaServicesAccountFilter#media_services_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#name MediaServicesAccountFilter#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#resource_group_name MediaServicesAccountFilter#resource_group_name}.

---

##### `FirstQualityBitrate`<sup>Optional</sup> <a name="FirstQualityBitrate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.firstQualityBitrate"></a>

```csharp
public double FirstQualityBitrate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#first_quality_bitrate MediaServicesAccountFilter#first_quality_bitrate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#id MediaServicesAccountFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PresentationTimeRange`<sup>Optional</sup> <a name="PresentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.presentationTimeRange"></a>

```csharp
public MediaServicesAccountFilterPresentationTimeRange PresentationTimeRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

presentation_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#presentation_time_range MediaServicesAccountFilter#presentation_time_range}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.timeouts"></a>

```csharp
public MediaServicesAccountFilterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts">MediaServicesAccountFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#timeouts MediaServicesAccountFilter#timeouts}

---

##### `TrackSelection`<sup>Optional</sup> <a name="TrackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterConfig.property.trackSelection"></a>

```csharp
public object TrackSelection { get; set; }
```

- *Type:* object

track_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#track_selection MediaServicesAccountFilter#track_selection}

---

### MediaServicesAccountFilterPresentationTimeRange <a name="MediaServicesAccountFilterPresentationTimeRange" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterPresentationTimeRange {
    double UnitTimescaleInMilliseconds,
    double EndInUnits = null,
    object ForceEnd = null,
    double LiveBackoffInUnits = null,
    double PresentationWindowInUnits = null,
    double StartInUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.unitTimescaleInMilliseconds">UnitTimescaleInMilliseconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#unit_timescale_in_milliseconds MediaServicesAccountFilter#unit_timescale_in_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.endInUnits">EndInUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#end_in_units MediaServicesAccountFilter#end_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.forceEnd">ForceEnd</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#force_end MediaServicesAccountFilter#force_end}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.liveBackoffInUnits">LiveBackoffInUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#live_backoff_in_units MediaServicesAccountFilter#live_backoff_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.presentationWindowInUnits">PresentationWindowInUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#presentation_window_in_units MediaServicesAccountFilter#presentation_window_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.startInUnits">StartInUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#start_in_units MediaServicesAccountFilter#start_in_units}. |

---

##### `UnitTimescaleInMilliseconds`<sup>Required</sup> <a name="UnitTimescaleInMilliseconds" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.unitTimescaleInMilliseconds"></a>

```csharp
public double UnitTimescaleInMilliseconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#unit_timescale_in_milliseconds MediaServicesAccountFilter#unit_timescale_in_milliseconds}.

---

##### `EndInUnits`<sup>Optional</sup> <a name="EndInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.endInUnits"></a>

```csharp
public double EndInUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#end_in_units MediaServicesAccountFilter#end_in_units}.

---

##### `ForceEnd`<sup>Optional</sup> <a name="ForceEnd" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.forceEnd"></a>

```csharp
public object ForceEnd { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#force_end MediaServicesAccountFilter#force_end}.

---

##### `LiveBackoffInUnits`<sup>Optional</sup> <a name="LiveBackoffInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.liveBackoffInUnits"></a>

```csharp
public double LiveBackoffInUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#live_backoff_in_units MediaServicesAccountFilter#live_backoff_in_units}.

---

##### `PresentationWindowInUnits`<sup>Optional</sup> <a name="PresentationWindowInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.presentationWindowInUnits"></a>

```csharp
public double PresentationWindowInUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#presentation_window_in_units MediaServicesAccountFilter#presentation_window_in_units}.

---

##### `StartInUnits`<sup>Optional</sup> <a name="StartInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange.property.startInUnits"></a>

```csharp
public double StartInUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#start_in_units MediaServicesAccountFilter#start_in_units}.

---

### MediaServicesAccountFilterTimeouts <a name="MediaServicesAccountFilterTimeouts" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#create MediaServicesAccountFilter#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#delete MediaServicesAccountFilter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#read MediaServicesAccountFilter#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#update MediaServicesAccountFilter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#create MediaServicesAccountFilter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#delete MediaServicesAccountFilter#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#read MediaServicesAccountFilter#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#update MediaServicesAccountFilter#update}.

---

### MediaServicesAccountFilterTrackSelection <a name="MediaServicesAccountFilterTrackSelection" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterTrackSelection {
    object Condition
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection.property.condition">Condition</a></code> | <code>object</code> | condition block. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelection.property.condition"></a>

```csharp
public object Condition { get; set; }
```

- *Type:* object

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#condition MediaServicesAccountFilter#condition}

---

### MediaServicesAccountFilterTrackSelectionCondition <a name="MediaServicesAccountFilterTrackSelectionCondition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterTrackSelectionCondition {
    string Operation,
    string Property,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.operation">Operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#operation MediaServicesAccountFilter#operation}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.property">Property</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#property MediaServicesAccountFilter#property}. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#value MediaServicesAccountFilter#value}. |

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.operation"></a>

```csharp
public string Operation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#operation MediaServicesAccountFilter#operation}.

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.property"></a>

```csharp
public string Property { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#property MediaServicesAccountFilter#property}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionCondition.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/media_services_account_filter#value MediaServicesAccountFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesAccountFilterPresentationTimeRangeOutputReference <a name="MediaServicesAccountFilterPresentationTimeRangeOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterPresentationTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetEndInUnits">ResetEndInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetForceEnd">ResetForceEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits">ResetLiveBackoffInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits">ResetPresentationWindowInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetStartInUnits">ResetStartInUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndInUnits` <a name="ResetEndInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetEndInUnits"></a>

```csharp
private void ResetEndInUnits()
```

##### `ResetForceEnd` <a name="ResetForceEnd" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetForceEnd"></a>

```csharp
private void ResetForceEnd()
```

##### `ResetLiveBackoffInUnits` <a name="ResetLiveBackoffInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits"></a>

```csharp
private void ResetLiveBackoffInUnits()
```

##### `ResetPresentationWindowInUnits` <a name="ResetPresentationWindowInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits"></a>

```csharp
private void ResetPresentationWindowInUnits()
```

##### `ResetStartInUnits` <a name="ResetStartInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.resetStartInUnits"></a>

```csharp
private void ResetStartInUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnitsInput">EndInUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEndInput">ForceEndInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput">LiveBackoffInUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput">PresentationWindowInUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnitsInput">StartInUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMillisecondsInput">UnitTimescaleInMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnits">EndInUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEnd">ForceEnd</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits">LiveBackoffInUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits">PresentationWindowInUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnits">StartInUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilliseconds">UnitTimescaleInMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInUnitsInput`<sup>Optional</sup> <a name="EndInUnitsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnitsInput"></a>

```csharp
public double EndInUnitsInput { get; }
```

- *Type:* double

---

##### `ForceEndInput`<sup>Optional</sup> <a name="ForceEndInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEndInput"></a>

```csharp
public object ForceEndInput { get; }
```

- *Type:* object

---

##### `LiveBackoffInUnitsInput`<sup>Optional</sup> <a name="LiveBackoffInUnitsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput"></a>

```csharp
public double LiveBackoffInUnitsInput { get; }
```

- *Type:* double

---

##### `PresentationWindowInUnitsInput`<sup>Optional</sup> <a name="PresentationWindowInUnitsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput"></a>

```csharp
public double PresentationWindowInUnitsInput { get; }
```

- *Type:* double

---

##### `StartInUnitsInput`<sup>Optional</sup> <a name="StartInUnitsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnitsInput"></a>

```csharp
public double StartInUnitsInput { get; }
```

- *Type:* double

---

##### `UnitTimescaleInMillisecondsInput`<sup>Optional</sup> <a name="UnitTimescaleInMillisecondsInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMillisecondsInput"></a>

```csharp
public double UnitTimescaleInMillisecondsInput { get; }
```

- *Type:* double

---

##### `EndInUnits`<sup>Required</sup> <a name="EndInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.endInUnits"></a>

```csharp
public double EndInUnits { get; }
```

- *Type:* double

---

##### `ForceEnd`<sup>Required</sup> <a name="ForceEnd" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.forceEnd"></a>

```csharp
public object ForceEnd { get; }
```

- *Type:* object

---

##### `LiveBackoffInUnits`<sup>Required</sup> <a name="LiveBackoffInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits"></a>

```csharp
public double LiveBackoffInUnits { get; }
```

- *Type:* double

---

##### `PresentationWindowInUnits`<sup>Required</sup> <a name="PresentationWindowInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits"></a>

```csharp
public double PresentationWindowInUnits { get; }
```

- *Type:* double

---

##### `StartInUnits`<sup>Required</sup> <a name="StartInUnits" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.startInUnits"></a>

```csharp
public double StartInUnits { get; }
```

- *Type:* double

---

##### `UnitTimescaleInMilliseconds`<sup>Required</sup> <a name="UnitTimescaleInMilliseconds" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilliseconds"></a>

```csharp
public double UnitTimescaleInMilliseconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRangeOutputReference.property.internalValue"></a>

```csharp
public MediaServicesAccountFilterPresentationTimeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterPresentationTimeRange">MediaServicesAccountFilterPresentationTimeRange</a>

---


### MediaServicesAccountFilterTimeoutsOutputReference <a name="MediaServicesAccountFilterTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesAccountFilterTrackSelectionConditionList <a name="MediaServicesAccountFilterTrackSelectionConditionList" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterTrackSelectionConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.get"></a>

```csharp
private MediaServicesAccountFilterTrackSelectionConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesAccountFilterTrackSelectionConditionOutputReference <a name="MediaServicesAccountFilterTrackSelectionConditionOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterTrackSelectionConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operationInput">OperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.propertyInput">PropertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.property">Property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operationInput"></a>

```csharp
public string OperationInput { get; }
```

- *Type:* string

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.propertyInput"></a>

```csharp
public string PropertyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.property"></a>

```csharp
public string Property { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesAccountFilterTrackSelectionList <a name="MediaServicesAccountFilterTrackSelectionList" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterTrackSelectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.get"></a>

```csharp
private MediaServicesAccountFilterTrackSelectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaServicesAccountFilterTrackSelectionOutputReference <a name="MediaServicesAccountFilterTrackSelectionOutputReference" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaServicesAccountFilterTrackSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.putCondition">PutCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.putCondition"></a>

```csharp
private void PutCondition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.putCondition.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList">MediaServicesAccountFilterTrackSelectionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.conditionInput">ConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.condition"></a>

```csharp
public MediaServicesAccountFilterTrackSelectionConditionList Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionConditionList">MediaServicesAccountFilterTrackSelectionConditionList</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.conditionInput"></a>

```csharp
public object ConditionInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaServicesAccountFilter.MediaServicesAccountFilterTrackSelectionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



