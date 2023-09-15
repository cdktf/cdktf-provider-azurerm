# `azurerm_media_live_event`

Refer to the Terraform Registory for docs: [`azurerm_media_live_event`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event).

# `mediaLiveEvent` Submodule <a name="`mediaLiveEvent` Submodule" id="@cdktf/provider-azurerm.mediaLiveEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaLiveEvent <a name="MediaLiveEvent" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event azurerm_media_live_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEvent(Construct Scope, string Id, MediaLiveEventConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig">MediaLiveEventConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCrossSiteAccessPolicy` <a name="PutCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putCrossSiteAccessPolicy"></a>

```csharp
private void PutCrossSiteAccessPolicy(MediaLiveEventCrossSiteAccessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putCrossSiteAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

---

##### `PutEncoding` <a name="PutEncoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding"></a>

```csharp
private void PutEncoding(MediaLiveEventEncoding Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putEncoding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

---

##### `PutInput` <a name="PutInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput"></a>

```csharp
private void PutInput(MediaLiveEventInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

---

##### `PutPreview` <a name="PutPreview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview"></a>

```csharp
private void PutPreview(MediaLiveEventPreview Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putPreview.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts"></a>

```csharp
private void PutTimeouts(MediaLiveEventTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a>

---

##### `ResetAutoStartEnabled` <a name="ResetAutoStartEnabled" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetAutoStartEnabled"></a>

```csharp
private void ResetAutoStartEnabled()
```

##### `ResetCrossSiteAccessPolicy` <a name="ResetCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetCrossSiteAccessPolicy"></a>

```csharp
private void ResetCrossSiteAccessPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetHostnamePrefix` <a name="ResetHostnamePrefix" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetHostnamePrefix"></a>

```csharp
private void ResetHostnamePrefix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetPreview"></a>

```csharp
private void ResetPreview()
```

##### `ResetStreamOptions` <a name="ResetStreamOptions" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetStreamOptions"></a>

```csharp
private void ResetStreamOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTranscriptionLanguages` <a name="ResetTranscriptionLanguages" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetTranscriptionLanguages"></a>

```csharp
private void ResetTranscriptionLanguages()
```

##### `ResetUseStaticHostname` <a name="ResetUseStaticHostname" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.resetUseStaticHostname"></a>

```csharp
private void ResetUseStaticHostname()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaLiveEvent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaLiveEvent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaLiveEvent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicy">CrossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference">MediaLiveEventCrossSiteAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encoding">Encoding</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference">MediaLiveEventEncodingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.input">Input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference">MediaLiveEventInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.preview">Preview</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference">MediaLiveEventPreviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference">MediaLiveEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabledInput">AutoStartEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicyInput">CrossSiteAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encodingInput">EncodingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefixInput">HostnamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.inputInput">InputInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountNameInput">MediaServicesAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.previewInput">PreviewInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptionsInput">StreamOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguagesInput">TranscriptionLanguagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostnameInput">UseStaticHostnameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabled">AutoStartEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefix">HostnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptions">StreamOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguages">TranscriptionLanguages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostname">UseStaticHostname</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CrossSiteAccessPolicy`<sup>Required</sup> <a name="CrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicy"></a>

```csharp
public MediaLiveEventCrossSiteAccessPolicyOutputReference CrossSiteAccessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference">MediaLiveEventCrossSiteAccessPolicyOutputReference</a>

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encoding"></a>

```csharp
public MediaLiveEventEncodingOutputReference Encoding { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference">MediaLiveEventEncodingOutputReference</a>

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.input"></a>

```csharp
public MediaLiveEventInputOutputReference Input { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference">MediaLiveEventInputOutputReference</a>

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.preview"></a>

```csharp
public MediaLiveEventPreviewOutputReference Preview { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference">MediaLiveEventPreviewOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeouts"></a>

```csharp
public MediaLiveEventTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference">MediaLiveEventTimeoutsOutputReference</a>

---

##### `AutoStartEnabledInput`<sup>Optional</sup> <a name="AutoStartEnabledInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabledInput"></a>

```csharp
public object AutoStartEnabledInput { get; }
```

- *Type:* object

---

##### `CrossSiteAccessPolicyInput`<sup>Optional</sup> <a name="CrossSiteAccessPolicyInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.crossSiteAccessPolicyInput"></a>

```csharp
public MediaLiveEventCrossSiteAccessPolicy CrossSiteAccessPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.encodingInput"></a>

```csharp
public MediaLiveEventEncoding EncodingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

---

##### `HostnamePrefixInput`<sup>Optional</sup> <a name="HostnamePrefixInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefixInput"></a>

```csharp
public string HostnamePrefixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.inputInput"></a>

```csharp
public MediaLiveEventInput InputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MediaServicesAccountNameInput`<sup>Optional</sup> <a name="MediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountNameInput"></a>

```csharp
public string MediaServicesAccountNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.previewInput"></a>

```csharp
public MediaLiveEventPreview PreviewInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StreamOptionsInput`<sup>Optional</sup> <a name="StreamOptionsInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptionsInput"></a>

```csharp
public string[] StreamOptionsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TranscriptionLanguagesInput`<sup>Optional</sup> <a name="TranscriptionLanguagesInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguagesInput"></a>

```csharp
public string[] TranscriptionLanguagesInput { get; }
```

- *Type:* string[]

---

##### `UseStaticHostnameInput`<sup>Optional</sup> <a name="UseStaticHostnameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostnameInput"></a>

```csharp
public object UseStaticHostnameInput { get; }
```

- *Type:* object

---

##### `AutoStartEnabled`<sup>Required</sup> <a name="AutoStartEnabled" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.autoStartEnabled"></a>

```csharp
public object AutoStartEnabled { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.hostnamePrefix"></a>

```csharp
public string HostnamePrefix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.mediaServicesAccountName"></a>

```csharp
public string MediaServicesAccountName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StreamOptions`<sup>Required</sup> <a name="StreamOptions" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.streamOptions"></a>

```csharp
public string[] StreamOptions { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TranscriptionLanguages`<sup>Required</sup> <a name="TranscriptionLanguages" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.transcriptionLanguages"></a>

```csharp
public string[] TranscriptionLanguages { get; }
```

- *Type:* string[]

---

##### `UseStaticHostname`<sup>Required</sup> <a name="UseStaticHostname" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.useStaticHostname"></a>

```csharp
public object UseStaticHostname { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEvent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaLiveEventConfig <a name="MediaLiveEventConfig" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MediaLiveEventInput Input,
    string Location,
    string MediaServicesAccountName,
    string Name,
    string ResourceGroupName,
    object AutoStartEnabled = null,
    MediaLiveEventCrossSiteAccessPolicy CrossSiteAccessPolicy = null,
    string Description = null,
    MediaLiveEventEncoding Encoding = null,
    string HostnamePrefix = null,
    string Id = null,
    MediaLiveEventPreview Preview = null,
    string[] StreamOptions = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MediaLiveEventTimeouts Timeouts = null,
    string[] TranscriptionLanguages = null,
    object UseStaticHostname = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.input">Input</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#location MediaLiveEvent#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#media_services_account_name MediaLiveEvent#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#name MediaLiveEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#resource_group_name MediaLiveEvent#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.autoStartEnabled">AutoStartEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#auto_start_enabled MediaLiveEvent#auto_start_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.crossSiteAccessPolicy">CrossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a></code> | cross_site_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#description MediaLiveEvent#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.encoding">Encoding</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a></code> | encoding block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.hostnamePrefix">HostnamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#hostname_prefix MediaLiveEvent#hostname_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#id MediaLiveEvent#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.preview">Preview</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a></code> | preview block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.streamOptions">StreamOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#stream_options MediaLiveEvent#stream_options}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#tags MediaLiveEvent#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.transcriptionLanguages">TranscriptionLanguages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#transcription_languages MediaLiveEvent#transcription_languages}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.useStaticHostname">UseStaticHostname</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#use_static_hostname MediaLiveEvent#use_static_hostname}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.input"></a>

```csharp
public MediaLiveEventInput Input { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#input MediaLiveEvent#input}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#location MediaLiveEvent#location}.

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.mediaServicesAccountName"></a>

```csharp
public string MediaServicesAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#media_services_account_name MediaLiveEvent#media_services_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#name MediaLiveEvent#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#resource_group_name MediaLiveEvent#resource_group_name}.

---

##### `AutoStartEnabled`<sup>Optional</sup> <a name="AutoStartEnabled" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.autoStartEnabled"></a>

```csharp
public object AutoStartEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#auto_start_enabled MediaLiveEvent#auto_start_enabled}.

---

##### `CrossSiteAccessPolicy`<sup>Optional</sup> <a name="CrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.crossSiteAccessPolicy"></a>

```csharp
public MediaLiveEventCrossSiteAccessPolicy CrossSiteAccessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

cross_site_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#cross_site_access_policy MediaLiveEvent#cross_site_access_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#description MediaLiveEvent#description}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.encoding"></a>

```csharp
public MediaLiveEventEncoding Encoding { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

encoding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#encoding MediaLiveEvent#encoding}

---

##### `HostnamePrefix`<sup>Optional</sup> <a name="HostnamePrefix" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.hostnamePrefix"></a>

```csharp
public string HostnamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#hostname_prefix MediaLiveEvent#hostname_prefix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#id MediaLiveEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.preview"></a>

```csharp
public MediaLiveEventPreview Preview { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

preview block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#preview MediaLiveEvent#preview}

---

##### `StreamOptions`<sup>Optional</sup> <a name="StreamOptions" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.streamOptions"></a>

```csharp
public string[] StreamOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#stream_options MediaLiveEvent#stream_options}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#tags MediaLiveEvent#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.timeouts"></a>

```csharp
public MediaLiveEventTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts">MediaLiveEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#timeouts MediaLiveEvent#timeouts}

---

##### `TranscriptionLanguages`<sup>Optional</sup> <a name="TranscriptionLanguages" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.transcriptionLanguages"></a>

```csharp
public string[] TranscriptionLanguages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#transcription_languages MediaLiveEvent#transcription_languages}.

---

##### `UseStaticHostname`<sup>Optional</sup> <a name="UseStaticHostname" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventConfig.property.useStaticHostname"></a>

```csharp
public object UseStaticHostname { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#use_static_hostname MediaLiveEvent#use_static_hostname}.

---

### MediaLiveEventCrossSiteAccessPolicy <a name="MediaLiveEventCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventCrossSiteAccessPolicy {
    string ClientAccessPolicy = null,
    string CrossDomainPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.clientAccessPolicy">ClientAccessPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#client_access_policy MediaLiveEvent#client_access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.crossDomainPolicy">CrossDomainPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#cross_domain_policy MediaLiveEvent#cross_domain_policy}. |

---

##### `ClientAccessPolicy`<sup>Optional</sup> <a name="ClientAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.clientAccessPolicy"></a>

```csharp
public string ClientAccessPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#client_access_policy MediaLiveEvent#client_access_policy}.

---

##### `CrossDomainPolicy`<sup>Optional</sup> <a name="CrossDomainPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy.property.crossDomainPolicy"></a>

```csharp
public string CrossDomainPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#cross_domain_policy MediaLiveEvent#cross_domain_policy}.

---

### MediaLiveEventEncoding <a name="MediaLiveEventEncoding" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventEncoding {
    string KeyFrameInterval = null,
    string PresetName = null,
    string StretchMode = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.keyFrameInterval">KeyFrameInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#key_frame_interval MediaLiveEvent#key_frame_interval}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.presetName">PresetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#preset_name MediaLiveEvent#preset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.stretchMode">StretchMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#stretch_mode MediaLiveEvent#stretch_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#type MediaLiveEvent#type}. |

---

##### `KeyFrameInterval`<sup>Optional</sup> <a name="KeyFrameInterval" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.keyFrameInterval"></a>

```csharp
public string KeyFrameInterval { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#key_frame_interval MediaLiveEvent#key_frame_interval}.

---

##### `PresetName`<sup>Optional</sup> <a name="PresetName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.presetName"></a>

```csharp
public string PresetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#preset_name MediaLiveEvent#preset_name}.

---

##### `StretchMode`<sup>Optional</sup> <a name="StretchMode" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.stretchMode"></a>

```csharp
public string StretchMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#stretch_mode MediaLiveEvent#stretch_mode}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#type MediaLiveEvent#type}.

---

### MediaLiveEventInput <a name="MediaLiveEventInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventInput {
    string AccessToken = null,
    object IpAccessControlAllow = null,
    string KeyFrameIntervalDuration = null,
    string StreamingProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#access_token MediaLiveEvent#access_token}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.ipAccessControlAllow">IpAccessControlAllow</a></code> | <code>object</code> | ip_access_control_allow block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.keyFrameIntervalDuration">KeyFrameIntervalDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#key_frame_interval_duration MediaLiveEvent#key_frame_interval_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.streamingProtocol">StreamingProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#streaming_protocol MediaLiveEvent#streaming_protocol}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#access_token MediaLiveEvent#access_token}.

---

##### `IpAccessControlAllow`<sup>Optional</sup> <a name="IpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.ipAccessControlAllow"></a>

```csharp
public object IpAccessControlAllow { get; set; }
```

- *Type:* object

ip_access_control_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}

---

##### `KeyFrameIntervalDuration`<sup>Optional</sup> <a name="KeyFrameIntervalDuration" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.keyFrameIntervalDuration"></a>

```csharp
public string KeyFrameIntervalDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#key_frame_interval_duration MediaLiveEvent#key_frame_interval_duration}.

---

##### `StreamingProtocol`<sup>Optional</sup> <a name="StreamingProtocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput.property.streamingProtocol"></a>

```csharp
public string StreamingProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#streaming_protocol MediaLiveEvent#streaming_protocol}.

---

### MediaLiveEventInputEndpoint <a name="MediaLiveEventInputEndpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventInputEndpoint {

};
```


### MediaLiveEventInputIpAccessControlAllow <a name="MediaLiveEventInputIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventInputIpAccessControlAllow {
    string Address = null,
    string Name = null,
    double SubnetPrefixLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#address MediaLiveEvent#address}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#name MediaLiveEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#address MediaLiveEvent#address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#name MediaLiveEvent#name}.

---

##### `SubnetPrefixLength`<sup>Optional</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllow.property.subnetPrefixLength"></a>

```csharp
public double SubnetPrefixLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}.

---

### MediaLiveEventPreview <a name="MediaLiveEventPreview" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventPreview {
    string AlternativeMediaId = null,
    object IpAccessControlAllow = null,
    string PreviewLocator = null,
    string StreamingPolicyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.alternativeMediaId">AlternativeMediaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#alternative_media_id MediaLiveEvent#alternative_media_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.ipAccessControlAllow">IpAccessControlAllow</a></code> | <code>object</code> | ip_access_control_allow block. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.previewLocator">PreviewLocator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#preview_locator MediaLiveEvent#preview_locator}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.streamingPolicyName">StreamingPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#streaming_policy_name MediaLiveEvent#streaming_policy_name}. |

---

##### `AlternativeMediaId`<sup>Optional</sup> <a name="AlternativeMediaId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.alternativeMediaId"></a>

```csharp
public string AlternativeMediaId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#alternative_media_id MediaLiveEvent#alternative_media_id}.

---

##### `IpAccessControlAllow`<sup>Optional</sup> <a name="IpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.ipAccessControlAllow"></a>

```csharp
public object IpAccessControlAllow { get; set; }
```

- *Type:* object

ip_access_control_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#ip_access_control_allow MediaLiveEvent#ip_access_control_allow}

---

##### `PreviewLocator`<sup>Optional</sup> <a name="PreviewLocator" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.previewLocator"></a>

```csharp
public string PreviewLocator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#preview_locator MediaLiveEvent#preview_locator}.

---

##### `StreamingPolicyName`<sup>Optional</sup> <a name="StreamingPolicyName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview.property.streamingPolicyName"></a>

```csharp
public string StreamingPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#streaming_policy_name MediaLiveEvent#streaming_policy_name}.

---

### MediaLiveEventPreviewEndpoint <a name="MediaLiveEventPreviewEndpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventPreviewEndpoint {

};
```


### MediaLiveEventPreviewIpAccessControlAllow <a name="MediaLiveEventPreviewIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventPreviewIpAccessControlAllow {
    string Address = null,
    string Name = null,
    double SubnetPrefixLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#address MediaLiveEvent#address}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#name MediaLiveEvent#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#address MediaLiveEvent#address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#name MediaLiveEvent#name}.

---

##### `SubnetPrefixLength`<sup>Optional</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllow.property.subnetPrefixLength"></a>

```csharp
public double SubnetPrefixLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#subnet_prefix_length MediaLiveEvent#subnet_prefix_length}.

---

### MediaLiveEventTimeouts <a name="MediaLiveEventTimeouts" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#create MediaLiveEvent#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#delete MediaLiveEvent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#read MediaLiveEvent#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#update MediaLiveEvent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#create MediaLiveEvent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#delete MediaLiveEvent#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#read MediaLiveEvent#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/media_live_event#update MediaLiveEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaLiveEventCrossSiteAccessPolicyOutputReference <a name="MediaLiveEventCrossSiteAccessPolicyOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventCrossSiteAccessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientAccessPolicy` <a name="ResetClientAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy"></a>

```csharp
private void ResetClientAccessPolicy()
```

##### `ResetCrossDomainPolicy` <a name="ResetCrossDomainPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy"></a>

```csharp
private void ResetCrossDomainPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput">ClientAccessPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput">CrossDomainPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy">ClientAccessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy">CrossDomainPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientAccessPolicyInput`<sup>Optional</sup> <a name="ClientAccessPolicyInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput"></a>

```csharp
public string ClientAccessPolicyInput { get; }
```

- *Type:* string

---

##### `CrossDomainPolicyInput`<sup>Optional</sup> <a name="CrossDomainPolicyInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput"></a>

```csharp
public string CrossDomainPolicyInput { get; }
```

- *Type:* string

---

##### `ClientAccessPolicy`<sup>Required</sup> <a name="ClientAccessPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy"></a>

```csharp
public string ClientAccessPolicy { get; }
```

- *Type:* string

---

##### `CrossDomainPolicy`<sup>Required</sup> <a name="CrossDomainPolicy" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy"></a>

```csharp
public string CrossDomainPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicyOutputReference.property.internalValue"></a>

```csharp
public MediaLiveEventCrossSiteAccessPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventCrossSiteAccessPolicy">MediaLiveEventCrossSiteAccessPolicy</a>

---


### MediaLiveEventEncodingOutputReference <a name="MediaLiveEventEncodingOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventEncodingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyFrameInterval` <a name="ResetKeyFrameInterval" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetKeyFrameInterval"></a>

```csharp
private void ResetKeyFrameInterval()
```

##### `ResetPresetName` <a name="ResetPresetName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetPresetName"></a>

```csharp
private void ResetPresetName()
```

##### `ResetStretchMode` <a name="ResetStretchMode" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetStretchMode"></a>

```csharp
private void ResetStretchMode()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameIntervalInput">KeyFrameIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetNameInput">PresetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchModeInput">StretchModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameInterval">KeyFrameInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetName">PresetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchMode">StretchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyFrameIntervalInput`<sup>Optional</sup> <a name="KeyFrameIntervalInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameIntervalInput"></a>

```csharp
public string KeyFrameIntervalInput { get; }
```

- *Type:* string

---

##### `PresetNameInput`<sup>Optional</sup> <a name="PresetNameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetNameInput"></a>

```csharp
public string PresetNameInput { get; }
```

- *Type:* string

---

##### `StretchModeInput`<sup>Optional</sup> <a name="StretchModeInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchModeInput"></a>

```csharp
public string StretchModeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `KeyFrameInterval`<sup>Required</sup> <a name="KeyFrameInterval" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.keyFrameInterval"></a>

```csharp
public string KeyFrameInterval { get; }
```

- *Type:* string

---

##### `PresetName`<sup>Required</sup> <a name="PresetName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.presetName"></a>

```csharp
public string PresetName { get; }
```

- *Type:* string

---

##### `StretchMode`<sup>Required</sup> <a name="StretchMode" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.stretchMode"></a>

```csharp
public string StretchMode { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncodingOutputReference.property.internalValue"></a>

```csharp
public MediaLiveEventEncoding InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventEncoding">MediaLiveEventEncoding</a>

---


### MediaLiveEventInputEndpointList <a name="MediaLiveEventInputEndpointList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventInputEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.get"></a>

```csharp
private MediaLiveEventInputEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MediaLiveEventInputEndpointOutputReference <a name="MediaLiveEventInputEndpointOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventInputEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint">MediaLiveEventInputEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointOutputReference.property.internalValue"></a>

```csharp
public MediaLiveEventInputEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpoint">MediaLiveEventInputEndpoint</a>

---


### MediaLiveEventInputIpAccessControlAllowList <a name="MediaLiveEventInputIpAccessControlAllowList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventInputIpAccessControlAllowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.get"></a>

```csharp
private MediaLiveEventInputIpAccessControlAllowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaLiveEventInputIpAccessControlAllowOutputReference <a name="MediaLiveEventInputIpAccessControlAllowOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventInputIpAccessControlAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSubnetPrefixLength` <a name="ResetSubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.resetSubnetPrefixLength"></a>

```csharp
private void ResetSubnetPrefixLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput">SubnetPrefixLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SubnetPrefixLengthInput`<sup>Optional</sup> <a name="SubnetPrefixLengthInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput"></a>

```csharp
public double SubnetPrefixLengthInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SubnetPrefixLength`<sup>Required</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.subnetPrefixLength"></a>

```csharp
public double SubnetPrefixLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaLiveEventInputOutputReference <a name="MediaLiveEventInputOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAccessControlAllow` <a name="PutIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.putIpAccessControlAllow"></a>

```csharp
private void PutIpAccessControlAllow(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.putIpAccessControlAllow.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetIpAccessControlAllow` <a name="ResetIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetIpAccessControlAllow"></a>

```csharp
private void ResetIpAccessControlAllow()
```

##### `ResetKeyFrameIntervalDuration` <a name="ResetKeyFrameIntervalDuration" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetKeyFrameIntervalDuration"></a>

```csharp
private void ResetKeyFrameIntervalDuration()
```

##### `ResetStreamingProtocol` <a name="ResetStreamingProtocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.resetStreamingProtocol"></a>

```csharp
private void ResetStreamingProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList">MediaLiveEventInputEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllow">IpAccessControlAllow</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList">MediaLiveEventInputIpAccessControlAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllowInput">IpAccessControlAllowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDurationInput">KeyFrameIntervalDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocolInput">StreamingProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDuration">KeyFrameIntervalDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocol">StreamingProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.endpoint"></a>

```csharp
public MediaLiveEventInputEndpointList Endpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputEndpointList">MediaLiveEventInputEndpointList</a>

---

##### `IpAccessControlAllow`<sup>Required</sup> <a name="IpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllow"></a>

```csharp
public MediaLiveEventInputIpAccessControlAllowList IpAccessControlAllow { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputIpAccessControlAllowList">MediaLiveEventInputIpAccessControlAllowList</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `IpAccessControlAllowInput`<sup>Optional</sup> <a name="IpAccessControlAllowInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.ipAccessControlAllowInput"></a>

```csharp
public object IpAccessControlAllowInput { get; }
```

- *Type:* object

---

##### `KeyFrameIntervalDurationInput`<sup>Optional</sup> <a name="KeyFrameIntervalDurationInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDurationInput"></a>

```csharp
public string KeyFrameIntervalDurationInput { get; }
```

- *Type:* string

---

##### `StreamingProtocolInput`<sup>Optional</sup> <a name="StreamingProtocolInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocolInput"></a>

```csharp
public string StreamingProtocolInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `KeyFrameIntervalDuration`<sup>Required</sup> <a name="KeyFrameIntervalDuration" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.keyFrameIntervalDuration"></a>

```csharp
public string KeyFrameIntervalDuration { get; }
```

- *Type:* string

---

##### `StreamingProtocol`<sup>Required</sup> <a name="StreamingProtocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.streamingProtocol"></a>

```csharp
public string StreamingProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInputOutputReference.property.internalValue"></a>

```csharp
public MediaLiveEventInput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventInput">MediaLiveEventInput</a>

---


### MediaLiveEventPreviewEndpointList <a name="MediaLiveEventPreviewEndpointList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventPreviewEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.get"></a>

```csharp
private MediaLiveEventPreviewEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MediaLiveEventPreviewEndpointOutputReference <a name="MediaLiveEventPreviewEndpointOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventPreviewEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint">MediaLiveEventPreviewEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointOutputReference.property.internalValue"></a>

```csharp
public MediaLiveEventPreviewEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpoint">MediaLiveEventPreviewEndpoint</a>

---


### MediaLiveEventPreviewIpAccessControlAllowList <a name="MediaLiveEventPreviewIpAccessControlAllowList" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventPreviewIpAccessControlAllowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.get"></a>

```csharp
private MediaLiveEventPreviewIpAccessControlAllowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaLiveEventPreviewIpAccessControlAllowOutputReference <a name="MediaLiveEventPreviewIpAccessControlAllowOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventPreviewIpAccessControlAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSubnetPrefixLength` <a name="ResetSubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.resetSubnetPrefixLength"></a>

```csharp
private void ResetSubnetPrefixLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput">SubnetPrefixLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SubnetPrefixLengthInput`<sup>Optional</sup> <a name="SubnetPrefixLengthInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLengthInput"></a>

```csharp
public double SubnetPrefixLengthInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SubnetPrefixLength`<sup>Required</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.subnetPrefixLength"></a>

```csharp
public double SubnetPrefixLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaLiveEventPreviewOutputReference <a name="MediaLiveEventPreviewOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventPreviewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpAccessControlAllow` <a name="PutIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.putIpAccessControlAllow"></a>

```csharp
private void PutIpAccessControlAllow(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.putIpAccessControlAllow.parameter.value"></a>

- *Type:* object

---

##### `ResetAlternativeMediaId` <a name="ResetAlternativeMediaId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetAlternativeMediaId"></a>

```csharp
private void ResetAlternativeMediaId()
```

##### `ResetIpAccessControlAllow` <a name="ResetIpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetIpAccessControlAllow"></a>

```csharp
private void ResetIpAccessControlAllow()
```

##### `ResetPreviewLocator` <a name="ResetPreviewLocator" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetPreviewLocator"></a>

```csharp
private void ResetPreviewLocator()
```

##### `ResetStreamingPolicyName` <a name="ResetStreamingPolicyName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.resetStreamingPolicyName"></a>

```csharp
private void ResetStreamingPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList">MediaLiveEventPreviewEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllow">IpAccessControlAllow</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList">MediaLiveEventPreviewIpAccessControlAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaIdInput">AlternativeMediaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllowInput">IpAccessControlAllowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocatorInput">PreviewLocatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyNameInput">StreamingPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaId">AlternativeMediaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocator">PreviewLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyName">StreamingPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.endpoint"></a>

```csharp
public MediaLiveEventPreviewEndpointList Endpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewEndpointList">MediaLiveEventPreviewEndpointList</a>

---

##### `IpAccessControlAllow`<sup>Required</sup> <a name="IpAccessControlAllow" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllow"></a>

```csharp
public MediaLiveEventPreviewIpAccessControlAllowList IpAccessControlAllow { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewIpAccessControlAllowList">MediaLiveEventPreviewIpAccessControlAllowList</a>

---

##### `AlternativeMediaIdInput`<sup>Optional</sup> <a name="AlternativeMediaIdInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaIdInput"></a>

```csharp
public string AlternativeMediaIdInput { get; }
```

- *Type:* string

---

##### `IpAccessControlAllowInput`<sup>Optional</sup> <a name="IpAccessControlAllowInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.ipAccessControlAllowInput"></a>

```csharp
public object IpAccessControlAllowInput { get; }
```

- *Type:* object

---

##### `PreviewLocatorInput`<sup>Optional</sup> <a name="PreviewLocatorInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocatorInput"></a>

```csharp
public string PreviewLocatorInput { get; }
```

- *Type:* string

---

##### `StreamingPolicyNameInput`<sup>Optional</sup> <a name="StreamingPolicyNameInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyNameInput"></a>

```csharp
public string StreamingPolicyNameInput { get; }
```

- *Type:* string

---

##### `AlternativeMediaId`<sup>Required</sup> <a name="AlternativeMediaId" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.alternativeMediaId"></a>

```csharp
public string AlternativeMediaId { get; }
```

- *Type:* string

---

##### `PreviewLocator`<sup>Required</sup> <a name="PreviewLocator" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.previewLocator"></a>

```csharp
public string PreviewLocator { get; }
```

- *Type:* string

---

##### `StreamingPolicyName`<sup>Required</sup> <a name="StreamingPolicyName" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.streamingPolicyName"></a>

```csharp
public string StreamingPolicyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreviewOutputReference.property.internalValue"></a>

```csharp
public MediaLiveEventPreview InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventPreview">MediaLiveEventPreview</a>

---


### MediaLiveEventTimeoutsOutputReference <a name="MediaLiveEventTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaLiveEventTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaLiveEvent.MediaLiveEventTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



