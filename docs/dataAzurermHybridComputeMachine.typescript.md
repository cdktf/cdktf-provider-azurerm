# `data_azurerm_hybrid_compute_machine`

Refer to the Terraform Registory for docs: [`data_azurerm_hybrid_compute_machine`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine).

# `dataAzurermHybridComputeMachine` Submodule <a name="`dataAzurermHybridComputeMachine` Submodule" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermHybridComputeMachine <a name="DataAzurermHybridComputeMachine" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine azurerm_hybrid_compute_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine(scope: Construct, id: string, config: DataAzurermHybridComputeMachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig">DataAzurermHybridComputeMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig">DataAzurermHybridComputeMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermHybridComputeMachineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isConstruct"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformElement"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformDataSource"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.adFqdn">adFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentConfiguration">agentConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList">DataAzurermHybridComputeMachineAgentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.clientPublicKey">clientPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cloudMetadata">cloudMetadata</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList">DataAzurermHybridComputeMachineCloudMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.detectedProperties">detectedProperties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dnsFqdn">dnsFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.errorDetails">errorDetails</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList">DataAzurermHybridComputeMachineErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList">DataAzurermHybridComputeMachineIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lastStatusChange">lastStatusChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.locationData">locationData</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList">DataAzurermHybridComputeMachineLocationDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.machineFqdn">machineFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.mssqlDiscovered">mssqlDiscovered</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osName">osName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osProfile">osProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList">DataAzurermHybridComputeMachineOsProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osSku">osSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osVersion">osVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.parentClusterResourceId">parentClusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.privateLinkScopeResourceId">privateLinkScopeResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.serviceStatus">serviceStatus</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList">DataAzurermHybridComputeMachineServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference">DataAzurermHybridComputeMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmId">vmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmUuid">vmUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `adFqdn`<sup>Required</sup> <a name="adFqdn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.adFqdn"></a>

```typescript
public readonly adFqdn: string;
```

- *Type:* string

---

##### `agentConfiguration`<sup>Required</sup> <a name="agentConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentConfiguration"></a>

```typescript
public readonly agentConfiguration: DataAzurermHybridComputeMachineAgentConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList">DataAzurermHybridComputeMachineAgentConfigurationList</a>

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `clientPublicKey`<sup>Required</sup> <a name="clientPublicKey" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.clientPublicKey"></a>

```typescript
public readonly clientPublicKey: string;
```

- *Type:* string

---

##### `cloudMetadata`<sup>Required</sup> <a name="cloudMetadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.cloudMetadata"></a>

```typescript
public readonly cloudMetadata: DataAzurermHybridComputeMachineCloudMetadataList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList">DataAzurermHybridComputeMachineCloudMetadataList</a>

---

##### `detectedProperties`<sup>Required</sup> <a name="detectedProperties" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.detectedProperties"></a>

```typescript
public readonly detectedProperties: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsFqdn`<sup>Required</sup> <a name="dnsFqdn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.dnsFqdn"></a>

```typescript
public readonly dnsFqdn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `errorDetails`<sup>Required</sup> <a name="errorDetails" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.errorDetails"></a>

```typescript
public readonly errorDetails: DataAzurermHybridComputeMachineErrorDetailsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList">DataAzurermHybridComputeMachineErrorDetailsList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.identity"></a>

```typescript
public readonly identity: DataAzurermHybridComputeMachineIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList">DataAzurermHybridComputeMachineIdentityList</a>

---

##### `lastStatusChange`<sup>Required</sup> <a name="lastStatusChange" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.lastStatusChange"></a>

```typescript
public readonly lastStatusChange: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `locationData`<sup>Required</sup> <a name="locationData" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.locationData"></a>

```typescript
public readonly locationData: DataAzurermHybridComputeMachineLocationDataList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList">DataAzurermHybridComputeMachineLocationDataList</a>

---

##### `machineFqdn`<sup>Required</sup> <a name="machineFqdn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.machineFqdn"></a>

```typescript
public readonly machineFqdn: string;
```

- *Type:* string

---

##### `mssqlDiscovered`<sup>Required</sup> <a name="mssqlDiscovered" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.mssqlDiscovered"></a>

```typescript
public readonly mssqlDiscovered: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `osName`<sup>Required</sup> <a name="osName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osName"></a>

```typescript
public readonly osName: string;
```

- *Type:* string

---

##### `osProfile`<sup>Required</sup> <a name="osProfile" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osProfile"></a>

