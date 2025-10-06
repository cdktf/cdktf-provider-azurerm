# `dataAzurermServicebusTopicAuthorizationRule` Submodule <a name="`dataAzurermServicebusTopicAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusTopicAuthorizationRule <a name="DataAzurermServicebusTopicAuthorizationRule" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule azurerm_servicebus_topic_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer"></a>

```typescript
import { dataAzurermServicebusTopicAuthorizationRule } from '@cdktf/provider-azurerm'

new dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule(scope: Construct, id: string, config: DataAzurermServicebusTopicAuthorizationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig">DataAzurermServicebusTopicAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig">DataAzurermServicebusTopicAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetNamespaceName">resetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetQueueName">resetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTopicId">resetTopicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTopicName">resetTopicName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermServicebusTopicAuthorizationRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts">DataAzurermServicebusTopicAuthorizationRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespaceName` <a name="resetNamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetNamespaceName"></a>

```typescript
public resetNamespaceName(): void
```

##### `resetQueueName` <a name="resetQueueName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetQueueName"></a>

```typescript
public resetQueueName(): void
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetResourceGroupName"></a>

```typescript
public resetResourceGroupName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTopicId` <a name="resetTopicId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTopicId"></a>

```typescript
public resetTopicId(): void
```

##### `resetTopicName` <a name="resetTopicName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.resetTopicName"></a>

```typescript
public resetTopicName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermServicebusTopicAuthorizationRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isConstruct"></a>

```typescript
import { dataAzurermServicebusTopicAuthorizationRule } from '@cdktf/provider-azurerm'

dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformElement"></a>

```typescript
import { dataAzurermServicebusTopicAuthorizationRule } from '@cdktf/provider-azurerm'

dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformDataSource"></a>

```typescript
import { dataAzurermServicebusTopicAuthorizationRule } from '@cdktf/provider-azurerm'

dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport"></a>

```typescript
import { dataAzurermServicebusTopicAuthorizationRule } from '@cdktf/provider-azurerm'

dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermServicebusTopicAuthorizationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermServicebusTopicAuthorizationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermServicebusTopicAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusTopicAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.listen">listen</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.manage">manage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryConnectionStringAlias">primaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryConnectionStringAlias">secondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.send">send</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.queueNameInput">queueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts">DataAzurermServicebusTopicAuthorizationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicIdInput">topicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicNameInput">topicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicName">topicName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `listen`<sup>Required</sup> <a name="listen" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.listen"></a>

```typescript
public readonly listen: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `manage`<sup>Required</sup> <a name="manage" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.manage"></a>

```typescript
public readonly manage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryConnectionStringAlias`<sup>Required</sup> <a name="primaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryConnectionStringAlias"></a>

```typescript
public readonly primaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryConnectionStringAlias`<sup>Required</sup> <a name="secondaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```typescript
public readonly secondaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.send"></a>

```typescript
public readonly send: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.queueNameInput"></a>

```typescript
public readonly queueNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermServicebusTopicAuthorizationRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts">DataAzurermServicebusTopicAuthorizationRuleTimeouts</a>

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicIdInput"></a>

```typescript
public readonly topicIdInput: string;
```

- *Type:* string

---

##### `topicNameInput`<sup>Optional</sup> <a name="topicNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicNameInput"></a>

```typescript
public readonly topicNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusTopicAuthorizationRuleConfig <a name="DataAzurermServicebusTopicAuthorizationRuleConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.Initializer"></a>

```typescript
import { dataAzurermServicebusTopicAuthorizationRule } from '@cdktf/provider-azurerm'

const dataAzurermServicebusTopicAuthorizationRuleConfig: dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#name DataAzurermServicebusTopicAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#id DataAzurermServicebusTopicAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#namespace_name DataAzurermServicebusTopicAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.queueName">queueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#queue_name DataAzurermServicebusTopicAuthorizationRule#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#resource_group_name DataAzurermServicebusTopicAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts">DataAzurermServicebusTopicAuthorizationRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.topicId">topicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#topic_id DataAzurermServicebusTopicAuthorizationRule#topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.topicName">topicName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#topic_name DataAzurermServicebusTopicAuthorizationRule#topic_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#name DataAzurermServicebusTopicAuthorizationRule#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#id DataAzurermServicebusTopicAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaceName`<sup>Optional</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#namespace_name DataAzurermServicebusTopicAuthorizationRule#namespace_name}.

---

##### `queueName`<sup>Optional</sup> <a name="queueName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#queue_name DataAzurermServicebusTopicAuthorizationRule#queue_name}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#resource_group_name DataAzurermServicebusTopicAuthorizationRule#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusTopicAuthorizationRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts">DataAzurermServicebusTopicAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#timeouts DataAzurermServicebusTopicAuthorizationRule#timeouts}

---

##### `topicId`<sup>Optional</sup> <a name="topicId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#topic_id DataAzurermServicebusTopicAuthorizationRule#topic_id}.

---

##### `topicName`<sup>Optional</sup> <a name="topicName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleConfig.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#topic_name DataAzurermServicebusTopicAuthorizationRule#topic_name}.

---

### DataAzurermServicebusTopicAuthorizationRuleTimeouts <a name="DataAzurermServicebusTopicAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts.Initializer"></a>

```typescript
import { dataAzurermServicebusTopicAuthorizationRule } from '@cdktf/provider-azurerm'

const dataAzurermServicebusTopicAuthorizationRuleTimeouts: dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#read DataAzurermServicebusTopicAuthorizationRule#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_topic_authorization_rule#read DataAzurermServicebusTopicAuthorizationRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference <a name="DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermServicebusTopicAuthorizationRule } from '@cdktf/provider-azurerm'

new dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts">DataAzurermServicebusTopicAuthorizationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermServicebusTopicAuthorizationRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopicAuthorizationRule.DataAzurermServicebusTopicAuthorizationRuleTimeouts">DataAzurermServicebusTopicAuthorizationRuleTimeouts</a>

---



