# `dataAzurermMobileNetworkSimPolicy` Submodule <a name="`dataAzurermMobileNetworkSimPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkSimPolicy <a name="DataAzurermMobileNetworkSimPolicy" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy azurerm_mobile_network_sim_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy(scope: Construct, id: string, config: DataAzurermMobileNetworkSimPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig">DataAzurermMobileNetworkSimPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig">DataAzurermMobileNetworkSimPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMobileNetworkSimPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isConstruct"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformElement"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformDataSource"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMobileNetworkSimPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMobileNetworkSimPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkSimPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.defaultSliceId">defaultSliceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndex">ratFrequencySelectionPriorityIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.registrationTimerInSeconds">registrationTimerInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.slice">slice</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList">DataAzurermMobileNetworkSimPolicySliceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference">DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRate">userEquipmentAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkIdInput">mobileNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkId">mobileNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `defaultSliceId`<sup>Required</sup> <a name="defaultSliceId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.defaultSliceId"></a>

```typescript
public readonly defaultSliceId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `ratFrequencySelectionPriorityIndex`<sup>Required</sup> <a name="ratFrequencySelectionPriorityIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndex"></a>

```typescript
public readonly ratFrequencySelectionPriorityIndex: number;
```

- *Type:* number

---

##### `registrationTimerInSeconds`<sup>Required</sup> <a name="registrationTimerInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.registrationTimerInSeconds"></a>

```typescript
public readonly registrationTimerInSeconds: number;
```

- *Type:* number

---

##### `slice`<sup>Required</sup> <a name="slice" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.slice"></a>

```typescript
public readonly slice: DataAzurermMobileNetworkSimPolicySliceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList">DataAzurermMobileNetworkSimPolicySliceList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference">DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference</a>

---

##### `userEquipmentAggregateMaximumBitRate`<sup>Required</sup> <a name="userEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRate"></a>

```typescript
public readonly userEquipmentAggregateMaximumBitRate: DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mobileNetworkIdInput`<sup>Optional</sup> <a name="mobileNetworkIdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkIdInput"></a>

```typescript
public readonly mobileNetworkIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMobileNetworkSimPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkId"></a>

```typescript
public readonly mobileNetworkId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkSimPolicyConfig <a name="DataAzurermMobileNetworkSimPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkSimPolicyConfig: dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.mobileNetworkId">mobileNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy#mobile_network_id DataAzurermMobileNetworkSimPolicy#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy#name DataAzurermMobileNetworkSimPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy#id DataAzurermMobileNetworkSimPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.mobileNetworkId"></a>

```typescript
public readonly mobileNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy#mobile_network_id DataAzurermMobileNetworkSimPolicy#mobile_network_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy#name DataAzurermMobileNetworkSimPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy#id DataAzurermMobileNetworkSimPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMobileNetworkSimPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy#timeouts DataAzurermMobileNetworkSimPolicy#timeouts}

---

### DataAzurermMobileNetworkSimPolicySlice <a name="DataAzurermMobileNetworkSimPolicySlice" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkSimPolicySlice: dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice = { ... }
```


### DataAzurermMobileNetworkSimPolicySliceDataNetwork <a name="DataAzurermMobileNetworkSimPolicySliceDataNetwork" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkSimPolicySliceDataNetwork: dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork = { ... }
```


### DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate: dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate = { ... }
```


### DataAzurermMobileNetworkSimPolicyTimeouts <a name="DataAzurermMobileNetworkSimPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkSimPolicyTimeouts: dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy#read DataAzurermMobileNetworkSimPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/data-sources/mobile_network_sim_policy#read DataAzurermMobileNetworkSimPolicy#read}.

---

### DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate <a name="DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

const dataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate: dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkSimPolicySliceDataNetworkList <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypes">additionalAllowedSessionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevel">allocationAndRetentionPriorityLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIds">allowedServicesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkId">dataNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionType">defaultSessionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPackets">maxBufferedPackets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapability">preemptionCapability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerability">preemptionVulnerability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicator">qosIndicator</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRate">sessionAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork">DataAzurermMobileNetworkSimPolicySliceDataNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalAllowedSessionTypes`<sup>Required</sup> <a name="additionalAllowedSessionTypes" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypes"></a>