```typescript
public readonly osProfile: DataAzurermHybridComputeMachineOsProfileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList">DataAzurermHybridComputeMachineOsProfileList</a>

---

##### `osSku`<sup>Required</sup> <a name="osSku" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osSku"></a>

```typescript
public readonly osSku: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

---

##### `parentClusterResourceId`<sup>Required</sup> <a name="parentClusterResourceId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.parentClusterResourceId"></a>

```typescript
public readonly parentClusterResourceId: string;
```

- *Type:* string

---

##### `privateLinkScopeResourceId`<sup>Required</sup> <a name="privateLinkScopeResourceId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.privateLinkScopeResourceId"></a>

```typescript
public readonly privateLinkScopeResourceId: string;
```

- *Type:* string

---

##### `serviceStatus`<sup>Required</sup> <a name="serviceStatus" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.serviceStatus"></a>

```typescript
public readonly serviceStatus: DataAzurermHybridComputeMachineServiceStatusList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList">DataAzurermHybridComputeMachineServiceStatusList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermHybridComputeMachineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference">DataAzurermHybridComputeMachineTimeoutsOutputReference</a>

---

##### `vmId`<sup>Required</sup> <a name="vmId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmId"></a>

```typescript
public readonly vmId: string;
```

- *Type:* string

---

##### `vmUuid`<sup>Required</sup> <a name="vmUuid" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.vmUuid"></a>

```typescript
public readonly vmUuid: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermHybridComputeMachineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermHybridComputeMachineAgentConfiguration <a name="DataAzurermHybridComputeMachineAgentConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineAgentConfiguration: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration = { ... }
```


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct = { ... }
```


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct = { ... }
```


### DataAzurermHybridComputeMachineCloudMetadata <a name="DataAzurermHybridComputeMachineCloudMetadata" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineCloudMetadata: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata = { ... }
```


### DataAzurermHybridComputeMachineConfig <a name="DataAzurermHybridComputeMachineConfig" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineConfig: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine#name DataAzurermHybridComputeMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine#resource_group_name DataAzurermHybridComputeMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine#id DataAzurermHybridComputeMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine#name DataAzurermHybridComputeMachine#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine#resource_group_name DataAzurermHybridComputeMachine#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine#id DataAzurermHybridComputeMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermHybridComputeMachineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine#timeouts DataAzurermHybridComputeMachine#timeouts}

---

### DataAzurermHybridComputeMachineErrorDetails <a name="DataAzurermHybridComputeMachineErrorDetails" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineErrorDetails: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails = { ... }
```


### DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo <a name="DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineErrorDetailsAdditionalInfo: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo = { ... }
```


### DataAzurermHybridComputeMachineIdentity <a name="DataAzurermHybridComputeMachineIdentity" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineIdentity: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity = { ... }
```


### DataAzurermHybridComputeMachineLocationData <a name="DataAzurermHybridComputeMachineLocationData" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineLocationData: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData = { ... }
```


### DataAzurermHybridComputeMachineOsProfile <a name="DataAzurermHybridComputeMachineOsProfile" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineOsProfile: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile = { ... }
```


### DataAzurermHybridComputeMachineOsProfileLinuxConfiguration <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineOsProfileLinuxConfiguration: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration = { ... }
```


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings = { ... }
```


### DataAzurermHybridComputeMachineOsProfileWindowsConfiguration <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineOsProfileWindowsConfiguration: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration = { ... }
```


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings = { ... }
```


### DataAzurermHybridComputeMachineServiceStatus <a name="DataAzurermHybridComputeMachineServiceStatus" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineServiceStatus: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus = { ... }
```


### DataAzurermHybridComputeMachineServiceStatusExtensionService <a name="DataAzurermHybridComputeMachineServiceStatusExtensionService" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineServiceStatusExtensionService: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService = { ... }
```


### DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService <a name="DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineServiceStatusGuestConfigurationService: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService = { ... }
```


### DataAzurermHybridComputeMachineTimeouts <a name="DataAzurermHybridComputeMachineTimeouts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

const dataAzurermHybridComputeMachineTimeouts: dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine#read DataAzurermHybridComputeMachine#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/data-sources/hybrid_compute_machine#read DataAzurermHybridComputeMachine#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStruct</a>

---


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference <a name="DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.publisher">publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.publisher"></a>

