# `azurerm_media_streaming_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_media_streaming_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint).

# `mediaStreamingEndpoint` Submodule <a name="`mediaStreamingEndpoint` Submodule" id="@cdktf/provider-azurerm.mediaStreamingEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaStreamingEndpoint <a name="MediaStreamingEndpoint" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint azurerm_media_streaming_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpoint(Construct Scope, string Id, MediaStreamingEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig">MediaStreamingEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig">MediaStreamingEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl">PutAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy">PutCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAccessControl">ResetAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAutoStartEnabled">ResetAutoStartEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnEnabled">ResetCdnEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProfile">ResetCdnProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProvider">ResetCdnProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCrossSiteAccessPolicy">ResetCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCustomHostNames">ResetCustomHostNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetMaxCacheAgeSeconds">ResetMaxCacheAgeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAccessControl` <a name="PutAccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl"></a>

```csharp
private void PutAccessControl(MediaStreamingEndpointAccessControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---

##### `PutCrossSiteAccessPolicy` <a name="PutCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy"></a>

```csharp
private void PutCrossSiteAccessPolicy(MediaStreamingEndpointCrossSiteAccessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(MediaStreamingEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

---

##### `ResetAccessControl` <a name="ResetAccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAccessControl"></a>

```csharp
private void ResetAccessControl()
```

##### `ResetAutoStartEnabled` <a name="ResetAutoStartEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAutoStartEnabled"></a>

```csharp
private void ResetAutoStartEnabled()
```

##### `ResetCdnEnabled` <a name="ResetCdnEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnEnabled"></a>

```csharp
private void ResetCdnEnabled()
```

##### `ResetCdnProfile` <a name="ResetCdnProfile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProfile"></a>

```csharp
private void ResetCdnProfile()
```

##### `ResetCdnProvider` <a name="ResetCdnProvider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProvider"></a>

```csharp
private void ResetCdnProvider()
```

##### `ResetCrossSiteAccessPolicy` <a name="ResetCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCrossSiteAccessPolicy"></a>

```csharp
private void ResetCrossSiteAccessPolicy()
```

##### `ResetCustomHostNames` <a name="ResetCustomHostNames" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCustomHostNames"></a>

```csharp
private void ResetCustomHostNames()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxCacheAgeSeconds` <a name="ResetMaxCacheAgeSeconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetMaxCacheAgeSeconds"></a>

```csharp
private void ResetMaxCacheAgeSeconds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaStreamingEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaStreamingEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaStreamingEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControl">AccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference">MediaStreamingEndpointAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicy">CrossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference">MediaStreamingEndpointCrossSiteAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList">MediaStreamingEndpointSkuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference">MediaStreamingEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControlInput">AccessControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabledInput">AutoStartEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabledInput">CdnEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfileInput">CdnProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProviderInput">CdnProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicyInput">CrossSiteAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNamesInput">CustomHostNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSecondsInput">MaxCacheAgeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountNameInput">MediaServicesAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnitsInput">ScaleUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabled">AutoStartEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabled">CdnEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfile">CdnProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProvider">CdnProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNames">CustomHostNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSeconds">MaxCacheAgeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnits">ScaleUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessControl`<sup>Required</sup> <a name="AccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControl"></a>

```csharp
public MediaStreamingEndpointAccessControlOutputReference AccessControl { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference">MediaStreamingEndpointAccessControlOutputReference</a>

---

##### `CrossSiteAccessPolicy`<sup>Required</sup> <a name="CrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicy"></a>

```csharp
public MediaStreamingEndpointCrossSiteAccessPolicyOutputReference CrossSiteAccessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference">MediaStreamingEndpointCrossSiteAccessPolicyOutputReference</a>

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.sku"></a>

```csharp
public MediaStreamingEndpointSkuList Sku { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList">MediaStreamingEndpointSkuList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeouts"></a>

```csharp
public MediaStreamingEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference">MediaStreamingEndpointTimeoutsOutputReference</a>

---

##### `AccessControlInput`<sup>Optional</sup> <a name="AccessControlInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControlInput"></a>

```csharp
public MediaStreamingEndpointAccessControl AccessControlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---

##### `AutoStartEnabledInput`<sup>Optional</sup> <a name="AutoStartEnabledInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabledInput"></a>

```csharp
public object AutoStartEnabledInput { get; }
```

- *Type:* object

---

##### `CdnEnabledInput`<sup>Optional</sup> <a name="CdnEnabledInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabledInput"></a>

```csharp
public object CdnEnabledInput { get; }
```

- *Type:* object

---

##### `CdnProfileInput`<sup>Optional</sup> <a name="CdnProfileInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfileInput"></a>

```csharp
public string CdnProfileInput { get; }
```

- *Type:* string

---

##### `CdnProviderInput`<sup>Optional</sup> <a name="CdnProviderInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProviderInput"></a>

```csharp
public string CdnProviderInput { get; }
```

- *Type:* string

---

##### `CrossSiteAccessPolicyInput`<sup>Optional</sup> <a name="CrossSiteAccessPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicyInput"></a>

```csharp
public MediaStreamingEndpointCrossSiteAccessPolicy CrossSiteAccessPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---

##### `CustomHostNamesInput`<sup>Optional</sup> <a name="CustomHostNamesInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNamesInput"></a>

```csharp
public string[] CustomHostNamesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaxCacheAgeSecondsInput`<sup>Optional</sup> <a name="MaxCacheAgeSecondsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSecondsInput"></a>

```csharp
public double MaxCacheAgeSecondsInput { get; }
```

- *Type:* double

---

##### `MediaServicesAccountNameInput`<sup>Optional</sup> <a name="MediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountNameInput"></a>

```csharp
public string MediaServicesAccountNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScaleUnitsInput`<sup>Optional</sup> <a name="ScaleUnitsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnitsInput"></a>

```csharp
public double ScaleUnitsInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutoStartEnabled`<sup>Required</sup> <a name="AutoStartEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabled"></a>

```csharp
public object AutoStartEnabled { get; }
```

- *Type:* object

---

##### `CdnEnabled`<sup>Required</sup> <a name="CdnEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabled"></a>

```csharp
public object CdnEnabled { get; }
```

- *Type:* object

---

##### `CdnProfile`<sup>Required</sup> <a name="CdnProfile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfile"></a>

```csharp
public string CdnProfile { get; }
```

- *Type:* string

---

##### `CdnProvider`<sup>Required</sup> <a name="CdnProvider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProvider"></a>

```csharp
public string CdnProvider { get; }
```

- *Type:* string

---

##### `CustomHostNames`<sup>Required</sup> <a name="CustomHostNames" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNames"></a>

```csharp
public string[] CustomHostNames { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaxCacheAgeSeconds`<sup>Required</sup> <a name="MaxCacheAgeSeconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSeconds"></a>

```csharp
public double MaxCacheAgeSeconds { get; }
```

- *Type:* double

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountName"></a>

```csharp
public string MediaServicesAccountName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ScaleUnits`<sup>Required</sup> <a name="ScaleUnits" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnits"></a>

```csharp
public double ScaleUnits { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaStreamingEndpointAccessControl <a name="MediaStreamingEndpointAccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointAccessControl {
    object AkamaiSignatureHeaderAuthenticationKey = null,
    object IpAllow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.akamaiSignatureHeaderAuthenticationKey">AkamaiSignatureHeaderAuthenticationKey</a></code> | <code>object</code> | akamai_signature_header_authentication_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.ipAllow">IpAllow</a></code> | <code>object</code> | ip_allow block. |

---

##### `AkamaiSignatureHeaderAuthenticationKey`<sup>Optional</sup> <a name="AkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.akamaiSignatureHeaderAuthenticationKey"></a>

```csharp
public object AkamaiSignatureHeaderAuthenticationKey { get; set; }
```

- *Type:* object

akamai_signature_header_authentication_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#akamai_signature_header_authentication_key MediaStreamingEndpoint#akamai_signature_header_authentication_key}

---

##### `IpAllow`<sup>Optional</sup> <a name="IpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.ipAllow"></a>

```csharp
public object IpAllow { get; set; }
```

- *Type:* object

ip_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#ip_allow MediaStreamingEndpoint#ip_allow}

---

### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey {
    string Base64Key = null,
    string Expiration = null,
    string Identifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.base64Key">Base64Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#base64_key MediaStreamingEndpoint#base64_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.expiration">Expiration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#expiration MediaStreamingEndpoint#expiration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#identifier MediaStreamingEndpoint#identifier}. |

---

##### `Base64Key`<sup>Optional</sup> <a name="Base64Key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.base64Key"></a>

```csharp
public string Base64Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#base64_key MediaStreamingEndpoint#base64_key}.

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.expiration"></a>

```csharp
public string Expiration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#expiration MediaStreamingEndpoint#expiration}.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#identifier MediaStreamingEndpoint#identifier}.

---

### MediaStreamingEndpointAccessControlIpAllow <a name="MediaStreamingEndpointAccessControlIpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointAccessControlIpAllow {
    string Address = null,
    string Name = null,
    double SubnetPrefixLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#address MediaStreamingEndpoint#address}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#subnet_prefix_length MediaStreamingEndpoint#subnet_prefix_length}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#address MediaStreamingEndpoint#address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}.

---

##### `SubnetPrefixLength`<sup>Optional</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.subnetPrefixLength"></a>

```csharp
public double SubnetPrefixLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#subnet_prefix_length MediaStreamingEndpoint#subnet_prefix_length}.

---

### MediaStreamingEndpointConfig <a name="MediaStreamingEndpointConfig" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string MediaServicesAccountName,
    string Name,
    string ResourceGroupName,
    double ScaleUnits,
    MediaStreamingEndpointAccessControl AccessControl = null,
    object AutoStartEnabled = null,
    object CdnEnabled = null,
    string CdnProfile = null,
    string CdnProvider = null,
    MediaStreamingEndpointCrossSiteAccessPolicy CrossSiteAccessPolicy = null,
    string[] CustomHostNames = null,
    string Description = null,
    string Id = null,
    double MaxCacheAgeSeconds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MediaStreamingEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.scaleUnits">ScaleUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.accessControl">AccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.autoStartEnabled">AutoStartEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnEnabled">CdnEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProfile">CdnProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProvider">CdnProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.crossSiteAccessPolicy">CrossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | cross_site_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.customHostNames">CustomHostNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.maxCacheAgeSeconds">MaxCacheAgeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}.

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.mediaServicesAccountName"></a>

```csharp
public string MediaServicesAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}.

---

##### `ScaleUnits`<sup>Required</sup> <a name="ScaleUnits" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.scaleUnits"></a>

```csharp
public double ScaleUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}.

---

##### `AccessControl`<sup>Optional</sup> <a name="AccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.accessControl"></a>

```csharp
public MediaStreamingEndpointAccessControl AccessControl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#access_control MediaStreamingEndpoint#access_control}

---

##### `AutoStartEnabled`<sup>Optional</sup> <a name="AutoStartEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.autoStartEnabled"></a>

```csharp
public object AutoStartEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}.

