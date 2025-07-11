# `dataAzurermServicebusTopic` Submodule <a name="`dataAzurermServicebusTopic` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusTopic <a name="DataAzurermServicebusTopic" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic azurerm_servicebus_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer"></a>

```typescript
import { dataAzurermServicebusTopic } from '@cdktf/provider-azurerm'

new dataAzurermServicebusTopic.DataAzurermServicebusTopic(scope: Construct, id: string, config: DataAzurermServicebusTopicConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig">DataAzurermServicebusTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig">DataAzurermServicebusTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetNamespaceName">resetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermServicebusTopicTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts">DataAzurermServicebusTopicTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetNamespaceId"></a>

```typescript
public resetNamespaceId(): void
```

##### `resetNamespaceName` <a name="resetNamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetNamespaceName"></a>

```typescript
public resetNamespaceName(): void
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetResourceGroupName"></a>

```typescript
public resetResourceGroupName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermServicebusTopic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isConstruct"></a>

```typescript
import { dataAzurermServicebusTopic } from '@cdktf/provider-azurerm'

dataAzurermServicebusTopic.DataAzurermServicebusTopic.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformElement"></a>

```typescript
import { dataAzurermServicebusTopic } from '@cdktf/provider-azurerm'

dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformDataSource"></a>

```typescript
import { dataAzurermServicebusTopic } from '@cdktf/provider-azurerm'

dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport"></a>

```typescript
import { dataAzurermServicebusTopic } from '@cdktf/provider-azurerm'

dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermServicebusTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermServicebusTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermServicebusTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.batchedOperationsEnabled">batchedOperationsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.defaultMessageTtl">defaultMessageTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.duplicateDetectionHistoryTimeWindow">duplicateDetectionHistoryTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enableBatchedOperations">enableBatchedOperations</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enableExpress">enableExpress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enablePartitioning">enablePartitioning</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.expressEnabled">expressEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.maxSizeInMegabytes">maxSizeInMegabytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.partitioningEnabled">partitioningEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.requiresDuplicateDetection">requiresDuplicateDetection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.supportOrdering">supportOrdering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference">DataAzurermServicebusTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts">DataAzurermServicebusTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoDeleteOnIdle`<sup>Required</sup> <a name="autoDeleteOnIdle" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.autoDeleteOnIdle"></a>

```typescript
public readonly autoDeleteOnIdle: string;
```

- *Type:* string

---

##### `batchedOperationsEnabled`<sup>Required</sup> <a name="batchedOperationsEnabled" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.batchedOperationsEnabled"></a>

```typescript
public readonly batchedOperationsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `defaultMessageTtl`<sup>Required</sup> <a name="defaultMessageTtl" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.defaultMessageTtl"></a>

```typescript
public readonly defaultMessageTtl: string;
```

- *Type:* string

---

##### `duplicateDetectionHistoryTimeWindow`<sup>Required</sup> <a name="duplicateDetectionHistoryTimeWindow" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.duplicateDetectionHistoryTimeWindow"></a>

```typescript
public readonly duplicateDetectionHistoryTimeWindow: string;
```

- *Type:* string

---

##### `enableBatchedOperations`<sup>Required</sup> <a name="enableBatchedOperations" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enableBatchedOperations"></a>

```typescript
public readonly enableBatchedOperations: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableExpress`<sup>Required</sup> <a name="enableExpress" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enableExpress"></a>

```typescript
public readonly enableExpress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enablePartitioning`<sup>Required</sup> <a name="enablePartitioning" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enablePartitioning"></a>

```typescript
public readonly enablePartitioning: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expressEnabled`<sup>Required</sup> <a name="expressEnabled" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.expressEnabled"></a>

```typescript
public readonly expressEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxSizeInMegabytes`<sup>Required</sup> <a name="maxSizeInMegabytes" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.maxSizeInMegabytes"></a>

```typescript
public readonly maxSizeInMegabytes: number;
```

- *Type:* number

---

##### `partitioningEnabled`<sup>Required</sup> <a name="partitioningEnabled" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.partitioningEnabled"></a>

```typescript
public readonly partitioningEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requiresDuplicateDetection`<sup>Required</sup> <a name="requiresDuplicateDetection" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.requiresDuplicateDetection"></a>

```typescript
public readonly requiresDuplicateDetection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `supportOrdering`<sup>Required</sup> <a name="supportOrdering" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.supportOrdering"></a>

```typescript
public readonly supportOrdering: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusTopicTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference">DataAzurermServicebusTopicTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermServicebusTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts">DataAzurermServicebusTopicTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusTopicConfig <a name="DataAzurermServicebusTopicConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.Initializer"></a>

```typescript
import { dataAzurermServicebusTopic } from '@cdktf/provider-azurerm'

const dataAzurermServicebusTopicConfig: dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#name DataAzurermServicebusTopic#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#id DataAzurermServicebusTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#namespace_id DataAzurermServicebusTopic#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#namespace_name DataAzurermServicebusTopic#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#resource_group_name DataAzurermServicebusTopic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts">DataAzurermServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#name DataAzurermServicebusTopic#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#id DataAzurermServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#namespace_id DataAzurermServicebusTopic#namespace_id}.

---

##### `namespaceName`<sup>Optional</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#namespace_name DataAzurermServicebusTopic#namespace_name}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#resource_group_name DataAzurermServicebusTopic#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusTopicTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts">DataAzurermServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#timeouts DataAzurermServicebusTopic#timeouts}

---

### DataAzurermServicebusTopicTimeouts <a name="DataAzurermServicebusTopicTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts.Initializer"></a>

```typescript
import { dataAzurermServicebusTopic } from '@cdktf/provider-azurerm'

const dataAzurermServicebusTopicTimeouts: dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#read DataAzurermServicebusTopic#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/servicebus_topic#read DataAzurermServicebusTopic#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusTopicTimeoutsOutputReference <a name="DataAzurermServicebusTopicTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermServicebusTopic } from '@cdktf/provider-azurerm'

new dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts">DataAzurermServicebusTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermServicebusTopicTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts">DataAzurermServicebusTopicTimeouts</a>

---