```typescript
public readonly publisher: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStruct</a>

---


### DataAzurermHybridComputeMachineAgentConfigurationList <a name="DataAzurermHybridComputeMachineAgentConfigurationList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineAgentConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineAgentConfigurationOutputReference <a name="DataAzurermHybridComputeMachineAgentConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsAllowList">extensionsAllowList</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsBlockList">extensionsBlockList</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsEnabled">extensionsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.guestConfigurationEnabled">guestConfigurationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.incomingConnectionsPorts">incomingConnectionsPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyBypass">proxyBypass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration">DataAzurermHybridComputeMachineAgentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensionsAllowList`<sup>Required</sup> <a name="extensionsAllowList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsAllowList"></a>

```typescript
public readonly extensionsAllowList: DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsAllowListStructList</a>

---

##### `extensionsBlockList`<sup>Required</sup> <a name="extensionsBlockList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsBlockList"></a>

```typescript
public readonly extensionsBlockList: DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList">DataAzurermHybridComputeMachineAgentConfigurationExtensionsBlockListStructList</a>

---

##### `extensionsEnabled`<sup>Required</sup> <a name="extensionsEnabled" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.extensionsEnabled"></a>

```typescript
public readonly extensionsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `guestConfigurationEnabled`<sup>Required</sup> <a name="guestConfigurationEnabled" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.guestConfigurationEnabled"></a>

```typescript
public readonly guestConfigurationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `incomingConnectionsPorts`<sup>Required</sup> <a name="incomingConnectionsPorts" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.incomingConnectionsPorts"></a>

```typescript
public readonly incomingConnectionsPorts: string[];
```

- *Type:* string[]

---

##### `proxyBypass`<sup>Required</sup> <a name="proxyBypass" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyBypass"></a>

```typescript
public readonly proxyBypass: string[];
```

- *Type:* string[]

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineAgentConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineAgentConfiguration">DataAzurermHybridComputeMachineAgentConfiguration</a>

---


### DataAzurermHybridComputeMachineCloudMetadataList <a name="DataAzurermHybridComputeMachineCloudMetadataList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineCloudMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineCloudMetadataOutputReference <a name="DataAzurermHybridComputeMachineCloudMetadataOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata">DataAzurermHybridComputeMachineCloudMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineCloudMetadata;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineCloudMetadata">DataAzurermHybridComputeMachineCloudMetadata</a>

---


### DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList <a name="DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference <a name="DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.info">info</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.info"></a>

```typescript
public readonly info: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfo</a>

---


### DataAzurermHybridComputeMachineErrorDetailsList <a name="DataAzurermHybridComputeMachineErrorDetailsList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineErrorDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineErrorDetailsOutputReference <a name="DataAzurermHybridComputeMachineErrorDetailsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.additionalInfo">additionalInfo</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails">DataAzurermHybridComputeMachineErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalInfo`<sup>Required</sup> <a name="additionalInfo" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.additionalInfo"></a>

```typescript
public readonly additionalInfo: DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList">DataAzurermHybridComputeMachineErrorDetailsAdditionalInfoList</a>

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineErrorDetails;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineErrorDetails">DataAzurermHybridComputeMachineErrorDetails</a>

---


### DataAzurermHybridComputeMachineIdentityList <a name="DataAzurermHybridComputeMachineIdentityList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineIdentityOutputReference <a name="DataAzurermHybridComputeMachineIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity">DataAzurermHybridComputeMachineIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineIdentity">DataAzurermHybridComputeMachineIdentity</a>

---


### DataAzurermHybridComputeMachineLocationDataList <a name="DataAzurermHybridComputeMachineLocationDataList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineLocationDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineLocationDataOutputReference <a name="DataAzurermHybridComputeMachineLocationDataOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.countryOrRegion">countryOrRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.district">district</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData">DataAzurermHybridComputeMachineLocationData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `countryOrRegion`<sup>Required</sup> <a name="countryOrRegion" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.countryOrRegion"></a>

```typescript
public readonly countryOrRegion: string;
```

- *Type:* string

---

##### `district`<sup>Required</sup> <a name="district" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.district"></a>

```typescript
public readonly district: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineLocationData;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineLocationData">DataAzurermHybridComputeMachineLocationData</a>

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.patchSettings">patchSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration">DataAzurermHybridComputeMachineOsProfileLinuxConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patchSettings`<sup>Required</sup> <a name="patchSettings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.patchSettings"></a>

```typescript
public readonly patchSettings: DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineOsProfileLinuxConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfiguration">DataAzurermHybridComputeMachineOsProfileLinuxConfiguration</a>

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference <a name="DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.assessmentMode">assessmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.patchMode">patchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assessmentMode`<sup>Required</sup> <a name="assessmentMode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.assessmentMode"></a>