---

##### `CdnEnabled`<sup>Optional</sup> <a name="CdnEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnEnabled"></a>

```csharp
public object CdnEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}.

---

##### `CdnProfile`<sup>Optional</sup> <a name="CdnProfile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProfile"></a>

```csharp
public string CdnProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}.

---

##### `CdnProvider`<sup>Optional</sup> <a name="CdnProvider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProvider"></a>

```csharp
public string CdnProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}.

---

##### `CrossSiteAccessPolicy`<sup>Optional</sup> <a name="CrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.crossSiteAccessPolicy"></a>

```csharp
public MediaStreamingEndpointCrossSiteAccessPolicy CrossSiteAccessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

cross_site_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#cross_site_access_policy MediaStreamingEndpoint#cross_site_access_policy}

---

##### `CustomHostNames`<sup>Optional</sup> <a name="CustomHostNames" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.customHostNames"></a>

```csharp
public string[] CustomHostNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxCacheAgeSeconds`<sup>Optional</sup> <a name="MaxCacheAgeSeconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.maxCacheAgeSeconds"></a>

```csharp
public double MaxCacheAgeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.timeouts"></a>

```csharp
public MediaStreamingEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#timeouts MediaStreamingEndpoint#timeouts}

---

### MediaStreamingEndpointCrossSiteAccessPolicy <a name="MediaStreamingEndpointCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointCrossSiteAccessPolicy {
    string ClientAccessPolicy = null,
    string CrossDomainPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.clientAccessPolicy">ClientAccessPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#client_access_policy MediaStreamingEndpoint#client_access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.crossDomainPolicy">CrossDomainPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}. |

