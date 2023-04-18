# `azurerm_stream_analytics_reference_input_blob`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_reference_input_blob`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob).

# `streamAnalyticsReferenceInputBlob` Submodule <a name="`streamAnalyticsReferenceInputBlob` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsReferenceInputBlob <a name="StreamAnalyticsReferenceInputBlob" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob azurerm_stream_analytics_reference_input_blob}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsReferenceInputBlob(Construct Scope, string Id, StreamAnalyticsReferenceInputBlobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig">StreamAnalyticsReferenceInputBlobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig">StreamAnalyticsReferenceInputBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putSerialization">PutSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetStorageAccountKey">ResetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSerialization` <a name="PutSerialization" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putSerialization"></a>

```csharp
private void PutSerialization(StreamAnalyticsReferenceInputBlobSerialization Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamAnalyticsReferenceInputBlobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a>

---

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetAuthenticationMode"></a>

```csharp
private void ResetAuthenticationMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStorageAccountKey` <a name="ResetStorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetStorageAccountKey"></a>

```csharp
private void ResetStorageAccountKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsReferenceInputBlob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsReferenceInputBlob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsReferenceInputBlob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference">StreamAnalyticsReferenceInputBlobSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference">StreamAnalyticsReferenceInputBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dateFormatInput">DateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.pathPatternInput">PathPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.serializationInput">SerializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageContainerNameInput">StorageContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.streamAnalyticsJobNameInput">StreamAnalyticsJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeFormatInput">TimeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.pathPattern">PathPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageContainerName">StorageContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeFormat">TimeFormat</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.serialization"></a>

```csharp
public StreamAnalyticsReferenceInputBlobSerializationOutputReference Serialization { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference">StreamAnalyticsReferenceInputBlobSerializationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeouts"></a>

```csharp
public StreamAnalyticsReferenceInputBlobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference">StreamAnalyticsReferenceInputBlobTimeoutsOutputReference</a>

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.authenticationModeInput"></a>

```csharp
public string AuthenticationModeInput { get; }
```

- *Type:* string

---

##### `DateFormatInput`<sup>Optional</sup> <a name="DateFormatInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dateFormatInput"></a>

```csharp
public string DateFormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathPatternInput`<sup>Optional</sup> <a name="PathPatternInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.pathPatternInput"></a>

```csharp
public string PathPatternInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SerializationInput`<sup>Optional</sup> <a name="SerializationInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.serializationInput"></a>

```csharp
public StreamAnalyticsReferenceInputBlobSerialization SerializationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a>

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountKeyInput"></a>

```csharp
public string StorageAccountKeyInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `StorageContainerNameInput`<sup>Optional</sup> <a name="StorageContainerNameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageContainerNameInput"></a>

```csharp
public string StorageContainerNameInput { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobNameInput`<sup>Optional</sup> <a name="StreamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.streamAnalyticsJobNameInput"></a>

```csharp
public string StreamAnalyticsJobNameInput { get; }
```

- *Type:* string

---

##### `TimeFormatInput`<sup>Optional</sup> <a name="TimeFormatInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeFormatInput"></a>