```typescript
public readonly assessmentMode: string;
```

- *Type:* string

---

##### `patchMode`<sup>Required</sup> <a name="patchMode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.patchMode"></a>

```typescript
public readonly patchMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationPatchSettings</a>

---


### DataAzurermHybridComputeMachineOsProfileList <a name="DataAzurermHybridComputeMachineOsProfileList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineOsProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineOsProfileOutputReference <a name="DataAzurermHybridComputeMachineOsProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.computerName">computerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.linuxConfiguration">linuxConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.windowsConfiguration">windowsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile">DataAzurermHybridComputeMachineOsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.computerName"></a>

```typescript
public readonly computerName: string;
```

- *Type:* string

---

##### `linuxConfiguration`<sup>Required</sup> <a name="linuxConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.linuxConfiguration"></a>

```typescript
public readonly linuxConfiguration: DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList">DataAzurermHybridComputeMachineOsProfileLinuxConfigurationList</a>

---

##### `windowsConfiguration`<sup>Required</sup> <a name="windowsConfiguration" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.windowsConfiguration"></a>

```typescript
public readonly windowsConfiguration: DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineOsProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfile">DataAzurermHybridComputeMachineOsProfile</a>

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.patchSettings">patchSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration">DataAzurermHybridComputeMachineOsProfileWindowsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patchSettings`<sup>Required</sup> <a name="patchSettings" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.patchSettings"></a>

```typescript
public readonly patchSettings: DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineOsProfileWindowsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfiguration">DataAzurermHybridComputeMachineOsProfileWindowsConfiguration</a>

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference <a name="DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.assessmentMode">assessmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.patchMode">patchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assessmentMode`<sup>Required</sup> <a name="assessmentMode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.assessmentMode"></a>

```typescript
public readonly assessmentMode: string;
```

- *Type:* string

---

##### `patchMode`<sup>Required</sup> <a name="patchMode" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.patchMode"></a>

```typescript
public readonly patchMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings">DataAzurermHybridComputeMachineOsProfileWindowsConfigurationPatchSettings</a>

---


### DataAzurermHybridComputeMachineServiceStatusExtensionServiceList <a name="DataAzurermHybridComputeMachineServiceStatusExtensionServiceList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference <a name="DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.startupType">startupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService">DataAzurermHybridComputeMachineServiceStatusExtensionService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startupType`<sup>Required</sup> <a name="startupType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.startupType"></a>

```typescript
public readonly startupType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineServiceStatusExtensionService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionService">DataAzurermHybridComputeMachineServiceStatusExtensionService</a>

---


### DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList <a name="DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference <a name="DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.startupType">startupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startupType`<sup>Required</sup> <a name="startupType" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.startupType"></a>

```typescript
public readonly startupType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationService</a>

---


### DataAzurermHybridComputeMachineServiceStatusList <a name="DataAzurermHybridComputeMachineServiceStatusList" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.get"></a>

```typescript
public get(index: number): DataAzurermHybridComputeMachineServiceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermHybridComputeMachineServiceStatusOutputReference <a name="DataAzurermHybridComputeMachineServiceStatusOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.extensionService">extensionService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList">DataAzurermHybridComputeMachineServiceStatusExtensionServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.guestConfigurationService">guestConfigurationService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus">DataAzurermHybridComputeMachineServiceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensionService`<sup>Required</sup> <a name="extensionService" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.extensionService"></a>

```typescript
public readonly extensionService: DataAzurermHybridComputeMachineServiceStatusExtensionServiceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusExtensionServiceList">DataAzurermHybridComputeMachineServiceStatusExtensionServiceList</a>

---

##### `guestConfigurationService`<sup>Required</sup> <a name="guestConfigurationService" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.guestConfigurationService"></a>

```typescript
public readonly guestConfigurationService: DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList">DataAzurermHybridComputeMachineServiceStatusGuestConfigurationServiceList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermHybridComputeMachineServiceStatus;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineServiceStatus">DataAzurermHybridComputeMachineServiceStatus</a>

---


### DataAzurermHybridComputeMachineTimeoutsOutputReference <a name="DataAzurermHybridComputeMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermHybridComputeMachine } from '@cdktf/provider-azurerm'

new dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermHybridComputeMachineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermHybridComputeMachine.DataAzurermHybridComputeMachineTimeouts">DataAzurermHybridComputeMachineTimeouts</a>

---