---

##### `ClientAccessPolicy`<sup>Optional</sup> <a name="ClientAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.clientAccessPolicy"></a>

```csharp
public string ClientAccessPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#client_access_policy MediaStreamingEndpoint#client_access_policy}.

---

##### `CrossDomainPolicy`<sup>Optional</sup> <a name="CrossDomainPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.crossDomainPolicy"></a>

```csharp
public string CrossDomainPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}.

---

### MediaStreamingEndpointSku <a name="MediaStreamingEndpointSku" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointSku {

};
```


### MediaStreamingEndpointTimeouts <a name="MediaStreamingEndpointTimeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#create MediaStreamingEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#delete MediaStreamingEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#read MediaStreamingEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#update MediaStreamingEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#create MediaStreamingEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#delete MediaStreamingEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#read MediaStreamingEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/media_streaming_endpoint#update MediaStreamingEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get"></a>

```csharp
private MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetBase64Key">ResetBase64Key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase64Key` <a name="ResetBase64Key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetBase64Key"></a>

```csharp
private void ResetBase64Key()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64KeyInput">Base64KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64Key">Base64Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Base64KeyInput`<sup>Optional</sup> <a name="Base64KeyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64KeyInput"></a>

```csharp
public string Base64KeyInput { get; }
```

- *Type:* string

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expirationInput"></a>

