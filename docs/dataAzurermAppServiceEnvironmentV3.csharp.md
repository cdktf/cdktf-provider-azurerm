# `data_azurerm_app_service_environment_v3`

Refer to the Terraform Registory for docs: [`data_azurerm_app_service_environment_v3`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3).

# `dataAzurermAppServiceEnvironmentV3` Submodule <a name="`dataAzurermAppServiceEnvironmentV3` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppServiceEnvironmentV3 <a name="DataAzurermAppServiceEnvironmentV3" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3 azurerm_app_service_environment_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppServiceEnvironmentV3(Construct Scope, string Id, DataAzurermAppServiceEnvironmentV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config">DataAzurermAppServiceEnvironmentV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config">DataAzurermAppServiceEnvironmentV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermAppServiceEnvironmentV3Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermAppServiceEnvironmentV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermAppServiceEnvironmentV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermAppServiceEnvironmentV3.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections">AllowNewPrivateEndpointConnections</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.clusterSetting">ClusterSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList">DataAzurermAppServiceEnvironmentV3ClusterSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dedicatedHostCount">DedicatedHostCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dnsSuffix">DnsSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.externalInboundIpAddresses">ExternalInboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.inboundNetworkDependencies">InboundNetworkDependencies</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList">DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalInboundIpAddresses">InternalInboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalLoadBalancingMode">InternalLoadBalancingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.ipSslAddressCount">IpSslAddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.linuxOutboundIpAddresses">LinuxOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.pricingTier">PricingTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference">DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.windowsOutboundIpAddresses">WindowsOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.zoneRedundant">ZoneRedundant</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AllowNewPrivateEndpointConnections`<sup>Required</sup> <a name="AllowNewPrivateEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections"></a>

```csharp
public IResolvable AllowNewPrivateEndpointConnections { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClusterSetting`<sup>Required</sup> <a name="ClusterSetting" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.clusterSetting"></a>

```csharp
public DataAzurermAppServiceEnvironmentV3ClusterSettingList ClusterSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList">DataAzurermAppServiceEnvironmentV3ClusterSettingList</a>

---

##### `DedicatedHostCount`<sup>Required</sup> <a name="DedicatedHostCount" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dedicatedHostCount"></a>

```csharp
public double DedicatedHostCount { get; }
```

- *Type:* double

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dnsSuffix"></a>

```csharp
public string DnsSuffix { get; }
```

- *Type:* string

---

##### `ExternalInboundIpAddresses`<sup>Required</sup> <a name="ExternalInboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.externalInboundIpAddresses"></a>

```csharp
public string[] ExternalInboundIpAddresses { get; }
```

- *Type:* string[]

---

##### `InboundNetworkDependencies`<sup>Required</sup> <a name="InboundNetworkDependencies" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.inboundNetworkDependencies"></a>

```csharp
public DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList InboundNetworkDependencies { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList">DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList</a>

---

##### `InternalInboundIpAddresses`<sup>Required</sup> <a name="InternalInboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalInboundIpAddresses"></a>

```csharp
public string[] InternalInboundIpAddresses { get; }
```

- *Type:* string[]

---

##### `InternalLoadBalancingMode`<sup>Required</sup> <a name="InternalLoadBalancingMode" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalLoadBalancingMode"></a>

```csharp
public string InternalLoadBalancingMode { get; }
```

- *Type:* string

---

##### `IpSslAddressCount`<sup>Required</sup> <a name="IpSslAddressCount" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.ipSslAddressCount"></a>

```csharp
public double IpSslAddressCount { get; }
```

- *Type:* double

---

##### `LinuxOutboundIpAddresses`<sup>Required</sup> <a name="LinuxOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.linuxOutboundIpAddresses"></a>

```csharp
public string[] LinuxOutboundIpAddresses { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PricingTier`<sup>Required</sup> <a name="PricingTier" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.pricingTier"></a>

```csharp
public string PricingTier { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeouts"></a>

```csharp
public DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference">DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference</a>

---

##### `WindowsOutboundIpAddresses`<sup>Required</sup> <a name="WindowsOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.windowsOutboundIpAddresses"></a>

```csharp
public string[] WindowsOutboundIpAddresses { get; }
```

- *Type:* string[]

---

##### `ZoneRedundant`<sup>Required</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.zoneRedundant"></a>

```csharp
public IResolvable ZoneRedundant { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppServiceEnvironmentV3ClusterSetting <a name="DataAzurermAppServiceEnvironmentV3ClusterSetting" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppServiceEnvironmentV3ClusterSetting {

};
```


### DataAzurermAppServiceEnvironmentV3Config <a name="DataAzurermAppServiceEnvironmentV3Config" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppServiceEnvironmentV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermAppServiceEnvironmentV3Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.timeouts"></a>

```csharp
public DataAzurermAppServiceEnvironmentV3Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3#timeouts DataAzurermAppServiceEnvironmentV3#timeouts}

---

### DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies {

};
```


### DataAzurermAppServiceEnvironmentV3Timeouts <a name="DataAzurermAppServiceEnvironmentV3Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppServiceEnvironmentV3Timeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/data-sources/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppServiceEnvironmentV3ClusterSettingList <a name="DataAzurermAppServiceEnvironmentV3ClusterSettingList" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppServiceEnvironmentV3ClusterSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get"></a>

```csharp
private DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference <a name="DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting">DataAzurermAppServiceEnvironmentV3ClusterSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue"></a>

```csharp
public DataAzurermAppServiceEnvironmentV3ClusterSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting">DataAzurermAppServiceEnvironmentV3ClusterSetting</a>

---


### DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get"></a>

```csharp
private DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies">DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue"></a>

```csharp
public DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies">DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies</a>

---


### DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference <a name="DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



