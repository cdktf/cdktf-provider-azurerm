# `dataAzurermServicebusSubscription` Submodule <a name="`dataAzurermServicebusSubscription` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusSubscription <a name="DataAzurermServicebusSubscription" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription azurerm_servicebus_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer"></a>

```typescript
import { dataAzurermServicebusSubscription } from '@cdktf/provider-azurerm'

new dataAzurermServicebusSubscription.DataAzurermServicebusSubscription(scope: Construct, id: string, config: DataAzurermServicebusSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig">DataAzurermServicebusSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig">DataAzurermServicebusSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetNamespaceName">resetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTopicId">resetTopicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTopicName">resetTopicName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermServicebusSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespaceName` <a name="resetNamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetNamespaceName"></a>

```typescript
public resetNamespaceName(): void
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetResourceGroupName"></a>

```typescript
public resetResourceGroupName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTopicId` <a name="resetTopicId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTopicId"></a>

```typescript
public resetTopicId(): void
```

##### `resetTopicName` <a name="resetTopicName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTopicName"></a>

```typescript
public resetTopicName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermServicebusSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isConstruct"></a>

```typescript
import { dataAzurermServicebusSubscription } from '@cdktf/provider-azurerm'

dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformElement"></a>

```typescript
import { dataAzurermServicebusSubscription } from '@cdktf/provider-azurerm'

dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformDataSource"></a>

```typescript
import { dataAzurermServicebusSubscription } from '@cdktf/provider-azurerm'

dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport"></a>

```typescript
import { dataAzurermServicebusSubscription } from '@cdktf/provider-azurerm'

dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermServicebusSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermServicebusSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermServicebusSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.batchedOperationsEnabled">batchedOperationsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.deadLetteringOnFilterEvaluationError">deadLetteringOnFilterEvaluationError</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.deadLetteringOnMessageExpiration">deadLetteringOnMessageExpiration</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.defaultMessageTtl">defaultMessageTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.enableBatchedOperations">enableBatchedOperations</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forwardDeadLetteredMessagesTo">forwardDeadLetteredMessagesTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forwardTo">forwardTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.lockDuration">lockDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.maxDeliveryCount">maxDeliveryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.requiresSession">requiresSession</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference">DataAzurermServicebusSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicIdInput">topicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicNameInput">topicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoDeleteOnIdle`<sup>Required</sup> <a name="autoDeleteOnIdle" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.autoDeleteOnIdle"></a>

```typescript
public readonly autoDeleteOnIdle: string;
```

- *Type:* string

---

##### `batchedOperationsEnabled`<sup>Required</sup> <a name="batchedOperationsEnabled" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.batchedOperationsEnabled"></a>

```typescript
public readonly batchedOperationsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `deadLetteringOnFilterEvaluationError`<sup>Required</sup> <a name="deadLetteringOnFilterEvaluationError" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.deadLetteringOnFilterEvaluationError"></a>

```typescript
public readonly deadLetteringOnFilterEvaluationError: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `deadLetteringOnMessageExpiration`<sup>Required</sup> <a name="deadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.deadLetteringOnMessageExpiration"></a>

```typescript
public readonly deadLetteringOnMessageExpiration: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `defaultMessageTtl`<sup>Required</sup> <a name="defaultMessageTtl" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.defaultMessageTtl"></a>

```typescript
public readonly defaultMessageTtl: string;
```

- *Type:* string

---

##### `enableBatchedOperations`<sup>Required</sup> <a name="enableBatchedOperations" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.enableBatchedOperations"></a>

```typescript
public readonly enableBatchedOperations: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `forwardDeadLetteredMessagesTo`<sup>Required</sup> <a name="forwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forwardDeadLetteredMessagesTo"></a>

```typescript
public readonly forwardDeadLetteredMessagesTo: string;
```

- *Type:* string

---

##### `forwardTo`<sup>Required</sup> <a name="forwardTo" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forwardTo"></a>

```typescript
public readonly forwardTo: string;
```

- *Type:* string

---

##### `lockDuration`<sup>Required</sup> <a name="lockDuration" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.lockDuration"></a>

```typescript
public readonly lockDuration: string;
```

- *Type:* string

---

##### `maxDeliveryCount`<sup>Required</sup> <a name="maxDeliveryCount" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.maxDeliveryCount"></a>

```typescript
public readonly maxDeliveryCount: number;
```

- *Type:* number

---

##### `requiresSession`<sup>Required</sup> <a name="requiresSession" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.requiresSession"></a>

```typescript
public readonly requiresSession: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference">DataAzurermServicebusSubscriptionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermServicebusSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a>

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicIdInput"></a>

```typescript
public readonly topicIdInput: string;
```

- *Type:* string

---

##### `topicNameInput`<sup>Optional</sup> <a name="topicNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicNameInput"></a>

```typescript
public readonly topicNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusSubscriptionConfig <a name="DataAzurermServicebusSubscriptionConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.Initializer"></a>

```typescript
import { dataAzurermServicebusSubscription } from '@cdktf/provider-azurerm'

const dataAzurermServicebusSubscriptionConfig: dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#name DataAzurermServicebusSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#id DataAzurermServicebusSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#namespace_name DataAzurermServicebusSubscription#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#resource_group_name DataAzurermServicebusSubscription#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.topicId">topicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#topic_id DataAzurermServicebusSubscription#topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.topicName">topicName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#topic_name DataAzurermServicebusSubscription#topic_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#name DataAzurermServicebusSubscription#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#id DataAzurermServicebusSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaceName`<sup>Optional</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#namespace_name DataAzurermServicebusSubscription#namespace_name}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#resource_group_name DataAzurermServicebusSubscription#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusSubscriptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#timeouts DataAzurermServicebusSubscription#timeouts}

---

##### `topicId`<sup>Optional</sup> <a name="topicId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#topic_id DataAzurermServicebusSubscription#topic_id}.

---

##### `topicName`<sup>Optional</sup> <a name="topicName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#topic_name DataAzurermServicebusSubscription#topic_name}.

---

### DataAzurermServicebusSubscriptionTimeouts <a name="DataAzurermServicebusSubscriptionTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts.Initializer"></a>

```typescript
import { dataAzurermServicebusSubscription } from '@cdktf/provider-azurerm'

const dataAzurermServicebusSubscriptionTimeouts: dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#read DataAzurermServicebusSubscription#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/servicebus_subscription#read DataAzurermServicebusSubscription#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusSubscriptionTimeoutsOutputReference <a name="DataAzurermServicebusSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermServicebusSubscription } from '@cdktf/provider-azurerm'

new dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermServicebusSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a>

---



