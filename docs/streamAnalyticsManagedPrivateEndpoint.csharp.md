# `azurerm_stream_analytics_managed_private_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_managed_private_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint).

# `streamAnalyticsManagedPrivateEndpoint` Submodule <a name="`streamAnalyticsManagedPrivateEndpoint` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsManagedPrivateEndpoint <a name="StreamAnalyticsManagedPrivateEndpoint" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint azurerm_stream_analytics_managed_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsManagedPrivateEndpoint(Construct Scope, string Id, StreamAnalyticsManagedPrivateEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig">StreamAnalyticsManagedPrivateEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig">StreamAnalyticsManagedPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamAnalyticsManagedPrivateEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsManagedPrivateEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsManagedPrivateEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsManagedPrivateEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference">StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterNameInput">StreamAnalyticsClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceNameInput">SubresourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterName">StreamAnalyticsClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceName">SubresourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeouts"></a>

```csharp
public StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference">StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StreamAnalyticsClusterNameInput`<sup>Optional</sup> <a name="StreamAnalyticsClusterNameInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterNameInput"></a>

```csharp
public string StreamAnalyticsClusterNameInput { get; }
```

- *Type:* string

---

##### `SubresourceNameInput`<sup>Optional</sup> <a name="SubresourceNameInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceNameInput"></a>

```csharp
public string SubresourceNameInput { get; }
```

- *Type:* string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StreamAnalyticsClusterName`<sup>Required</sup> <a name="StreamAnalyticsClusterName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterName"></a>

```csharp
public string StreamAnalyticsClusterName { get; }
```

- *Type:* string

---

##### `SubresourceName`<sup>Required</sup> <a name="SubresourceName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceName"></a>

```csharp
public string SubresourceName { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsManagedPrivateEndpointConfig <a name="StreamAnalyticsManagedPrivateEndpointConfig" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsManagedPrivateEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string StreamAnalyticsClusterName,
    string SubresourceName,
    string TargetResourceId,
    string Id = null,
    StreamAnalyticsManagedPrivateEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.streamAnalyticsClusterName">StreamAnalyticsClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.subresourceName">SubresourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}.

---

##### `StreamAnalyticsClusterName`<sup>Required</sup> <a name="StreamAnalyticsClusterName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.streamAnalyticsClusterName"></a>

```csharp
public string StreamAnalyticsClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}.

---

##### `SubresourceName`<sup>Required</sup> <a name="SubresourceName" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.subresourceName"></a>

```csharp
public string SubresourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.timeouts"></a>

```csharp
public StreamAnalyticsManagedPrivateEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#timeouts StreamAnalyticsManagedPrivateEndpoint#timeouts}

---

### StreamAnalyticsManagedPrivateEndpointTimeouts <a name="StreamAnalyticsManagedPrivateEndpointTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsManagedPrivateEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#create StreamAnalyticsManagedPrivateEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#delete StreamAnalyticsManagedPrivateEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#read StreamAnalyticsManagedPrivateEndpoint#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#create StreamAnalyticsManagedPrivateEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#delete StreamAnalyticsManagedPrivateEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/stream_analytics_managed_private_endpoint#read StreamAnalyticsManagedPrivateEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference <a name="StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