```csharp
public string TimeFormatInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.pathPattern"></a>

```csharp
public string PathPattern { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `StorageContainerName`<sup>Required</sup> <a name="StorageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.storageContainerName"></a>

```csharp
public string StorageContainerName { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; }
```

- *Type:* string

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.timeFormat"></a>

```csharp
public string TimeFormat { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsReferenceInputBlobConfig <a name="StreamAnalyticsReferenceInputBlobConfig" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsReferenceInputBlobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DateFormat,
    string Name,
    string PathPattern,
    string ResourceGroupName,
    StreamAnalyticsReferenceInputBlobSerialization Serialization,
    string StorageAccountName,
    string StorageContainerName,
    string StreamAnalyticsJobName,
    string TimeFormat,
    string AuthenticationMode = null,
    string Id = null,
    string StorageAccountKey = null,
    StreamAnalyticsReferenceInputBlobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.dateFormat">DateFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#date_format StreamAnalyticsReferenceInputBlob#date_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#name StreamAnalyticsReferenceInputBlob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.pathPattern">PathPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#path_pattern StreamAnalyticsReferenceInputBlob#path_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#resource_group_name StreamAnalyticsReferenceInputBlob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#storage_account_name StreamAnalyticsReferenceInputBlob#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageContainerName">StorageContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#storage_container_name StreamAnalyticsReferenceInputBlob#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#stream_analytics_job_name StreamAnalyticsReferenceInputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.timeFormat">TimeFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#time_format StreamAnalyticsReferenceInputBlob#time_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#authentication_mode StreamAnalyticsReferenceInputBlob#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#id StreamAnalyticsReferenceInputBlob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#storage_account_key StreamAnalyticsReferenceInputBlob#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.dateFormat"></a>

```csharp
public string DateFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#date_format StreamAnalyticsReferenceInputBlob#date_format}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#name StreamAnalyticsReferenceInputBlob#name}.

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.pathPattern"></a>

```csharp
public string PathPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#path_pattern StreamAnalyticsReferenceInputBlob#path_pattern}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#resource_group_name StreamAnalyticsReferenceInputBlob#resource_group_name}.

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.serialization"></a>

```csharp
public StreamAnalyticsReferenceInputBlobSerialization Serialization { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#serialization StreamAnalyticsReferenceInputBlob#serialization}

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#storage_account_name StreamAnalyticsReferenceInputBlob#storage_account_name}.

---

##### `StorageContainerName`<sup>Required</sup> <a name="StorageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageContainerName"></a>

```csharp
public string StorageContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#storage_container_name StreamAnalyticsReferenceInputBlob#storage_container_name}.

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.streamAnalyticsJobName"></a>

```csharp
public string StreamAnalyticsJobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#stream_analytics_job_name StreamAnalyticsReferenceInputBlob#stream_analytics_job_name}.

---

##### `TimeFormat`<sup>Required</sup> <a name="TimeFormat" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.timeFormat"></a>

```csharp
public string TimeFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#time_format StreamAnalyticsReferenceInputBlob#time_format}.

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#authentication_mode StreamAnalyticsReferenceInputBlob#authentication_mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#id StreamAnalyticsReferenceInputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageAccountKey`<sup>Optional</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#storage_account_key StreamAnalyticsReferenceInputBlob#storage_account_key}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobConfig.property.timeouts"></a>

```csharp
public StreamAnalyticsReferenceInputBlobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts">StreamAnalyticsReferenceInputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#timeouts StreamAnalyticsReferenceInputBlob#timeouts}

---

### StreamAnalyticsReferenceInputBlobSerialization <a name="StreamAnalyticsReferenceInputBlobSerialization" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsReferenceInputBlobSerialization {
    string Type,
    string Encoding = null,
    string FieldDelimiter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#type StreamAnalyticsReferenceInputBlob#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.encoding">Encoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#encoding StreamAnalyticsReferenceInputBlob#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#field_delimiter StreamAnalyticsReferenceInputBlob#field_delimiter}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#type StreamAnalyticsReferenceInputBlob#type}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#encoding StreamAnalyticsReferenceInputBlob#encoding}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#field_delimiter StreamAnalyticsReferenceInputBlob#field_delimiter}.

---

### StreamAnalyticsReferenceInputBlobTimeouts <a name="StreamAnalyticsReferenceInputBlobTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsReferenceInputBlobTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#create StreamAnalyticsReferenceInputBlob#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#delete StreamAnalyticsReferenceInputBlob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#read StreamAnalyticsReferenceInputBlob#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#update StreamAnalyticsReferenceInputBlob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#create StreamAnalyticsReferenceInputBlob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#delete StreamAnalyticsReferenceInputBlob#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#read StreamAnalyticsReferenceInputBlob#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/stream_analytics_reference_input_blob#update StreamAnalyticsReferenceInputBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsReferenceInputBlobSerializationOutputReference <a name="StreamAnalyticsReferenceInputBlobSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsReferenceInputBlobSerializationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerializationOutputReference.property.internalValue"></a>

```csharp
public StreamAnalyticsReferenceInputBlobSerialization InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobSerialization">StreamAnalyticsReferenceInputBlobSerialization</a>

---


### StreamAnalyticsReferenceInputBlobTimeoutsOutputReference <a name="StreamAnalyticsReferenceInputBlobTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsReferenceInputBlobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputBlob.StreamAnalyticsReferenceInputBlobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



