# `azurerm_network_interface_security_group_association`

Refer to the Terraform Registory for docs: [`azurerm_network_interface_security_group_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association).

# `networkInterfaceSecurityGroupAssociation` Submodule <a name="`networkInterfaceSecurityGroupAssociation` Submodule" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceSecurityGroupAssociation <a name="NetworkInterfaceSecurityGroupAssociation" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association azurerm_network_interface_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkInterfaceSecurityGroupAssociation(Construct Scope, string Id, NetworkInterfaceSecurityGroupAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig">NetworkInterfaceSecurityGroupAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig">NetworkInterfaceSecurityGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkInterfaceSecurityGroupAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts">NetworkInterfaceSecurityGroupAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkInterfaceSecurityGroupAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkInterfaceSecurityGroupAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkInterfaceSecurityGroupAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference">NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.networkSecurityGroupIdInput">NetworkSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.timeouts"></a>

```csharp
public NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference">NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupIdInput`<sup>Optional</sup> <a name="NetworkSecurityGroupIdInput" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.networkSecurityGroupIdInput"></a>

```csharp
public string NetworkSecurityGroupIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.networkSecurityGroupId"></a>

```csharp
public string NetworkSecurityGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceSecurityGroupAssociationConfig <a name="NetworkInterfaceSecurityGroupAssociationConfig" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkInterfaceSecurityGroupAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NetworkInterfaceId,
    string NetworkSecurityGroupId,
    string Id = null,
    NetworkInterfaceSecurityGroupAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#network_interface_id NetworkInterfaceSecurityGroupAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#network_security_group_id NetworkInterfaceSecurityGroupAssociation#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#id NetworkInterfaceSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts">NetworkInterfaceSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#network_interface_id NetworkInterfaceSecurityGroupAssociation#network_interface_id}.

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.networkSecurityGroupId"></a>

```csharp
public string NetworkSecurityGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#network_security_group_id NetworkInterfaceSecurityGroupAssociation#network_security_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#id NetworkInterfaceSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationConfig.property.timeouts"></a>

```csharp
public NetworkInterfaceSecurityGroupAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts">NetworkInterfaceSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#timeouts NetworkInterfaceSecurityGroupAssociation#timeouts}

---

### NetworkInterfaceSecurityGroupAssociationTimeouts <a name="NetworkInterfaceSecurityGroupAssociationTimeouts" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkInterfaceSecurityGroupAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#create NetworkInterfaceSecurityGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#delete NetworkInterfaceSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#read NetworkInterfaceSecurityGroupAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#update NetworkInterfaceSecurityGroupAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#create NetworkInterfaceSecurityGroupAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#delete NetworkInterfaceSecurityGroupAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#read NetworkInterfaceSecurityGroupAssociation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/network_interface_security_group_association#update NetworkInterfaceSecurityGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference <a name="NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkInterfaceSecurityGroupAssociation.NetworkInterfaceSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



