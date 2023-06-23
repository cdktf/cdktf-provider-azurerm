# `azurerm_traffic_manager_azure_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_traffic_manager_azure_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint).

# `trafficManagerAzureEndpoint` Submodule <a name="`trafficManagerAzureEndpoint` Submodule" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerAzureEndpoint <a name="TrafficManagerAzureEndpoint" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint azurerm_traffic_manager_azure_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new TrafficManagerAzureEndpoint(Construct Scope, string Id, TrafficManagerAzureEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig">TrafficManagerAzureEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig">TrafficManagerAzureEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putCustomHeader">PutCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putSubnet">PutSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetCustomHeader">ResetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetGeoMappings">ResetGeoMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCustomHeader` <a name="PutCustomHeader" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putCustomHeader"></a>

```csharp
private void PutCustomHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putCustomHeader.parameter.value"></a>

- *Type:* object

---

##### `PutSubnet` <a name="PutSubnet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putSubnet"></a>

```csharp
private void PutSubnet(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putSubnet.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(TrafficManagerAzureEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts">TrafficManagerAzureEndpointTimeouts</a>

---

##### `ResetCustomHeader` <a name="ResetCustomHeader" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetCustomHeader"></a>

```csharp
private void ResetCustomHeader()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetGeoMappings` <a name="ResetGeoMappings" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetGeoMappings"></a>

```csharp
private void ResetGeoMappings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetSubnet"></a>

```csharp
private void ResetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.resetWeight"></a>

```csharp
private void ResetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

TrafficManagerAzureEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

TrafficManagerAzureEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

TrafficManagerAzureEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.customHeader">CustomHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList">TrafficManagerAzureEndpointCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.subnet">Subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList">TrafficManagerAzureEndpointSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference">TrafficManagerAzureEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.customHeaderInput">CustomHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.geoMappingsInput">GeoMappingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.profileIdInput">ProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.subnetInput">SubnetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.geoMappings">GeoMappings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.weight">Weight</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomHeader`<sup>Required</sup> <a name="CustomHeader" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.customHeader"></a>

```csharp
public TrafficManagerAzureEndpointCustomHeaderList CustomHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList">TrafficManagerAzureEndpointCustomHeaderList</a>

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.subnet"></a>

```csharp
public TrafficManagerAzureEndpointSubnetList Subnet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList">TrafficManagerAzureEndpointSubnetList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.timeouts"></a>

```csharp
public TrafficManagerAzureEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference">TrafficManagerAzureEndpointTimeoutsOutputReference</a>

---

##### `CustomHeaderInput`<sup>Optional</sup> <a name="CustomHeaderInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.customHeaderInput"></a>

```csharp
public object CustomHeaderInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `GeoMappingsInput`<sup>Optional</sup> <a name="GeoMappingsInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.geoMappingsInput"></a>

```csharp
public string[] GeoMappingsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.profileIdInput"></a>

```csharp
public string ProfileIdInput { get; }
```

- *Type:* string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.subnetInput"></a>

```csharp
public object SubnetInput { get; }
```

- *Type:* object

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `GeoMappings`<sup>Required</sup> <a name="GeoMappings" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.geoMappings"></a>

```csharp
public string[] GeoMappings { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerAzureEndpointConfig <a name="TrafficManagerAzureEndpointConfig" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new TrafficManagerAzureEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ProfileId,
    string TargetResourceId,
    object CustomHeader = null,
    object Enabled = null,
    string[] GeoMappings = null,
    string Id = null,
    double Priority = null,
    object Subnet = null,
    TrafficManagerAzureEndpointTimeouts Timeouts = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#name TrafficManagerAzureEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.profileId">ProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#profile_id TrafficManagerAzureEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#target_resource_id TrafficManagerAzureEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.customHeader">CustomHeader</a></code> | <code>object</code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#enabled TrafficManagerAzureEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.geoMappings">GeoMappings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#geo_mappings TrafficManagerAzureEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#id TrafficManagerAzureEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#priority TrafficManagerAzureEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.subnet">Subnet</a></code> | <code>object</code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts">TrafficManagerAzureEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#weight TrafficManagerAzureEndpoint#weight}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#name TrafficManagerAzureEndpoint#name}.

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.profileId"></a>

```csharp
public string ProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#profile_id TrafficManagerAzureEndpoint#profile_id}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#target_resource_id TrafficManagerAzureEndpoint#target_resource_id}.

---

##### `CustomHeader`<sup>Optional</sup> <a name="CustomHeader" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.customHeader"></a>

```csharp
public object CustomHeader { get; set; }
```

- *Type:* object

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#custom_header TrafficManagerAzureEndpoint#custom_header}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#enabled TrafficManagerAzureEndpoint#enabled}.

---

##### `GeoMappings`<sup>Optional</sup> <a name="GeoMappings" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.geoMappings"></a>

```csharp
public string[] GeoMappings { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#geo_mappings TrafficManagerAzureEndpoint#geo_mappings}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#id TrafficManagerAzureEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#priority TrafficManagerAzureEndpoint#priority}.

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.subnet"></a>

```csharp
public object Subnet { get; set; }
```

- *Type:* object

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#subnet TrafficManagerAzureEndpoint#subnet}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.timeouts"></a>

```csharp
public TrafficManagerAzureEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts">TrafficManagerAzureEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#timeouts TrafficManagerAzureEndpoint#timeouts}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointConfig.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#weight TrafficManagerAzureEndpoint#weight}.

---

### TrafficManagerAzureEndpointCustomHeader <a name="TrafficManagerAzureEndpointCustomHeader" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new TrafficManagerAzureEndpointCustomHeader {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#name TrafficManagerAzureEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#value TrafficManagerAzureEndpoint#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#name TrafficManagerAzureEndpoint#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#value TrafficManagerAzureEndpoint#value}.

---

### TrafficManagerAzureEndpointSubnet <a name="TrafficManagerAzureEndpointSubnet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new TrafficManagerAzureEndpointSubnet {
    string First,
    string Last = null,
    double Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.first">First</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#first TrafficManagerAzureEndpoint#first}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.last">Last</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#last TrafficManagerAzureEndpoint#last}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.scope">Scope</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#scope TrafficManagerAzureEndpoint#scope}. |

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.first"></a>

```csharp
public string First { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#first TrafficManagerAzureEndpoint#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.last"></a>

```csharp
public string Last { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#last TrafficManagerAzureEndpoint#last}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnet.property.scope"></a>

```csharp
public double Scope { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#scope TrafficManagerAzureEndpoint#scope}.

---

### TrafficManagerAzureEndpointTimeouts <a name="TrafficManagerAzureEndpointTimeouts" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new TrafficManagerAzureEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#create TrafficManagerAzureEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#delete TrafficManagerAzureEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#read TrafficManagerAzureEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#update TrafficManagerAzureEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#create TrafficManagerAzureEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#delete TrafficManagerAzureEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#read TrafficManagerAzureEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/traffic_manager_azure_endpoint#update TrafficManagerAzureEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerAzureEndpointCustomHeaderList <a name="TrafficManagerAzureEndpointCustomHeaderList" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new TrafficManagerAzureEndpointCustomHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.get"></a>

```csharp
private TrafficManagerAzureEndpointCustomHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TrafficManagerAzureEndpointCustomHeaderOutputReference <a name="TrafficManagerAzureEndpointCustomHeaderOutputReference" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new TrafficManagerAzureEndpointCustomHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointCustomHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TrafficManagerAzureEndpointSubnetList <a name="TrafficManagerAzureEndpointSubnetList" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new TrafficManagerAzureEndpointSubnetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.get"></a>

```csharp
private TrafficManagerAzureEndpointSubnetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TrafficManagerAzureEndpointSubnetOutputReference <a name="TrafficManagerAzureEndpointSubnetOutputReference" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new TrafficManagerAzureEndpointSubnetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLast` <a name="ResetLast" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resetLast"></a>

```csharp
private void ResetLast()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.firstInput">FirstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.lastInput">LastInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.scopeInput">ScopeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.first">First</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.last">Last</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.scope">Scope</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.firstInput"></a>

```csharp
public string FirstInput { get; }
```

- *Type:* string

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.lastInput"></a>

```csharp
public string LastInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.scopeInput"></a>

```csharp
public double ScopeInput { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.first"></a>

```csharp
public string First { get; }
```

- *Type:* string

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.last"></a>

```csharp
public string Last { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.scope"></a>

```csharp
public double Scope { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointSubnetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TrafficManagerAzureEndpointTimeoutsOutputReference <a name="TrafficManagerAzureEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new TrafficManagerAzureEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerAzureEndpoint.TrafficManagerAzureEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



