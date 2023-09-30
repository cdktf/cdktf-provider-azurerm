# `data_azurerm_kubernetes_cluster`

Refer to the Terraform Registory for docs: [`data_azurerm_kubernetes_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster).

# `dataAzurermKubernetesCluster` Submodule <a name="`dataAzurermKubernetesCluster` Submodule" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesCluster <a name="DataAzurermKubernetesCluster" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster azurerm_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesCluster(scope: Construct, id: string, config: DataAzurermKubernetesClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig">DataAzurermKubernetesClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig">DataAzurermKubernetesClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermKubernetesClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isConstruct"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformElement"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformDataSource"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.aciConnectorLinux">aciConnectorLinux</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList">DataAzurermKubernetesClusterAciConnectorLinuxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.agentPoolProfile">agentPoolProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList">DataAzurermKubernetesClusterAgentPoolProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.apiServerAuthorizedIpRanges">apiServerAuthorizedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.azureActiveDirectoryRoleBasedAccessControl">azureActiveDirectoryRoleBasedAccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList">DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.azurePolicyEnabled">azurePolicyEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.currentKubernetesVersion">currentKubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.customCaTrustCertificatesBase64">customCaTrustCertificatesBase64</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.dnsPrefix">dnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.httpApplicationRoutingEnabled">httpApplicationRoutingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.httpApplicationRoutingZoneName">httpApplicationRoutingZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList">DataAzurermKubernetesClusterIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.ingressApplicationGateway">ingressApplicationGateway</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList">DataAzurermKubernetesClusterIngressApplicationGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.keyManagementService">keyManagementService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList">DataAzurermKubernetesClusterKeyManagementServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.keyVaultSecretsProvider">keyVaultSecretsProvider</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList">DataAzurermKubernetesClusterKeyVaultSecretsProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeAdminConfig">kubeAdminConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList">DataAzurermKubernetesClusterKubeAdminConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeAdminConfigRaw">kubeAdminConfigRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeConfig">kubeConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList">DataAzurermKubernetesClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeConfigRaw">kubeConfigRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeletIdentity">kubeletIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList">DataAzurermKubernetesClusterKubeletIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.linuxProfile">linuxProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList">DataAzurermKubernetesClusterLinuxProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.microsoftDefender">microsoftDefender</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList">DataAzurermKubernetesClusterMicrosoftDefenderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList">DataAzurermKubernetesClusterNetworkProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nodeResourceGroup">nodeResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nodeResourceGroupId">nodeResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.oidcIssuerEnabled">oidcIssuerEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.oidcIssuerUrl">oidcIssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.omsAgent">omsAgent</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList">DataAzurermKubernetesClusterOmsAgentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.openServiceMeshEnabled">openServiceMeshEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.privateClusterEnabled">privateClusterEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.privateFqdn">privateFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.roleBasedAccessControlEnabled">roleBasedAccessControlEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.serviceMeshProfile">serviceMeshProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList">DataAzurermKubernetesClusterServiceMeshProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList">DataAzurermKubernetesClusterServicePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.storageProfile">storageProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList">DataAzurermKubernetesClusterStorageProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference">DataAzurermKubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.windowsProfile">windowsProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList">DataAzurermKubernetesClusterWindowsProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `aciConnectorLinux`<sup>Required</sup> <a name="aciConnectorLinux" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.aciConnectorLinux"></a>

```typescript
public readonly aciConnectorLinux: DataAzurermKubernetesClusterAciConnectorLinuxList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList">DataAzurermKubernetesClusterAciConnectorLinuxList</a>

---

##### `agentPoolProfile`<sup>Required</sup> <a name="agentPoolProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.agentPoolProfile"></a>

```typescript
public readonly agentPoolProfile: DataAzurermKubernetesClusterAgentPoolProfileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList">DataAzurermKubernetesClusterAgentPoolProfileList</a>

---

##### `apiServerAuthorizedIpRanges`<sup>Required</sup> <a name="apiServerAuthorizedIpRanges" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.apiServerAuthorizedIpRanges"></a>

```typescript
public readonly apiServerAuthorizedIpRanges: string[];
```

- *Type:* string[]

---

##### `azureActiveDirectoryRoleBasedAccessControl`<sup>Required</sup> <a name="azureActiveDirectoryRoleBasedAccessControl" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.azureActiveDirectoryRoleBasedAccessControl"></a>

```typescript
public readonly azureActiveDirectoryRoleBasedAccessControl: DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList">DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList</a>

---

##### `azurePolicyEnabled`<sup>Required</sup> <a name="azurePolicyEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.azurePolicyEnabled"></a>

```typescript
public readonly azurePolicyEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `currentKubernetesVersion`<sup>Required</sup> <a name="currentKubernetesVersion" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.currentKubernetesVersion"></a>

```typescript
public readonly currentKubernetesVersion: string;
```

- *Type:* string

---

##### `customCaTrustCertificatesBase64`<sup>Required</sup> <a name="customCaTrustCertificatesBase64" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.customCaTrustCertificatesBase64"></a>

```typescript
public readonly customCaTrustCertificatesBase64: string[];
```

- *Type:* string[]

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.diskEncryptionSetId"></a>

```typescript
public readonly diskEncryptionSetId: string;
```

- *Type:* string

---

##### `dnsPrefix`<sup>Required</sup> <a name="dnsPrefix" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.dnsPrefix"></a>

```typescript
public readonly dnsPrefix: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `httpApplicationRoutingEnabled`<sup>Required</sup> <a name="httpApplicationRoutingEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.httpApplicationRoutingEnabled"></a>

```typescript
public readonly httpApplicationRoutingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `httpApplicationRoutingZoneName`<sup>Required</sup> <a name="httpApplicationRoutingZoneName" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.httpApplicationRoutingZoneName"></a>

```typescript
public readonly httpApplicationRoutingZoneName: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.identity"></a>

```typescript
public readonly identity: DataAzurermKubernetesClusterIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList">DataAzurermKubernetesClusterIdentityList</a>

---

##### `ingressApplicationGateway`<sup>Required</sup> <a name="ingressApplicationGateway" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.ingressApplicationGateway"></a>

```typescript
public readonly ingressApplicationGateway: DataAzurermKubernetesClusterIngressApplicationGatewayList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList">DataAzurermKubernetesClusterIngressApplicationGatewayList</a>

---

##### `keyManagementService`<sup>Required</sup> <a name="keyManagementService" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.keyManagementService"></a>

```typescript
public readonly keyManagementService: DataAzurermKubernetesClusterKeyManagementServiceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList">DataAzurermKubernetesClusterKeyManagementServiceList</a>

---

##### `keyVaultSecretsProvider`<sup>Required</sup> <a name="keyVaultSecretsProvider" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.keyVaultSecretsProvider"></a>

```typescript
public readonly keyVaultSecretsProvider: DataAzurermKubernetesClusterKeyVaultSecretsProviderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList">DataAzurermKubernetesClusterKeyVaultSecretsProviderList</a>

---

##### `kubeAdminConfig`<sup>Required</sup> <a name="kubeAdminConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeAdminConfig"></a>

```typescript
public readonly kubeAdminConfig: DataAzurermKubernetesClusterKubeAdminConfigList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList">DataAzurermKubernetesClusterKubeAdminConfigList</a>

---

##### `kubeAdminConfigRaw`<sup>Required</sup> <a name="kubeAdminConfigRaw" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeAdminConfigRaw"></a>

```typescript
public readonly kubeAdminConfigRaw: string;
```

- *Type:* string

---

##### `kubeConfig`<sup>Required</sup> <a name="kubeConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeConfig"></a>

```typescript
public readonly kubeConfig: DataAzurermKubernetesClusterKubeConfigList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList">DataAzurermKubernetesClusterKubeConfigList</a>

---

##### `kubeConfigRaw`<sup>Required</sup> <a name="kubeConfigRaw" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeConfigRaw"></a>

```typescript
public readonly kubeConfigRaw: string;
```

- *Type:* string

---

##### `kubeletIdentity`<sup>Required</sup> <a name="kubeletIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubeletIdentity"></a>

```typescript
public readonly kubeletIdentity: DataAzurermKubernetesClusterKubeletIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList">DataAzurermKubernetesClusterKubeletIdentityList</a>

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `linuxProfile`<sup>Required</sup> <a name="linuxProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.linuxProfile"></a>

```typescript
public readonly linuxProfile: DataAzurermKubernetesClusterLinuxProfileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList">DataAzurermKubernetesClusterLinuxProfileList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `microsoftDefender`<sup>Required</sup> <a name="microsoftDefender" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.microsoftDefender"></a>

```typescript
public readonly microsoftDefender: DataAzurermKubernetesClusterMicrosoftDefenderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList">DataAzurermKubernetesClusterMicrosoftDefenderList</a>

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.networkProfile"></a>

```typescript
public readonly networkProfile: DataAzurermKubernetesClusterNetworkProfileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList">DataAzurermKubernetesClusterNetworkProfileList</a>

---

##### `nodeResourceGroup`<sup>Required</sup> <a name="nodeResourceGroup" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nodeResourceGroup"></a>

```typescript
public readonly nodeResourceGroup: string;
```

- *Type:* string

---

##### `nodeResourceGroupId`<sup>Required</sup> <a name="nodeResourceGroupId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nodeResourceGroupId"></a>

```typescript
public readonly nodeResourceGroupId: string;
```

- *Type:* string

---

##### `oidcIssuerEnabled`<sup>Required</sup> <a name="oidcIssuerEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.oidcIssuerEnabled"></a>

```typescript
public readonly oidcIssuerEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `oidcIssuerUrl`<sup>Required</sup> <a name="oidcIssuerUrl" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.oidcIssuerUrl"></a>

```typescript
public readonly oidcIssuerUrl: string;
```

- *Type:* string

---

##### `omsAgent`<sup>Required</sup> <a name="omsAgent" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.omsAgent"></a>

```typescript
public readonly omsAgent: DataAzurermKubernetesClusterOmsAgentList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList">DataAzurermKubernetesClusterOmsAgentList</a>

---

##### `openServiceMeshEnabled`<sup>Required</sup> <a name="openServiceMeshEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.openServiceMeshEnabled"></a>

```typescript
public readonly openServiceMeshEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `privateClusterEnabled`<sup>Required</sup> <a name="privateClusterEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.privateClusterEnabled"></a>

```typescript
public readonly privateClusterEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `privateFqdn`<sup>Required</sup> <a name="privateFqdn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.privateFqdn"></a>

```typescript
public readonly privateFqdn: string;
```

- *Type:* string

---

##### `roleBasedAccessControlEnabled`<sup>Required</sup> <a name="roleBasedAccessControlEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.roleBasedAccessControlEnabled"></a>

```typescript
public readonly roleBasedAccessControlEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serviceMeshProfile`<sup>Required</sup> <a name="serviceMeshProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.serviceMeshProfile"></a>

```typescript
public readonly serviceMeshProfile: DataAzurermKubernetesClusterServiceMeshProfileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList">DataAzurermKubernetesClusterServiceMeshProfileList</a>

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: DataAzurermKubernetesClusterServicePrincipalList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList">DataAzurermKubernetesClusterServicePrincipalList</a>

---

##### `storageProfile`<sup>Required</sup> <a name="storageProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.storageProfile"></a>

```typescript
public readonly storageProfile: DataAzurermKubernetesClusterStorageProfileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList">DataAzurermKubernetesClusterStorageProfileList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermKubernetesClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference">DataAzurermKubernetesClusterTimeoutsOutputReference</a>

---

##### `windowsProfile`<sup>Required</sup> <a name="windowsProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.windowsProfile"></a>

```typescript
public readonly windowsProfile: DataAzurermKubernetesClusterWindowsProfileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList">DataAzurermKubernetesClusterWindowsProfileList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermKubernetesClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesClusterAciConnectorLinux <a name="DataAzurermKubernetesClusterAciConnectorLinux" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinux.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterAciConnectorLinux: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinux = { ... }
```


### DataAzurermKubernetesClusterAgentPoolProfile <a name="DataAzurermKubernetesClusterAgentPoolProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfile.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterAgentPoolProfile: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfile = { ... }
```


### DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings <a name="DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings = { ... }
```


### DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl <a name="DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl = { ... }
```


### DataAzurermKubernetesClusterConfig <a name="DataAzurermKubernetesClusterConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterConfig: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster#name DataAzurermKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster#resource_group_name DataAzurermKubernetesCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster#id DataAzurermKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster#name DataAzurermKubernetesCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster#resource_group_name DataAzurermKubernetesCluster#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster#id DataAzurermKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermKubernetesClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster#timeouts DataAzurermKubernetesCluster#timeouts}

---

### DataAzurermKubernetesClusterIdentity <a name="DataAzurermKubernetesClusterIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentity.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterIdentity: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentity = { ... }
```


### DataAzurermKubernetesClusterIngressApplicationGateway <a name="DataAzurermKubernetesClusterIngressApplicationGateway" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGateway.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterIngressApplicationGateway: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGateway = { ... }
```


### DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity <a name="DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity = { ... }
```


### DataAzurermKubernetesClusterKeyManagementService <a name="DataAzurermKubernetesClusterKeyManagementService" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementService.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterKeyManagementService: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementService = { ... }
```


### DataAzurermKubernetesClusterKeyVaultSecretsProvider <a name="DataAzurermKubernetesClusterKeyVaultSecretsProvider" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProvider.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterKeyVaultSecretsProvider: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProvider = { ... }
```


### DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity <a name="DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity = { ... }
```


### DataAzurermKubernetesClusterKubeAdminConfig <a name="DataAzurermKubernetesClusterKubeAdminConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfig.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterKubeAdminConfig: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfig = { ... }
```


### DataAzurermKubernetesClusterKubeConfig <a name="DataAzurermKubernetesClusterKubeConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfig.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterKubeConfig: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfig = { ... }
```


### DataAzurermKubernetesClusterKubeletIdentity <a name="DataAzurermKubernetesClusterKubeletIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentity.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterKubeletIdentity: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentity = { ... }
```


### DataAzurermKubernetesClusterLinuxProfile <a name="DataAzurermKubernetesClusterLinuxProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfile.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterLinuxProfile: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfile = { ... }
```


### DataAzurermKubernetesClusterLinuxProfileSshKey <a name="DataAzurermKubernetesClusterLinuxProfileSshKey" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKey.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterLinuxProfileSshKey: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKey = { ... }
```


### DataAzurermKubernetesClusterMicrosoftDefender <a name="DataAzurermKubernetesClusterMicrosoftDefender" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefender.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterMicrosoftDefender: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefender = { ... }
```


### DataAzurermKubernetesClusterNetworkProfile <a name="DataAzurermKubernetesClusterNetworkProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfile.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterNetworkProfile: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfile = { ... }
```


### DataAzurermKubernetesClusterOmsAgent <a name="DataAzurermKubernetesClusterOmsAgent" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgent.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterOmsAgent: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgent = { ... }
```


### DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity <a name="DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterOmsAgentOmsAgentIdentity: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity = { ... }
```


### DataAzurermKubernetesClusterServiceMeshProfile <a name="DataAzurermKubernetesClusterServiceMeshProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfile.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterServiceMeshProfile: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfile = { ... }
```


### DataAzurermKubernetesClusterServicePrincipal <a name="DataAzurermKubernetesClusterServicePrincipal" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipal.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterServicePrincipal: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipal = { ... }
```


### DataAzurermKubernetesClusterStorageProfile <a name="DataAzurermKubernetesClusterStorageProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfile.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterStorageProfile: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfile = { ... }
```


### DataAzurermKubernetesClusterTimeouts <a name="DataAzurermKubernetesClusterTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterTimeouts: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster#read DataAzurermKubernetesCluster#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/kubernetes_cluster#read DataAzurermKubernetesCluster#read}.

---

### DataAzurermKubernetesClusterWindowsProfile <a name="DataAzurermKubernetesClusterWindowsProfile" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfile.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

const dataAzurermKubernetesClusterWindowsProfile: dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfile = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesClusterAciConnectorLinuxList <a name="DataAzurermKubernetesClusterAciConnectorLinuxList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterAciConnectorLinuxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterAciConnectorLinuxOutputReference <a name="DataAzurermKubernetesClusterAciConnectorLinuxOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.subnetName">subnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinux">DataAzurermKubernetesClusterAciConnectorLinux</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.subnetName"></a>

```typescript
public readonly subnetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinuxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterAciConnectorLinux;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAciConnectorLinux">DataAzurermKubernetesClusterAciConnectorLinux</a>

---


### DataAzurermKubernetesClusterAgentPoolProfileList <a name="DataAzurermKubernetesClusterAgentPoolProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterAgentPoolProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterAgentPoolProfileOutputReference <a name="DataAzurermKubernetesClusterAgentPoolProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.enableAutoScaling">enableAutoScaling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.enableNodePublicIp">enableNodePublicIp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.maxCount">maxCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.maxPods">maxPods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.minCount">minCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodeLabels">nodeLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodePublicIpPrefixId">nodePublicIpPrefixId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodeTaints">nodeTaints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.orchestratorVersion">orchestratorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.upgradeSettings">upgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList">DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.vmSize">vmSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.vnetSubnetId">vnetSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfile">DataAzurermKubernetesClusterAgentPoolProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `enableAutoScaling`<sup>Required</sup> <a name="enableAutoScaling" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.enableAutoScaling"></a>

```typescript
public readonly enableAutoScaling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableNodePublicIp`<sup>Required</sup> <a name="enableNodePublicIp" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.enableNodePublicIp"></a>

```typescript
public readonly enableNodePublicIp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

---

##### `maxPods`<sup>Required</sup> <a name="maxPods" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.maxPods"></a>

```typescript
public readonly maxPods: number;
```

- *Type:* number

---

##### `minCount`<sup>Required</sup> <a name="minCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.minCount"></a>

```typescript
public readonly minCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeLabels`<sup>Required</sup> <a name="nodeLabels" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodeLabels"></a>

```typescript
public readonly nodeLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `nodePublicIpPrefixId`<sup>Required</sup> <a name="nodePublicIpPrefixId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodePublicIpPrefixId"></a>

```typescript
public readonly nodePublicIpPrefixId: string;
```

- *Type:* string

---

##### `nodeTaints`<sup>Required</sup> <a name="nodeTaints" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.nodeTaints"></a>

```typescript
public readonly nodeTaints: string[];
```

- *Type:* string[]

---

##### `orchestratorVersion`<sup>Required</sup> <a name="orchestratorVersion" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.orchestratorVersion"></a>

```typescript
public readonly orchestratorVersion: string;
```

- *Type:* string

---

##### `osDiskSizeGb`<sup>Required</sup> <a name="osDiskSizeGb" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.osDiskSizeGb"></a>

```typescript
public readonly osDiskSizeGb: number;
```

- *Type:* number

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `upgradeSettings`<sup>Required</sup> <a name="upgradeSettings" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.upgradeSettings"></a>

```typescript
public readonly upgradeSettings: DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList">DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList</a>

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.vmSize"></a>

```typescript
public readonly vmSize: string;
```

- *Type:* string

---

##### `vnetSubnetId`<sup>Required</sup> <a name="vnetSubnetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.vnetSubnetId"></a>

```typescript
public readonly vnetSubnetId: string;
```

- *Type:* string

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterAgentPoolProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfile">DataAzurermKubernetesClusterAgentPoolProfile</a>

---


### DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList <a name="DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference <a name="DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.maxSurge">maxSurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings">DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxSurge`<sup>Required</sup> <a name="maxSurge" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.maxSurge"></a>

```typescript
public readonly maxSurge: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings">DataAzurermKubernetesClusterAgentPoolProfileUpgradeSettings</a>

---


### DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList <a name="DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference <a name="DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.adminGroupObjectIds">adminGroupObjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.azureRbacEnabled">azureRbacEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.clientAppId">clientAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.managed">managed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.serverAppId">serverAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl">DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminGroupObjectIds`<sup>Required</sup> <a name="adminGroupObjectIds" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.adminGroupObjectIds"></a>

```typescript
public readonly adminGroupObjectIds: string[];
```

- *Type:* string[]

---

##### `azureRbacEnabled`<sup>Required</sup> <a name="azureRbacEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.azureRbacEnabled"></a>

```typescript
public readonly azureRbacEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientAppId`<sup>Required</sup> <a name="clientAppId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.clientAppId"></a>

```typescript
public readonly clientAppId: string;
```

- *Type:* string

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.managed"></a>

```typescript
public readonly managed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serverAppId`<sup>Required</sup> <a name="serverAppId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.serverAppId"></a>

```typescript
public readonly serverAppId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl">DataAzurermKubernetesClusterAzureActiveDirectoryRoleBasedAccessControl</a>

---


### DataAzurermKubernetesClusterIdentityList <a name="DataAzurermKubernetesClusterIdentityList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterIdentityOutputReference <a name="DataAzurermKubernetesClusterIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentity">DataAzurermKubernetesClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIdentity">DataAzurermKubernetesClusterIdentity</a>

---


### DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList <a name="DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference <a name="DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity">DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity">DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentity</a>

---


### DataAzurermKubernetesClusterIngressApplicationGatewayList <a name="DataAzurermKubernetesClusterIngressApplicationGatewayList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference <a name="DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.effectiveGatewayId">effectiveGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.gatewayName">gatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.ingressApplicationGatewayIdentity">ingressApplicationGatewayIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList">DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.subnetCidr">subnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGateway">DataAzurermKubernetesClusterIngressApplicationGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveGatewayId`<sup>Required</sup> <a name="effectiveGatewayId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.effectiveGatewayId"></a>

```typescript
public readonly effectiveGatewayId: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.gatewayName"></a>

```typescript
public readonly gatewayName: string;
```

- *Type:* string

---

##### `ingressApplicationGatewayIdentity`<sup>Required</sup> <a name="ingressApplicationGatewayIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.ingressApplicationGatewayIdentity"></a>

```typescript
public readonly ingressApplicationGatewayIdentity: DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList">DataAzurermKubernetesClusterIngressApplicationGatewayIngressApplicationGatewayIdentityList</a>

---

##### `subnetCidr`<sup>Required</sup> <a name="subnetCidr" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.subnetCidr"></a>

```typescript
public readonly subnetCidr: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterIngressApplicationGateway;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterIngressApplicationGateway">DataAzurermKubernetesClusterIngressApplicationGateway</a>

---


### DataAzurermKubernetesClusterKeyManagementServiceList <a name="DataAzurermKubernetesClusterKeyManagementServiceList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterKeyManagementServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterKeyManagementServiceOutputReference <a name="DataAzurermKubernetesClusterKeyManagementServiceOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.keyVaultNetworkAccess">keyVaultNetworkAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementService">DataAzurermKubernetesClusterKeyManagementService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `keyVaultNetworkAccess`<sup>Required</sup> <a name="keyVaultNetworkAccess" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.keyVaultNetworkAccess"></a>

```typescript
public readonly keyVaultNetworkAccess: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterKeyManagementService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyManagementService">DataAzurermKubernetesClusterKeyManagementService</a>

---


### DataAzurermKubernetesClusterKeyVaultSecretsProviderList <a name="DataAzurermKubernetesClusterKeyVaultSecretsProviderList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference <a name="DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretIdentity">secretIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList">DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretRotationEnabled">secretRotationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretRotationInterval">secretRotationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProvider">DataAzurermKubernetesClusterKeyVaultSecretsProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretIdentity`<sup>Required</sup> <a name="secretIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretIdentity"></a>

```typescript
public readonly secretIdentity: DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList">DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList</a>

---

##### `secretRotationEnabled`<sup>Required</sup> <a name="secretRotationEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretRotationEnabled"></a>

```typescript
public readonly secretRotationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `secretRotationInterval`<sup>Required</sup> <a name="secretRotationInterval" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.secretRotationInterval"></a>

```typescript
public readonly secretRotationInterval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterKeyVaultSecretsProvider;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProvider">DataAzurermKubernetesClusterKeyVaultSecretsProvider</a>

---


### DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList <a name="DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference <a name="DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity">DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity">DataAzurermKubernetesClusterKeyVaultSecretsProviderSecretIdentity</a>

---


### DataAzurermKubernetesClusterKubeAdminConfigList <a name="DataAzurermKubernetesClusterKubeAdminConfigList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterKubeAdminConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterKubeAdminConfigOutputReference <a name="DataAzurermKubernetesClusterKubeAdminConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfig">DataAzurermKubernetesClusterKubeAdminConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterKubeAdminConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeAdminConfig">DataAzurermKubernetesClusterKubeAdminConfig</a>

---


### DataAzurermKubernetesClusterKubeConfigList <a name="DataAzurermKubernetesClusterKubeConfigList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterKubeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterKubeConfigOutputReference <a name="DataAzurermKubernetesClusterKubeConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfig">DataAzurermKubernetesClusterKubeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterKubeConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeConfig">DataAzurermKubernetesClusterKubeConfig</a>

---


### DataAzurermKubernetesClusterKubeletIdentityList <a name="DataAzurermKubernetesClusterKubeletIdentityList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterKubeletIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterKubeletIdentityOutputReference <a name="DataAzurermKubernetesClusterKubeletIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentity">DataAzurermKubernetesClusterKubeletIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterKubeletIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterKubeletIdentity">DataAzurermKubernetesClusterKubeletIdentity</a>

---


### DataAzurermKubernetesClusterLinuxProfileList <a name="DataAzurermKubernetesClusterLinuxProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterLinuxProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterLinuxProfileOutputReference <a name="DataAzurermKubernetesClusterLinuxProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.sshKey">sshKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList">DataAzurermKubernetesClusterLinuxProfileSshKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfile">DataAzurermKubernetesClusterLinuxProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.sshKey"></a>

```typescript
public readonly sshKey: DataAzurermKubernetesClusterLinuxProfileSshKeyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList">DataAzurermKubernetesClusterLinuxProfileSshKeyList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterLinuxProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfile">DataAzurermKubernetesClusterLinuxProfile</a>

---


### DataAzurermKubernetesClusterLinuxProfileSshKeyList <a name="DataAzurermKubernetesClusterLinuxProfileSshKeyList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference <a name="DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.keyData">keyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKey">DataAzurermKubernetesClusterLinuxProfileSshKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.keyData"></a>

```typescript
public readonly keyData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterLinuxProfileSshKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterLinuxProfileSshKey">DataAzurermKubernetesClusterLinuxProfileSshKey</a>

---


### DataAzurermKubernetesClusterMicrosoftDefenderList <a name="DataAzurermKubernetesClusterMicrosoftDefenderList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterMicrosoftDefenderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterMicrosoftDefenderOutputReference <a name="DataAzurermKubernetesClusterMicrosoftDefenderOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefender">DataAzurermKubernetesClusterMicrosoftDefender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefenderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterMicrosoftDefender;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterMicrosoftDefender">DataAzurermKubernetesClusterMicrosoftDefender</a>

---


### DataAzurermKubernetesClusterNetworkProfileList <a name="DataAzurermKubernetesClusterNetworkProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterNetworkProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterNetworkProfileOutputReference <a name="DataAzurermKubernetesClusterNetworkProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.dnsServiceIp">dnsServiceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.dockerBridgeCidr">dockerBridgeCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.loadBalancerSku">loadBalancerSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.networkPlugin">networkPlugin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.networkPolicy">networkPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.podCidr">podCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.serviceCidr">serviceCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfile">DataAzurermKubernetesClusterNetworkProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsServiceIp`<sup>Required</sup> <a name="dnsServiceIp" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.dnsServiceIp"></a>

```typescript
public readonly dnsServiceIp: string;
```

- *Type:* string

---

##### `dockerBridgeCidr`<sup>Required</sup> <a name="dockerBridgeCidr" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.dockerBridgeCidr"></a>

```typescript
public readonly dockerBridgeCidr: string;
```

- *Type:* string

---

##### `loadBalancerSku`<sup>Required</sup> <a name="loadBalancerSku" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.loadBalancerSku"></a>

```typescript
public readonly loadBalancerSku: string;
```

- *Type:* string

---

##### `networkPlugin`<sup>Required</sup> <a name="networkPlugin" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.networkPlugin"></a>

```typescript
public readonly networkPlugin: string;
```

- *Type:* string

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.networkPolicy"></a>

```typescript
public readonly networkPolicy: string;
```

- *Type:* string

---

##### `podCidr`<sup>Required</sup> <a name="podCidr" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.podCidr"></a>

```typescript
public readonly podCidr: string;
```

- *Type:* string

---

##### `serviceCidr`<sup>Required</sup> <a name="serviceCidr" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.serviceCidr"></a>

```typescript
public readonly serviceCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterNetworkProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterNetworkProfile">DataAzurermKubernetesClusterNetworkProfile</a>

---


### DataAzurermKubernetesClusterOmsAgentList <a name="DataAzurermKubernetesClusterOmsAgentList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterOmsAgentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList <a name="DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference <a name="DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity">DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity">DataAzurermKubernetesClusterOmsAgentOmsAgentIdentity</a>

---


### DataAzurermKubernetesClusterOmsAgentOutputReference <a name="DataAzurermKubernetesClusterOmsAgentOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.msiAuthForMonitoringEnabled">msiAuthForMonitoringEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.omsAgentIdentity">omsAgentIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList">DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgent">DataAzurermKubernetesClusterOmsAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `msiAuthForMonitoringEnabled`<sup>Required</sup> <a name="msiAuthForMonitoringEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.msiAuthForMonitoringEnabled"></a>

```typescript
public readonly msiAuthForMonitoringEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `omsAgentIdentity`<sup>Required</sup> <a name="omsAgentIdentity" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.omsAgentIdentity"></a>

```typescript
public readonly omsAgentIdentity: DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList">DataAzurermKubernetesClusterOmsAgentOmsAgentIdentityList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterOmsAgent;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterOmsAgent">DataAzurermKubernetesClusterOmsAgent</a>

---


### DataAzurermKubernetesClusterServiceMeshProfileList <a name="DataAzurermKubernetesClusterServiceMeshProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterServiceMeshProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterServiceMeshProfileOutputReference <a name="DataAzurermKubernetesClusterServiceMeshProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.externalIngressGatewayEnabled">externalIngressGatewayEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.internalIngressGatewayEnabled">internalIngressGatewayEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfile">DataAzurermKubernetesClusterServiceMeshProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIngressGatewayEnabled`<sup>Required</sup> <a name="externalIngressGatewayEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.externalIngressGatewayEnabled"></a>

```typescript
public readonly externalIngressGatewayEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalIngressGatewayEnabled`<sup>Required</sup> <a name="internalIngressGatewayEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.internalIngressGatewayEnabled"></a>

```typescript
public readonly internalIngressGatewayEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterServiceMeshProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServiceMeshProfile">DataAzurermKubernetesClusterServiceMeshProfile</a>

---


### DataAzurermKubernetesClusterServicePrincipalList <a name="DataAzurermKubernetesClusterServicePrincipalList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterServicePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterServicePrincipalOutputReference <a name="DataAzurermKubernetesClusterServicePrincipalOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipal">DataAzurermKubernetesClusterServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterServicePrincipal;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterServicePrincipal">DataAzurermKubernetesClusterServicePrincipal</a>

---


### DataAzurermKubernetesClusterStorageProfileList <a name="DataAzurermKubernetesClusterStorageProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterStorageProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterStorageProfileOutputReference <a name="DataAzurermKubernetesClusterStorageProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.blobDriverEnabled">blobDriverEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.diskDriverEnabled">diskDriverEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.diskDriverVersion">diskDriverVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.fileDriverEnabled">fileDriverEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.snapshotControllerEnabled">snapshotControllerEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfile">DataAzurermKubernetesClusterStorageProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blobDriverEnabled`<sup>Required</sup> <a name="blobDriverEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.blobDriverEnabled"></a>

```typescript
public readonly blobDriverEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `diskDriverEnabled`<sup>Required</sup> <a name="diskDriverEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.diskDriverEnabled"></a>

```typescript
public readonly diskDriverEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `diskDriverVersion`<sup>Required</sup> <a name="diskDriverVersion" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.diskDriverVersion"></a>

```typescript
public readonly diskDriverVersion: string;
```

- *Type:* string

---

##### `fileDriverEnabled`<sup>Required</sup> <a name="fileDriverEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.fileDriverEnabled"></a>

```typescript
public readonly fileDriverEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `snapshotControllerEnabled`<sup>Required</sup> <a name="snapshotControllerEnabled" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.snapshotControllerEnabled"></a>

```typescript
public readonly snapshotControllerEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterStorageProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterStorageProfile">DataAzurermKubernetesClusterStorageProfile</a>

---


### DataAzurermKubernetesClusterTimeoutsOutputReference <a name="DataAzurermKubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermKubernetesClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterTimeouts">DataAzurermKubernetesClusterTimeouts</a>

---


### DataAzurermKubernetesClusterWindowsProfileList <a name="DataAzurermKubernetesClusterWindowsProfileList" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.get"></a>

```typescript
public get(index: number): DataAzurermKubernetesClusterWindowsProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermKubernetesClusterWindowsProfileOutputReference <a name="DataAzurermKubernetesClusterWindowsProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer"></a>

```typescript
import { dataAzurermKubernetesCluster } from '@cdktf/provider-azurerm'

new dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfile">DataAzurermKubernetesClusterWindowsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermKubernetesClusterWindowsProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesCluster.DataAzurermKubernetesClusterWindowsProfile">DataAzurermKubernetesClusterWindowsProfile</a>

---