```typescript
public readonly additionalAllowedSessionTypes: string[];
```

- *Type:* string[]

---

##### `allocationAndRetentionPriorityLevel`<sup>Required</sup> <a name="allocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```typescript
public readonly allocationAndRetentionPriorityLevel: number;
```

- *Type:* number

---

##### `allowedServicesIds`<sup>Required</sup> <a name="allowedServicesIds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIds"></a>

```typescript
public readonly allowedServicesIds: string[];
```

- *Type:* string[]

---

##### `dataNetworkId`<sup>Required</sup> <a name="dataNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkId"></a>

```typescript
public readonly dataNetworkId: string;
```

- *Type:* string

---

##### `defaultSessionType`<sup>Required</sup> <a name="defaultSessionType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionType"></a>

```typescript
public readonly defaultSessionType: string;
```

- *Type:* string

---

##### `maxBufferedPackets`<sup>Required</sup> <a name="maxBufferedPackets" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPackets"></a>

```typescript
public readonly maxBufferedPackets: number;
```

- *Type:* number

---

##### `preemptionCapability`<sup>Required</sup> <a name="preemptionCapability" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapability"></a>

```typescript
public readonly preemptionCapability: string;
```

- *Type:* string

---

##### `preemptionVulnerability`<sup>Required</sup> <a name="preemptionVulnerability" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerability"></a>

```typescript
public readonly preemptionVulnerability: string;
```

- *Type:* string

---

##### `qosIndicator`<sup>Required</sup> <a name="qosIndicator" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicator"></a>

```typescript
public readonly qosIndicator: number;
```

- *Type:* number

---

##### `sessionAggregateMaximumBitRate`<sup>Required</sup> <a name="sessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRate"></a>

```typescript
public readonly sessionAggregateMaximumBitRate: DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkSimPolicySliceDataNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork">DataAzurermMobileNetworkSimPolicySliceDataNetwork</a>

---


### DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlink">downlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplink">uplink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlink"></a>

```typescript
public readonly downlink: string;
```

- *Type:* string

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplink"></a>

```typescript
public readonly uplink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

---


### DataAzurermMobileNetworkSimPolicySliceList <a name="DataAzurermMobileNetworkSimPolicySliceList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkSimPolicySliceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkSimPolicySliceOutputReference <a name="DataAzurermMobileNetworkSimPolicySliceOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.dataNetwork">dataNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList">DataAzurermMobileNetworkSimPolicySliceDataNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkId">defaultDataNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.sliceId">sliceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice">DataAzurermMobileNetworkSimPolicySlice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataNetwork`<sup>Required</sup> <a name="dataNetwork" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.dataNetwork"></a>

```typescript
public readonly dataNetwork: DataAzurermMobileNetworkSimPolicySliceDataNetworkList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList">DataAzurermMobileNetworkSimPolicySliceDataNetworkList</a>

---

##### `defaultDataNetworkId`<sup>Required</sup> <a name="defaultDataNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkId"></a>

```typescript
public readonly defaultDataNetworkId: string;
```

- *Type:* string

---

##### `sliceId`<sup>Required</sup> <a name="sliceId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.sliceId"></a>

```typescript
public readonly sliceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkSimPolicySlice;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice">DataAzurermMobileNetworkSimPolicySlice</a>

---


### DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference <a name="DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMobileNetworkSimPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>

---


### DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList <a name="DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.get"></a>

```typescript
public get(index: number): DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference <a name="DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer"></a>

```typescript
import { dataAzurermMobileNetworkSimPolicy } from '@cdktf/provider-azurerm'

new dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlink">downlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplink">uplink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlink"></a>

```typescript
public readonly downlink: string;
```

- *Type:* string

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplink"></a>

```typescript
public readonly uplink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

---



