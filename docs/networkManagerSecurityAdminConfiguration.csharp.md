# `azurerm_network_manager_security_admin_configuration`

Refer to the Terraform Registory for docs: [`azurerm_network_manager_security_admin_configuration`](https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration).

# `networkManagerSecurityAdminConfiguration` Submodule <a name="`networkManagerSecurityAdminConfiguration` Submodule" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerSecurityAdminConfiguration <a name="NetworkManagerSecurityAdminConfiguration" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration azurerm_network_manager_security_admin_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerSecurityAdminConfiguration(Construct Scope, string Id, NetworkManagerSecurityAdminConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig">NetworkManagerSecurityAdminConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig">NetworkManagerSecurityAdminConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetApplyOnNetworkIntentPolicyBasedServices">ResetApplyOnNetworkIntentPolicyBasedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkManagerSecurityAdminConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

---

##### `ResetApplyOnNetworkIntentPolicyBasedServices` <a name="ResetApplyOnNetworkIntentPolicyBasedServices" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetApplyOnNetworkIntentPolicyBasedServices"></a>

```csharp
private void ResetApplyOnNetworkIntentPolicyBasedServices()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkManagerSecurityAdminConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkManagerSecurityAdminConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkManagerSecurityAdminConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference">NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServicesInput">ApplyOnNetworkIntentPolicyBasedServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerIdInput">NetworkManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServices">ApplyOnNetworkIntentPolicyBasedServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerId">NetworkManagerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeouts"></a>

```csharp
public NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference">NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference</a>

---

##### `ApplyOnNetworkIntentPolicyBasedServicesInput`<sup>Optional</sup> <a name="ApplyOnNetworkIntentPolicyBasedServicesInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServicesInput"></a>

```csharp
public string[] ApplyOnNetworkIntentPolicyBasedServicesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkManagerIdInput`<sup>Optional</sup> <a name="NetworkManagerIdInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerIdInput"></a>

```csharp
public string NetworkManagerIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplyOnNetworkIntentPolicyBasedServices`<sup>Required</sup> <a name="ApplyOnNetworkIntentPolicyBasedServices" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.applyOnNetworkIntentPolicyBasedServices"></a>

```csharp
public string[] ApplyOnNetworkIntentPolicyBasedServices { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkManagerId`<sup>Required</sup> <a name="NetworkManagerId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.networkManagerId"></a>

```csharp
public string NetworkManagerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerSecurityAdminConfigurationConfig <a name="NetworkManagerSecurityAdminConfigurationConfig" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerSecurityAdminConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string NetworkManagerId,
    string[] ApplyOnNetworkIntentPolicyBasedServices = null,
    string Description = null,
    string Id = null,
    NetworkManagerSecurityAdminConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#name NetworkManagerSecurityAdminConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.networkManagerId">NetworkManagerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#network_manager_id NetworkManagerSecurityAdminConfiguration#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.applyOnNetworkIntentPolicyBasedServices">ApplyOnNetworkIntentPolicyBasedServices</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#apply_on_network_intent_policy_based_services NetworkManagerSecurityAdminConfiguration#apply_on_network_intent_policy_based_services}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#description NetworkManagerSecurityAdminConfiguration#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#id NetworkManagerSecurityAdminConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#name NetworkManagerSecurityAdminConfiguration#name}.

---

##### `NetworkManagerId`<sup>Required</sup> <a name="NetworkManagerId" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.networkManagerId"></a>

```csharp
public string NetworkManagerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#network_manager_id NetworkManagerSecurityAdminConfiguration#network_manager_id}.

---

##### `ApplyOnNetworkIntentPolicyBasedServices`<sup>Optional</sup> <a name="ApplyOnNetworkIntentPolicyBasedServices" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.applyOnNetworkIntentPolicyBasedServices"></a>

```csharp
public string[] ApplyOnNetworkIntentPolicyBasedServices { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#apply_on_network_intent_policy_based_services NetworkManagerSecurityAdminConfiguration#apply_on_network_intent_policy_based_services}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#description NetworkManagerSecurityAdminConfiguration#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#id NetworkManagerSecurityAdminConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationConfig.property.timeouts"></a>

```csharp
public NetworkManagerSecurityAdminConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts">NetworkManagerSecurityAdminConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#timeouts NetworkManagerSecurityAdminConfiguration#timeouts}

---

### NetworkManagerSecurityAdminConfigurationTimeouts <a name="NetworkManagerSecurityAdminConfigurationTimeouts" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerSecurityAdminConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#create NetworkManagerSecurityAdminConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#delete NetworkManagerSecurityAdminConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#read NetworkManagerSecurityAdminConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#update NetworkManagerSecurityAdminConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#create NetworkManagerSecurityAdminConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#delete NetworkManagerSecurityAdminConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#read NetworkManagerSecurityAdminConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/network_manager_security_admin_configuration#update NetworkManagerSecurityAdminConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference <a name="NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerSecurityAdminConfiguration.NetworkManagerSecurityAdminConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



