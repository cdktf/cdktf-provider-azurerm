# `azurerm_sentinel_metadata`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_metadata`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata).

# `sentinelMetadata` Submodule <a name="`sentinelMetadata` Submodule" id="@cdktf/provider-azurerm.sentinelMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelMetadata <a name="SentinelMetadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata azurerm_sentinel_metadata}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadata(Construct Scope, string Id, SentinelMetadataConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig">SentinelMetadataConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig">SentinelMetadataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor">PutAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory">PutCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport">PutSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetAuthor">ResetAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetContentSchemaVersion">ResetContentSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCustomVersion">ResetCustomVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetDependency">ResetDependency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetFirstPublishDate">ResetFirstPublishDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetIconId">ResetIconId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetLastPublishDate">ResetLastPublishDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImages">ResetPreviewImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImagesDark">ResetPreviewImagesDark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetProviders">ResetProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSupport">ResetSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTactics">ResetThreatAnalysisTactics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTechniques">ResetThreatAnalysisTechniques</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAuthor` <a name="PutAuthor" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor"></a>

```csharp
private void PutAuthor(SentinelMetadataAuthor Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putAuthor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---

##### `PutCategory` <a name="PutCategory" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory"></a>

```csharp
private void PutCategory(SentinelMetadataCategory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource"></a>

```csharp
private void PutSource(SentinelMetadataSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---

##### `PutSupport` <a name="PutSupport" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport"></a>

```csharp
private void PutSupport(SentinelMetadataSupport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putSupport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts"></a>

```csharp
private void PutTimeouts(SentinelMetadataTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>

---

##### `ResetAuthor` <a name="ResetAuthor" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetAuthor"></a>

```csharp
private void ResetAuthor()
```

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetContentSchemaVersion` <a name="ResetContentSchemaVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetContentSchemaVersion"></a>

```csharp
private void ResetContentSchemaVersion()
```

##### `ResetCustomVersion` <a name="ResetCustomVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetCustomVersion"></a>

```csharp
private void ResetCustomVersion()
```

##### `ResetDependency` <a name="ResetDependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetDependency"></a>

```csharp
private void ResetDependency()
```

##### `ResetFirstPublishDate` <a name="ResetFirstPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetFirstPublishDate"></a>

```csharp
private void ResetFirstPublishDate()
```

##### `ResetIconId` <a name="ResetIconId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetIconId"></a>

```csharp
private void ResetIconId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLastPublishDate` <a name="ResetLastPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetLastPublishDate"></a>

```csharp
private void ResetLastPublishDate()
```

##### `ResetPreviewImages` <a name="ResetPreviewImages" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImages"></a>

```csharp
private void ResetPreviewImages()
```

##### `ResetPreviewImagesDark` <a name="ResetPreviewImagesDark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetPreviewImagesDark"></a>

```csharp
private void ResetPreviewImagesDark()
```

##### `ResetProviders` <a name="ResetProviders" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetProviders"></a>

```csharp
private void ResetProviders()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSupport` <a name="ResetSupport" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetSupport"></a>

```csharp
private void ResetSupport()
```

##### `ResetThreatAnalysisTactics` <a name="ResetThreatAnalysisTactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTactics"></a>

```csharp
private void ResetThreatAnalysisTactics()
```

##### `ResetThreatAnalysisTechniques` <a name="ResetThreatAnalysisTechniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetThreatAnalysisTechniques"></a>

```csharp
private void ResetThreatAnalysisTechniques()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelMetadata.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelMetadata.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SentinelMetadata.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.author">Author</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference">SentinelMetadataAuthorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.category">Category</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference">SentinelMetadataCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference">SentinelMetadataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.support">Support</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference">SentinelMetadataSupportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference">SentinelMetadataTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.authorInput">AuthorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.categoryInput">CategoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentIdInput">ContentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersionInput">ContentSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersionInput">CustomVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependencyInput">DependencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDateInput">FirstPublishDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconIdInput">IconIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDateInput">LastPublishDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentIdInput">ParentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDarkInput">PreviewImagesDarkInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesInput">PreviewImagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providersInput">ProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.supportInput">SupportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTacticsInput">ThreatAnalysisTacticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniquesInput">ThreatAnalysisTechniquesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentId">ContentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersion">ContentSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersion">CustomVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependency">Dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDate">FirstPublishDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconId">IconId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDate">LastPublishDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentId">ParentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImages">PreviewImages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDark">PreviewImagesDark</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providers">Providers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTactics">ThreatAnalysisTactics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniques">ThreatAnalysisTechniques</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.author"></a>

```csharp
public SentinelMetadataAuthorOutputReference Author { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference">SentinelMetadataAuthorOutputReference</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.category"></a>

```csharp
public SentinelMetadataCategoryOutputReference Category { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference">SentinelMetadataCategoryOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.source"></a>

```csharp
public SentinelMetadataSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference">SentinelMetadataSourceOutputReference</a>

---

##### `Support`<sup>Required</sup> <a name="Support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.support"></a>

```csharp
public SentinelMetadataSupportOutputReference Support { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference">SentinelMetadataSupportOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeouts"></a>

```csharp
public SentinelMetadataTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference">SentinelMetadataTimeoutsOutputReference</a>

---

##### `AuthorInput`<sup>Optional</sup> <a name="AuthorInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.authorInput"></a>

```csharp
public SentinelMetadataAuthor AuthorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.categoryInput"></a>

```csharp
public SentinelMetadataCategory CategoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---

##### `ContentIdInput`<sup>Optional</sup> <a name="ContentIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentIdInput"></a>

```csharp
public string ContentIdInput { get; }
```

- *Type:* string

---

##### `ContentSchemaVersionInput`<sup>Optional</sup> <a name="ContentSchemaVersionInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersionInput"></a>

```csharp
public string ContentSchemaVersionInput { get; }
```

- *Type:* string

---

##### `CustomVersionInput`<sup>Optional</sup> <a name="CustomVersionInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersionInput"></a>

```csharp
public string CustomVersionInput { get; }
```

- *Type:* string

---

##### `DependencyInput`<sup>Optional</sup> <a name="DependencyInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependencyInput"></a>

```csharp
public string DependencyInput { get; }
```

- *Type:* string

---

##### `FirstPublishDateInput`<sup>Optional</sup> <a name="FirstPublishDateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDateInput"></a>

```csharp
public string FirstPublishDateInput { get; }
```

- *Type:* string

---

##### `IconIdInput`<sup>Optional</sup> <a name="IconIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconIdInput"></a>

```csharp
public string IconIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `LastPublishDateInput`<sup>Optional</sup> <a name="LastPublishDateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDateInput"></a>

```csharp
public string LastPublishDateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentIdInput"></a>

```csharp
public string ParentIdInput { get; }
```

- *Type:* string

---

##### `PreviewImagesDarkInput`<sup>Optional</sup> <a name="PreviewImagesDarkInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDarkInput"></a>

```csharp
public string[] PreviewImagesDarkInput { get; }
```

- *Type:* string[]

---

##### `PreviewImagesInput`<sup>Optional</sup> <a name="PreviewImagesInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesInput"></a>

```csharp
public string[] PreviewImagesInput { get; }
```

- *Type:* string[]

---

##### `ProvidersInput`<sup>Optional</sup> <a name="ProvidersInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providersInput"></a>

```csharp
public string[] ProvidersInput { get; }
```

- *Type:* string[]

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.sourceInput"></a>

```csharp
public SentinelMetadataSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---

##### `SupportInput`<sup>Optional</sup> <a name="SupportInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.supportInput"></a>

```csharp
public SentinelMetadataSupport SupportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---

##### `ThreatAnalysisTacticsInput`<sup>Optional</sup> <a name="ThreatAnalysisTacticsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTacticsInput"></a>

```csharp
public string[] ThreatAnalysisTacticsInput { get; }
```

- *Type:* string[]

---

##### `ThreatAnalysisTechniquesInput`<sup>Optional</sup> <a name="ThreatAnalysisTechniquesInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniquesInput"></a>

```csharp
public string[] ThreatAnalysisTechniquesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `ContentId`<sup>Required</sup> <a name="ContentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentId"></a>

```csharp
public string ContentId { get; }
```

- *Type:* string

---

##### `ContentSchemaVersion`<sup>Required</sup> <a name="ContentSchemaVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.contentSchemaVersion"></a>

```csharp
public string ContentSchemaVersion { get; }
```

- *Type:* string

---

##### `CustomVersion`<sup>Required</sup> <a name="CustomVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.customVersion"></a>

```csharp
public string CustomVersion { get; }
```

- *Type:* string

---

##### `Dependency`<sup>Required</sup> <a name="Dependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.dependency"></a>

```csharp
public string Dependency { get; }
```

- *Type:* string

---

##### `FirstPublishDate`<sup>Required</sup> <a name="FirstPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.firstPublishDate"></a>

```csharp
public string FirstPublishDate { get; }
```

- *Type:* string

---

##### `IconId`<sup>Required</sup> <a name="IconId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.iconId"></a>

```csharp
public string IconId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LastPublishDate`<sup>Required</sup> <a name="LastPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.lastPublishDate"></a>

```csharp
public string LastPublishDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.parentId"></a>

```csharp
public string ParentId { get; }
```

- *Type:* string

---

##### `PreviewImages`<sup>Required</sup> <a name="PreviewImages" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImages"></a>

```csharp
public string[] PreviewImages { get; }
```

- *Type:* string[]

---

##### `PreviewImagesDark`<sup>Required</sup> <a name="PreviewImagesDark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.previewImagesDark"></a>

```csharp
public string[] PreviewImagesDark { get; }
```

- *Type:* string[]

---

##### `Providers`<sup>Required</sup> <a name="Providers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.providers"></a>

```csharp
public string[] Providers { get; }
```

- *Type:* string[]

---

##### `ThreatAnalysisTactics`<sup>Required</sup> <a name="ThreatAnalysisTactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTactics"></a>

```csharp
public string[] ThreatAnalysisTactics { get; }
```

- *Type:* string[]

---

##### `ThreatAnalysisTechniques`<sup>Required</sup> <a name="ThreatAnalysisTechniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.threatAnalysisTechniques"></a>

```csharp
public string[] ThreatAnalysisTechniques { get; }
```

- *Type:* string[]

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadata.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelMetadataAuthor <a name="SentinelMetadataAuthor" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataAuthor {
    string Email = null,
    string Link = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.link">Link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.link"></a>

```csharp
public string Link { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataCategory <a name="SentinelMetadataCategory" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataCategory {
    string[] Domains = null,
    string[] Verticals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.domains">Domains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#domains SentinelMetadata#domains}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.verticals">Verticals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#verticals SentinelMetadata#verticals}. |

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#domains SentinelMetadata#domains}.

---

##### `Verticals`<sup>Optional</sup> <a name="Verticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory.property.verticals"></a>

```csharp
public string[] Verticals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#verticals SentinelMetadata#verticals}.

---

### SentinelMetadataConfig <a name="SentinelMetadataConfig" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContentId,
    string Kind,
    string Name,
    string ParentId,
    string WorkspaceId,
    SentinelMetadataAuthor Author = null,
    SentinelMetadataCategory Category = null,
    string ContentSchemaVersion = null,
    string CustomVersion = null,
    string Dependency = null,
    string FirstPublishDate = null,
    string IconId = null,
    string Id = null,
    string LastPublishDate = null,
    string[] PreviewImages = null,
    string[] PreviewImagesDark = null,
    string[] Providers = null,
    SentinelMetadataSource Source = null,
    SentinelMetadataSupport Support = null,
    string[] ThreatAnalysisTactics = null,
    string[] ThreatAnalysisTechniques = null,
    SentinelMetadataTimeouts Timeouts = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentId">ContentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.parentId">ParentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.author">Author</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | author block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.category">Category</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | category block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentSchemaVersion">ContentSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.customVersion">CustomVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependency">Dependency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.firstPublishDate">FirstPublishDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.iconId">IconId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lastPublishDate">LastPublishDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImages">PreviewImages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImagesDark">PreviewImagesDark</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.providers">Providers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.support">Support</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTactics">ThreatAnalysisTactics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTechniques">ThreatAnalysisTechniques</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContentId`<sup>Required</sup> <a name="ContentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentId"></a>

```csharp
public string ContentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#content_id SentinelMetadata#content_id}.

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.parentId"></a>

```csharp
public string ParentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#parent_id SentinelMetadata#parent_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#workspace_id SentinelMetadata#workspace_id}.

---

##### `Author`<sup>Optional</sup> <a name="Author" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.author"></a>

```csharp
public SentinelMetadataAuthor Author { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

author block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#author SentinelMetadata#author}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.category"></a>

```csharp
public SentinelMetadataCategory Category { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#category SentinelMetadata#category}

---

##### `ContentSchemaVersion`<sup>Optional</sup> <a name="ContentSchemaVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.contentSchemaVersion"></a>

```csharp
public string ContentSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#content_schema_version SentinelMetadata#content_schema_version}.

---

##### `CustomVersion`<sup>Optional</sup> <a name="CustomVersion" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.customVersion"></a>

```csharp
public string CustomVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#custom_version SentinelMetadata#custom_version}.

---

##### `Dependency`<sup>Optional</sup> <a name="Dependency" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.dependency"></a>

```csharp
public string Dependency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#dependency SentinelMetadata#dependency}.

---

##### `FirstPublishDate`<sup>Optional</sup> <a name="FirstPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.firstPublishDate"></a>

```csharp
public string FirstPublishDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#first_publish_date SentinelMetadata#first_publish_date}.

---

##### `IconId`<sup>Optional</sup> <a name="IconId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.iconId"></a>

```csharp
public string IconId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#icon_id SentinelMetadata#icon_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastPublishDate`<sup>Optional</sup> <a name="LastPublishDate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.lastPublishDate"></a>

```csharp
public string LastPublishDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#last_publish_date SentinelMetadata#last_publish_date}.

---

##### `PreviewImages`<sup>Optional</sup> <a name="PreviewImages" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImages"></a>

```csharp
public string[] PreviewImages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#preview_images SentinelMetadata#preview_images}.

---

##### `PreviewImagesDark`<sup>Optional</sup> <a name="PreviewImagesDark" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.previewImagesDark"></a>

```csharp
public string[] PreviewImagesDark { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#preview_images_dark SentinelMetadata#preview_images_dark}.

---

##### `Providers`<sup>Optional</sup> <a name="Providers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.providers"></a>

```csharp
public string[] Providers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#providers SentinelMetadata#providers}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.source"></a>

```csharp
public SentinelMetadataSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#source SentinelMetadata#source}

---

##### `Support`<sup>Optional</sup> <a name="Support" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.support"></a>

```csharp
public SentinelMetadataSupport Support { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#support SentinelMetadata#support}

---

##### `ThreatAnalysisTactics`<sup>Optional</sup> <a name="ThreatAnalysisTactics" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTactics"></a>

```csharp
public string[] ThreatAnalysisTactics { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#threat_analysis_tactics SentinelMetadata#threat_analysis_tactics}.

---

##### `ThreatAnalysisTechniques`<sup>Optional</sup> <a name="ThreatAnalysisTechniques" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.threatAnalysisTechniques"></a>

```csharp
public string[] ThreatAnalysisTechniques { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#threat_analysis_techniques SentinelMetadata#threat_analysis_techniques}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.timeouts"></a>

```csharp
public SentinelMetadataTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts">SentinelMetadataTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#timeouts SentinelMetadata#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#version SentinelMetadata#version}.

---

### SentinelMetadataSource <a name="SentinelMetadataSource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataSource {
    string Kind,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.kind">Kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#kind SentinelMetadata#kind}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#id SentinelMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataSupport <a name="SentinelMetadataSupport" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataSupport {
    string Tier,
    string Email = null,
    string Link = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.tier">Tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#tier SentinelMetadata#tier}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.link">Link</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}. |

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#tier SentinelMetadata#tier}.

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#email SentinelMetadata#email}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.link"></a>

```csharp
public string Link { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#link SentinelMetadata#link}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#name SentinelMetadata#name}.

---

### SentinelMetadataTimeouts <a name="SentinelMetadataTimeouts" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#create SentinelMetadata#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#delete SentinelMetadata#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#read SentinelMetadata#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#update SentinelMetadata#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#create SentinelMetadata#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#delete SentinelMetadata#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#read SentinelMetadata#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/sentinel_metadata#update SentinelMetadata#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelMetadataAuthorOutputReference <a name="SentinelMetadataAuthorOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataAuthorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetLink` <a name="ResetLink" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetLink"></a>

```csharp
private void ResetLink()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.linkInput">LinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.linkInput"></a>

```csharp
public string LinkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthorOutputReference.property.internalValue"></a>

```csharp
public SentinelMetadataAuthor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataAuthor">SentinelMetadataAuthor</a>

---


### SentinelMetadataCategoryOutputReference <a name="SentinelMetadataCategoryOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataCategoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetVerticals">ResetVerticals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomains` <a name="ResetDomains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetVerticals` <a name="ResetVerticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.resetVerticals"></a>

```csharp
private void ResetVerticals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticalsInput">VerticalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticals">Verticals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `VerticalsInput`<sup>Optional</sup> <a name="VerticalsInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticalsInput"></a>

```csharp
public string[] VerticalsInput { get; }
```

- *Type:* string[]

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `Verticals`<sup>Required</sup> <a name="Verticals" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.verticals"></a>

```csharp
public string[] Verticals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategoryOutputReference.property.internalValue"></a>

```csharp
public SentinelMetadataCategory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataCategory">SentinelMetadataCategory</a>

---


### SentinelMetadataSourceOutputReference <a name="SentinelMetadataSourceOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSourceOutputReference.property.internalValue"></a>

```csharp
public SentinelMetadataSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSource">SentinelMetadataSource</a>

---


### SentinelMetadataSupportOutputReference <a name="SentinelMetadataSupportOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataSupportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetLink` <a name="ResetLink" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetLink"></a>

```csharp
private void ResetLink()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.linkInput">LinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tier">Tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.linkInput"></a>

```csharp
public string LinkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupportOutputReference.property.internalValue"></a>

```csharp
public SentinelMetadataSupport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataSupport">SentinelMetadataSupport</a>

---


### SentinelMetadataTimeoutsOutputReference <a name="SentinelMetadataTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SentinelMetadataTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelMetadata.SentinelMetadataTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