```csharp
public string ExpirationInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `Base64Key`<sup>Required</sup> <a name="Base64Key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64Key"></a>

```csharp
public string Base64Key { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaStreamingEndpointAccessControlIpAllowList <a name="MediaStreamingEndpointAccessControlIpAllowList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointAccessControlIpAllowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get"></a>

```csharp
private MediaStreamingEndpointAccessControlIpAllowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaStreamingEndpointAccessControlIpAllowOutputReference <a name="MediaStreamingEndpointAccessControlIpAllowOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointAccessControlIpAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetSubnetPrefixLength">ResetSubnetPrefixLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSubnetPrefixLength` <a name="ResetSubnetPrefixLength" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetSubnetPrefixLength"></a>

```csharp
private void ResetSubnetPrefixLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLengthInput">SubnetPrefixLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLength">SubnetPrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SubnetPrefixLengthInput`<sup>Optional</sup> <a name="SubnetPrefixLengthInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLengthInput"></a>

```csharp
public double SubnetPrefixLengthInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SubnetPrefixLength`<sup>Required</sup> <a name="SubnetPrefixLength" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLength"></a>

```csharp
public double SubnetPrefixLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaStreamingEndpointAccessControlOutputReference <a name="MediaStreamingEndpointAccessControlOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey">PutAkamaiSignatureHeaderAuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow">PutIpAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetAkamaiSignatureHeaderAuthenticationKey">ResetAkamaiSignatureHeaderAuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetIpAllow">ResetIpAllow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAkamaiSignatureHeaderAuthenticationKey` <a name="PutAkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey"></a>

```csharp
private void PutAkamaiSignatureHeaderAuthenticationKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey.parameter.value"></a>

- *Type:* object

---

##### `PutIpAllow` <a name="PutIpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow"></a>

```csharp
private void PutIpAllow(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow.parameter.value"></a>

- *Type:* object

---

##### `ResetAkamaiSignatureHeaderAuthenticationKey` <a name="ResetAkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetAkamaiSignatureHeaderAuthenticationKey"></a>

```csharp
private void ResetAkamaiSignatureHeaderAuthenticationKey()
```

##### `ResetIpAllow` <a name="ResetIpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetIpAllow"></a>

```csharp
private void ResetIpAllow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKey">AkamaiSignatureHeaderAuthenticationKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllow">IpAllow</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList">MediaStreamingEndpointAccessControlIpAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKeyInput">AkamaiSignatureHeaderAuthenticationKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllowInput">IpAllowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AkamaiSignatureHeaderAuthenticationKey`<sup>Required</sup> <a name="AkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKey"></a>

```csharp
public MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList AkamaiSignatureHeaderAuthenticationKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList</a>

---

##### `IpAllow`<sup>Required</sup> <a name="IpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllow"></a>

```csharp
public MediaStreamingEndpointAccessControlIpAllowList IpAllow { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList">MediaStreamingEndpointAccessControlIpAllowList</a>

---

##### `AkamaiSignatureHeaderAuthenticationKeyInput`<sup>Optional</sup> <a name="AkamaiSignatureHeaderAuthenticationKeyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKeyInput"></a>

```csharp
public object AkamaiSignatureHeaderAuthenticationKeyInput { get; }
```

- *Type:* object

---

##### `IpAllowInput`<sup>Optional</sup> <a name="IpAllowInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllowInput"></a>

```csharp
public object IpAllowInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.internalValue"></a>

```csharp
public MediaStreamingEndpointAccessControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---


### MediaStreamingEndpointCrossSiteAccessPolicyOutputReference <a name="MediaStreamingEndpointCrossSiteAccessPolicyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointCrossSiteAccessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy">ResetClientAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy">ResetCrossDomainPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientAccessPolicy` <a name="ResetClientAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy"></a>

```csharp
private void ResetClientAccessPolicy()
```

##### `ResetCrossDomainPolicy` <a name="ResetCrossDomainPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy"></a>

```csharp
private void ResetCrossDomainPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput">ClientAccessPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput">CrossDomainPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy">ClientAccessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy">CrossDomainPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientAccessPolicyInput`<sup>Optional</sup> <a name="ClientAccessPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput"></a>

```csharp
public string ClientAccessPolicyInput { get; }
```

- *Type:* string

---

##### `CrossDomainPolicyInput`<sup>Optional</sup> <a name="CrossDomainPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput"></a>

```csharp
public string CrossDomainPolicyInput { get; }
```

- *Type:* string

---

##### `ClientAccessPolicy`<sup>Required</sup> <a name="ClientAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy"></a>

```csharp
public string ClientAccessPolicy { get; }
```

- *Type:* string

---

##### `CrossDomainPolicy`<sup>Required</sup> <a name="CrossDomainPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy"></a>

```csharp
public string CrossDomainPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.internalValue"></a>

```csharp
public MediaStreamingEndpointCrossSiteAccessPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---


### MediaStreamingEndpointSkuList <a name="MediaStreamingEndpointSkuList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointSkuList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get"></a>

```csharp
private MediaStreamingEndpointSkuOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MediaStreamingEndpointSkuOutputReference <a name="MediaStreamingEndpointSkuOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointSkuOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku">MediaStreamingEndpointSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.internalValue"></a>

```csharp
public MediaStreamingEndpointSku InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku">MediaStreamingEndpointSku</a>

---


### MediaStreamingEndpointTimeoutsOutputReference <a name="MediaStreamingEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



