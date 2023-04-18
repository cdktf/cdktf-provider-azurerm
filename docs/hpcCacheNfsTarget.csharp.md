# `azurerm_hpc_cache_nfs_target`

Refer to the Terraform Registory for docs: [`azurerm_hpc_cache_nfs_target`](https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target).

# `hpcCacheNfsTarget` Submodule <a name="`hpcCacheNfsTarget` Submodule" id="@cdktf/provider-azurerm.hpcCacheNfsTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCacheNfsTarget <a name="HpcCacheNfsTarget" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target azurerm_hpc_cache_nfs_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheNfsTarget(Construct Scope, string Id, HpcCacheNfsTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig">HpcCacheNfsTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig">HpcCacheNfsTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putNamespaceJunction">PutNamespaceJunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutNamespaceJunction` <a name="PutNamespaceJunction" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putNamespaceJunction"></a>

```csharp
private void PutNamespaceJunction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putNamespaceJunction.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putTimeouts"></a>

```csharp
private void PutTimeouts(HpcCacheNfsTargetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheNfsTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheNfsTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

HpcCacheNfsTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.namespaceJunction">NamespaceJunction</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList">HpcCacheNfsTargetNamespaceJunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference">HpcCacheNfsTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cacheNameInput">CacheNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.namespaceJunctionInput">NamespaceJunctionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.targetHostNameInput">TargetHostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.usageModelInput">UsageModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cacheName">CacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.targetHostName">TargetHostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.usageModel">UsageModel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NamespaceJunction`<sup>Required</sup> <a name="NamespaceJunction" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.namespaceJunction"></a>

```csharp
public HpcCacheNfsTargetNamespaceJunctionList NamespaceJunction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList">HpcCacheNfsTargetNamespaceJunctionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.timeouts"></a>

```csharp
public HpcCacheNfsTargetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference">HpcCacheNfsTargetTimeoutsOutputReference</a>

---

##### `CacheNameInput`<sup>Optional</sup> <a name="CacheNameInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cacheNameInput"></a>

```csharp
public string CacheNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceJunctionInput`<sup>Optional</sup> <a name="NamespaceJunctionInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.namespaceJunctionInput"></a>

```csharp
public object NamespaceJunctionInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TargetHostNameInput`<sup>Optional</sup> <a name="TargetHostNameInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.targetHostNameInput"></a>

```csharp
public string TargetHostNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.usageModelInput"></a>

```csharp
public string UsageModelInput { get; }
```

- *Type:* string

---

##### `CacheName`<sup>Required</sup> <a name="CacheName" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cacheName"></a>

```csharp
public string CacheName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `TargetHostName`<sup>Required</sup> <a name="TargetHostName" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.targetHostName"></a>

```csharp
public string TargetHostName { get; }
```

- *Type:* string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.usageModel"></a>

```csharp
public string UsageModel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheNfsTargetConfig <a name="HpcCacheNfsTargetConfig" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheNfsTargetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CacheName,
    string Name,
    object NamespaceJunction,
    string ResourceGroupName,
    string TargetHostName,
    string UsageModel,
    string Id = null,
    HpcCacheNfsTargetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.cacheName">CacheName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#cache_name HpcCacheNfsTarget#cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#name HpcCacheNfsTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.namespaceJunction">NamespaceJunction</a></code> | <code>object</code> | namespace_junction block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#resource_group_name HpcCacheNfsTarget#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.targetHostName">TargetHostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#target_host_name HpcCacheNfsTarget#target_host_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.usageModel">UsageModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#usage_model HpcCacheNfsTarget#usage_model}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#id HpcCacheNfsTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CacheName`<sup>Required</sup> <a name="CacheName" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.cacheName"></a>

```csharp
public string CacheName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#cache_name HpcCacheNfsTarget#cache_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#name HpcCacheNfsTarget#name}.

---

##### `NamespaceJunction`<sup>Required</sup> <a name="NamespaceJunction" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.namespaceJunction"></a>

```csharp
public object NamespaceJunction { get; set; }
```

- *Type:* object

namespace_junction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#namespace_junction HpcCacheNfsTarget#namespace_junction}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#resource_group_name HpcCacheNfsTarget#resource_group_name}.

---

##### `TargetHostName`<sup>Required</sup> <a name="TargetHostName" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.targetHostName"></a>

```csharp
public string TargetHostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#target_host_name HpcCacheNfsTarget#target_host_name}.

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.usageModel"></a>

```csharp
public string UsageModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#usage_model HpcCacheNfsTarget#usage_model}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#id HpcCacheNfsTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.timeouts"></a>

```csharp
public HpcCacheNfsTargetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#timeouts HpcCacheNfsTarget#timeouts}

---

### HpcCacheNfsTargetNamespaceJunction <a name="HpcCacheNfsTargetNamespaceJunction" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheNfsTargetNamespaceJunction {
    string NamespacePath,
    string NfsExport,
    string AccessPolicyName = null,
    string TargetPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.namespacePath">NamespacePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#namespace_path HpcCacheNfsTarget#namespace_path}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.nfsExport">NfsExport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#nfs_export HpcCacheNfsTarget#nfs_export}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.accessPolicyName">AccessPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#access_policy_name HpcCacheNfsTarget#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.targetPath">TargetPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#target_path HpcCacheNfsTarget#target_path}. |

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.namespacePath"></a>

```csharp
public string NamespacePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#namespace_path HpcCacheNfsTarget#namespace_path}.

---

##### `NfsExport`<sup>Required</sup> <a name="NfsExport" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.nfsExport"></a>

```csharp
public string NfsExport { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#nfs_export HpcCacheNfsTarget#nfs_export}.

---

##### `AccessPolicyName`<sup>Optional</sup> <a name="AccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.accessPolicyName"></a>

```csharp
public string AccessPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#access_policy_name HpcCacheNfsTarget#access_policy_name}.

---

##### `TargetPath`<sup>Optional</sup> <a name="TargetPath" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.targetPath"></a>

```csharp
public string TargetPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#target_path HpcCacheNfsTarget#target_path}.

---

### HpcCacheNfsTargetTimeouts <a name="HpcCacheNfsTargetTimeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheNfsTargetTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#create HpcCacheNfsTarget#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#delete HpcCacheNfsTarget#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#read HpcCacheNfsTarget#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#update HpcCacheNfsTarget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#create HpcCacheNfsTarget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#delete HpcCacheNfsTarget#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#read HpcCacheNfsTarget#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache_nfs_target#update HpcCacheNfsTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheNfsTargetNamespaceJunctionList <a name="HpcCacheNfsTargetNamespaceJunctionList" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheNfsTargetNamespaceJunctionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.get"></a>

```csharp
private HpcCacheNfsTargetNamespaceJunctionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HpcCacheNfsTargetNamespaceJunctionOutputReference <a name="HpcCacheNfsTargetNamespaceJunctionOutputReference" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheNfsTargetNamespaceJunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resetAccessPolicyName">ResetAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resetTargetPath">ResetTargetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessPolicyName` <a name="ResetAccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resetAccessPolicyName"></a>

```csharp
private void ResetAccessPolicyName()
```

##### `ResetTargetPath` <a name="ResetTargetPath" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resetTargetPath"></a>

```csharp
private void ResetTargetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.accessPolicyNameInput">AccessPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.namespacePathInput">NamespacePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.nfsExportInput">NfsExportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.targetPathInput">TargetPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.accessPolicyName">AccessPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.namespacePath">NamespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.nfsExport">NfsExport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.targetPath">TargetPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessPolicyNameInput`<sup>Optional</sup> <a name="AccessPolicyNameInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.accessPolicyNameInput"></a>

```csharp
public string AccessPolicyNameInput { get; }
```

- *Type:* string

---

##### `NamespacePathInput`<sup>Optional</sup> <a name="NamespacePathInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.namespacePathInput"></a>

```csharp
public string NamespacePathInput { get; }
```

- *Type:* string

---

##### `NfsExportInput`<sup>Optional</sup> <a name="NfsExportInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.nfsExportInput"></a>

```csharp
public string NfsExportInput { get; }
```

- *Type:* string

---

##### `TargetPathInput`<sup>Optional</sup> <a name="TargetPathInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.targetPathInput"></a>

```csharp
public string TargetPathInput { get; }
```

- *Type:* string

---

##### `AccessPolicyName`<sup>Required</sup> <a name="AccessPolicyName" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.accessPolicyName"></a>

```csharp
public string AccessPolicyName { get; }
```

- *Type:* string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.namespacePath"></a>

```csharp
public string NamespacePath { get; }
```

- *Type:* string

---

##### `NfsExport`<sup>Required</sup> <a name="NfsExport" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.nfsExport"></a>

```csharp
public string NfsExport { get; }
```

- *Type:* string

---

##### `TargetPath`<sup>Required</sup> <a name="TargetPath" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.targetPath"></a>

```csharp
public string TargetPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HpcCacheNfsTargetTimeoutsOutputReference <a name="HpcCacheNfsTargetTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new HpcCacheNfsTargetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



