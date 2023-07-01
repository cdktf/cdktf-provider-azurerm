# `azurerm_integration_service_environment`

Refer to the Terraform Registory for docs: [`azurerm_integration_service_environment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment).

# `integrationServiceEnvironment` Submodule <a name="`integrationServiceEnvironment` Submodule" id="@cdktf/provider-azurerm.integrationServiceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationServiceEnvironment <a name="IntegrationServiceEnvironment" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment azurerm_integration_service_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IntegrationServiceEnvironment(Construct Scope, string Id, IntegrationServiceEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig">IntegrationServiceEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig">IntegrationServiceEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(IntegrationServiceEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts">IntegrationServiceEnvironmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetSkuName"></a>

```csharp
private void ResetSkuName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IntegrationServiceEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IntegrationServiceEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IntegrationServiceEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connectorEndpointIpAddresses">ConnectorEndpointIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connectorOutboundIpAddresses">ConnectorOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference">IntegrationServiceEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.workflowEndpointIpAddresses">WorkflowEndpointIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.workflowOutboundIpAddresses">WorkflowOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.accessEndpointTypeInput">AccessEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.virtualNetworkSubnetIdsInput">VirtualNetworkSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.accessEndpointType">AccessEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectorEndpointIpAddresses`<sup>Required</sup> <a name="ConnectorEndpointIpAddresses" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connectorEndpointIpAddresses"></a>

```csharp
public string[] ConnectorEndpointIpAddresses { get; }
```

- *Type:* string[]

---

##### `ConnectorOutboundIpAddresses`<sup>Required</sup> <a name="ConnectorOutboundIpAddresses" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.connectorOutboundIpAddresses"></a>

```csharp
public string[] ConnectorOutboundIpAddresses { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.timeouts"></a>

```csharp
public IntegrationServiceEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference">IntegrationServiceEnvironmentTimeoutsOutputReference</a>

---

##### `WorkflowEndpointIpAddresses`<sup>Required</sup> <a name="WorkflowEndpointIpAddresses" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.workflowEndpointIpAddresses"></a>

```csharp
public string[] WorkflowEndpointIpAddresses { get; }
```

- *Type:* string[]

---

##### `WorkflowOutboundIpAddresses`<sup>Required</sup> <a name="WorkflowOutboundIpAddresses" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.workflowOutboundIpAddresses"></a>

```csharp
public string[] WorkflowOutboundIpAddresses { get; }
```

- *Type:* string[]

---

##### `AccessEndpointTypeInput`<sup>Optional</sup> <a name="AccessEndpointTypeInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.accessEndpointTypeInput"></a>

```csharp
public string AccessEndpointTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkSubnetIdsInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdsInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.virtualNetworkSubnetIdsInput"></a>

```csharp
public string[] VirtualNetworkSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `AccessEndpointType`<sup>Required</sup> <a name="AccessEndpointType" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.accessEndpointType"></a>

```csharp
public string AccessEndpointType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualNetworkSubnetIds`<sup>Required</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.virtualNetworkSubnetIds"></a>

```csharp
public string[] VirtualNetworkSubnetIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationServiceEnvironmentConfig <a name="IntegrationServiceEnvironmentConfig" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IntegrationServiceEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessEndpointType,
    string Location,
    string Name,
    string ResourceGroupName,
    string[] VirtualNetworkSubnetIds,
    string Id = null,
    string SkuName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IntegrationServiceEnvironmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.accessEndpointType">AccessEndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#access_endpoint_type IntegrationServiceEnvironment#access_endpoint_type}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#location IntegrationServiceEnvironment#location}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#name IntegrationServiceEnvironment#name}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#resource_group_name IntegrationServiceEnvironment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#virtual_network_subnet_ids IntegrationServiceEnvironment#virtual_network_subnet_ids}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#id IntegrationServiceEnvironment#id}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#sku_name IntegrationServiceEnvironment#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#tags IntegrationServiceEnvironment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts">IntegrationServiceEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessEndpointType`<sup>Required</sup> <a name="AccessEndpointType" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.accessEndpointType"></a>

```csharp
public string AccessEndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#access_endpoint_type IntegrationServiceEnvironment#access_endpoint_type}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#location IntegrationServiceEnvironment#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#name IntegrationServiceEnvironment#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#resource_group_name IntegrationServiceEnvironment#resource_group_name}.

---

##### `VirtualNetworkSubnetIds`<sup>Required</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.virtualNetworkSubnetIds"></a>

```csharp
public string[] VirtualNetworkSubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#virtual_network_subnet_ids IntegrationServiceEnvironment#virtual_network_subnet_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#id IntegrationServiceEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#sku_name IntegrationServiceEnvironment#sku_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#tags IntegrationServiceEnvironment#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentConfig.property.timeouts"></a>

```csharp
public IntegrationServiceEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts">IntegrationServiceEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#timeouts IntegrationServiceEnvironment#timeouts}

---

### IntegrationServiceEnvironmentTimeouts <a name="IntegrationServiceEnvironmentTimeouts" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IntegrationServiceEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#create IntegrationServiceEnvironment#create}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#delete IntegrationServiceEnvironment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#read IntegrationServiceEnvironment#read}. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#update IntegrationServiceEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#create IntegrationServiceEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#delete IntegrationServiceEnvironment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#read IntegrationServiceEnvironment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/integration_service_environment#update IntegrationServiceEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationServiceEnvironmentTimeoutsOutputReference <a name="IntegrationServiceEnvironmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IntegrationServiceEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.integrationServiceEnvironment.IntegrationServiceEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



