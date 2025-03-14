# `dataAzurermPaloAltoLocalRulestack` Submodule <a name="`dataAzurermPaloAltoLocalRulestack` Submodule" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPaloAltoLocalRulestack <a name="DataAzurermPaloAltoLocalRulestack" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack azurerm_palo_alto_local_rulestack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer"></a>

```typescript
import { dataAzurermPaloAltoLocalRulestack } from '@cdktf/provider-azurerm'

new dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack(scope: Construct, id: string, config: DataAzurermPaloAltoLocalRulestackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig">DataAzurermPaloAltoLocalRulestackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig">DataAzurermPaloAltoLocalRulestackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPaloAltoLocalRulestackTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPaloAltoLocalRulestack resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isConstruct"></a>

```typescript
import { dataAzurermPaloAltoLocalRulestack } from '@cdktf/provider-azurerm'

dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformElement"></a>

```typescript
import { dataAzurermPaloAltoLocalRulestack } from '@cdktf/provider-azurerm'

dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformDataSource"></a>

```typescript
import { dataAzurermPaloAltoLocalRulestack } from '@cdktf/provider-azurerm'

dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport"></a>

```typescript
import { dataAzurermPaloAltoLocalRulestack } from '@cdktf/provider-azurerm'

dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermPaloAltoLocalRulestack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPaloAltoLocalRulestack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPaloAltoLocalRulestack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPaloAltoLocalRulestack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiSpywareProfile">antiSpywareProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiVirusProfile">antiVirusProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dnsSubscription">dnsSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fileBlockingProfile">fileBlockingProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundTrustCertificate">outboundTrustCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundUntrustCertificate">outboundUntrustCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference">DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.urlFilteringProfile">urlFilteringProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.vulnerabilityProfile">vulnerabilityProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `antiSpywareProfile`<sup>Required</sup> <a name="antiSpywareProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiSpywareProfile"></a>

```typescript
public readonly antiSpywareProfile: string;
```

- *Type:* string

---

##### `antiVirusProfile`<sup>Required</sup> <a name="antiVirusProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.antiVirusProfile"></a>

```typescript
public readonly antiVirusProfile: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsSubscription`<sup>Required</sup> <a name="dnsSubscription" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.dnsSubscription"></a>

```typescript
public readonly dnsSubscription: string;
```

- *Type:* string

---

##### `fileBlockingProfile`<sup>Required</sup> <a name="fileBlockingProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.fileBlockingProfile"></a>

```typescript
public readonly fileBlockingProfile: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `outboundTrustCertificate`<sup>Required</sup> <a name="outboundTrustCertificate" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundTrustCertificate"></a>

```typescript
public readonly outboundTrustCertificate: string;
```

- *Type:* string

---

##### `outboundUntrustCertificate`<sup>Required</sup> <a name="outboundUntrustCertificate" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.outboundUntrustCertificate"></a>

```typescript
public readonly outboundUntrustCertificate: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference">DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference</a>

---

##### `urlFilteringProfile`<sup>Required</sup> <a name="urlFilteringProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.urlFilteringProfile"></a>

```typescript
public readonly urlFilteringProfile: string;
```

- *Type:* string

---

##### `vulnerabilityProfile`<sup>Required</sup> <a name="vulnerabilityProfile" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.vulnerabilityProfile"></a>

```typescript
public readonly vulnerabilityProfile: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermPaloAltoLocalRulestackTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPaloAltoLocalRulestackConfig <a name="DataAzurermPaloAltoLocalRulestackConfig" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.Initializer"></a>

```typescript
import { dataAzurermPaloAltoLocalRulestack } from '@cdktf/provider-azurerm'

const dataAzurermPaloAltoLocalRulestackConfig: dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack#name DataAzurermPaloAltoLocalRulestack#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack#resource_group_name DataAzurermPaloAltoLocalRulestack#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack#id DataAzurermPaloAltoLocalRulestack#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack#name DataAzurermPaloAltoLocalRulestack#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack#resource_group_name DataAzurermPaloAltoLocalRulestack#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack#id DataAzurermPaloAltoLocalRulestack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPaloAltoLocalRulestackTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack#timeouts DataAzurermPaloAltoLocalRulestack#timeouts}

---

### DataAzurermPaloAltoLocalRulestackTimeouts <a name="DataAzurermPaloAltoLocalRulestackTimeouts" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts.Initializer"></a>

```typescript
import { dataAzurermPaloAltoLocalRulestack } from '@cdktf/provider-azurerm'

const dataAzurermPaloAltoLocalRulestackTimeouts: dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack#read DataAzurermPaloAltoLocalRulestack#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/data-sources/palo_alto_local_rulestack#read DataAzurermPaloAltoLocalRulestack#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference <a name="DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPaloAltoLocalRulestack } from '@cdktf/provider-azurerm'

new dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermPaloAltoLocalRulestackTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPaloAltoLocalRulestack.DataAzurermPaloAltoLocalRulestackTimeouts">DataAzurermPaloAltoLocalRulestackTimeouts</a>

---



